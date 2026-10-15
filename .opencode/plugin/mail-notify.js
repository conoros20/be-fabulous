import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { unlinkSync, writeFileSync } from "node:fs";

const SEND_SCRIPT = join(process.env.HOME ?? "", ".config/opencode/mail/send.py");

// sessionID -> last assistant message id already emailed (dedupe repeated idle events)
const lastSent = new Map();

function textOf(parts) {
  if (!Array.isArray(parts)) return "";
  return parts
    .filter((p) => p && p.type === "text" && typeof p.text === "string")
    .map((p) => p.text)
    .join("\n")
    .trim();
}

export default async ({ client, directory, $ }) => {
  async function notify(sessionID) {
    const getRes = await client.session.get({ path: { id: sessionID } });
    const session = getRes?.data ?? getRes;
    if (!session) return;
    if (session.parentID) return; // skip sub-agent / child sessions
    if (session.directory && session.directory !== directory) return; // scope to this project

    const msgRes = await client.session.messages({ path: { id: sessionID } });
    const messages = Array.isArray(msgRes) ? msgRes : msgRes?.data ?? [];
    const assistants = messages.filter((m) => m?.info?.role === "assistant");
    const last = assistants[assistants.length - 1];
    if (!last) return;

    const messageID = last.info?.id;
    if (messageID && lastSent.get(sessionID) === messageID) return; // already emailed this turn
    if (messageID) lastSent.set(sessionID, messageID);

    const summary = textOf(last.parts);
    if (!summary) return;

    let changed = "none (working tree clean)";
    try {
      const out = await $`git -C ${directory} status --short`.quiet().nothrow();
      if (out.exitCode === 0) {
        const text = out.stdout.toString().trim();
        if (text) changed = text;
      }
    } catch {}

    const now = new Date();
    const stamp = now.toISOString();
    const body = [
      summary,
      "",
      "— — —",
      `project:  ${directory}`,
      `time:     ${stamp}`,
      "files changed:",
      changed,
    ].join("\n");

    const subject = `[opencode] dress-shop — turn complete (${stamp.slice(0, 16).replace("T", " ")})`;

    const tmp = join(tmpdir(), `opencode-mail-${randomUUID()}.txt`);
    writeFileSync(tmp, body);
    try {
      const out = await $`python3 ${SEND_SCRIPT} --subject ${subject} --body-file ${tmp}`
        .quiet()
        .nothrow();
      if (out.exitCode !== 0) {
        console.error("[mail-notify] send.py failed:", out.stderr.toString().trim());
      }
    } finally {
      try {
        unlinkSync(tmp);
      } catch {}
    }
  }

  return {
    event: async ({ event }) => {
      if (!event || event.type !== "session.idle") return;
      const sessionID = event.properties?.sessionID;
      if (!sessionID) return;
      try {
        await notify(sessionID);
      } catch (err) {
        // Never let a mail failure disrupt the session.
        try {
          console.error("[mail-notify]", err?.message ?? err);
        } catch {}
      }
    },
  };
};
