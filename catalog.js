const SIZE_CHART = [
  { size:"XS",  bust:"80–84",  waist:"62–66",   hip:"88–92",   us:"0–2",   uk:"4–6",   eu:"32–34", aus:"4–6"   },
  { size:"S",   bust:"86–90",  waist:"68–72",   hip:"94–98",   us:"4–6",   uk:"8–10",  eu:"36–38", aus:"8–10"  },
  { size:"M",   bust:"92–96",  waist:"74–78",   hip:"100–104", us:"8–10",  uk:"12–14", eu:"40–42", aus:"12–14" },
  { size:"L",   bust:"100–104",waist:"82–86",   hip:"106–110", us:"12–14", uk:"16–18", eu:"44–46", aus:"16–18" },
  { size:"XL",  bust:"108–112",waist:"90–94",   hip:"114–118", us:"16–18", uk:"20–22", eu:"48–50", aus:"20–22" },
  { size:"2XL", bust:"116–120",waist:"98–102",  hip:"122–126", us:"20–22", uk:"24–26", eu:"52–54", aus:"24–26" },
  { size:"3XL", bust:"124–128",waist:"106–110", hip:"130–134", us:"24–26", uk:"28–30", eu:"56–58", aus:"28–30" }
];
const ALL_SIZES = SIZE_CHART.map(s => s.size);

/* -------------------- categories -------------------- */
const CATEGORIES = [
  { slug:"slip",       label:"Slip & Satin",     blurb:"Bias-cut satin that skims, never clings.",      tile:20187300 },
  { slug:"maxi",       label:"Maxi & Midi",      blurb:"Floor-sweeping to calf-grazing, all day elegant.", tile:14452577 },
  { slug:"cocktail",   label:"Cocktail & Party", blurb:"After-dark silhouettes built to be seen.",       tile:20171258 },
  { slug:"evening",    label:"Evening Gowns",    blurb:"Red-carpet ready, hand-finished detail.",        tile:36973652 },
  { slug:"bridal",     label:"Bridal",           blurb:"For the aisle, the vow, and every photo after.",  tile:14358523 },
  { slug:"bridesmaid", label:"Bridesmaid",       blurb:"Matching, flattering, made to be reworn.",        tile:26738618 },
  { slug:"summer",     label:"Summer & Sundress",blurb:"Breathable linens and cottons for golden days.", tile:33787529 },
  { slug:"floral",     label:"Floral",           blurb:"Prints painted in-house, never mass-printed.",    tile:7509903  },
  { slug:"bodycon",    label:"Bodycon & Fitted", blurb:"Sculpting knits with all-way stretch.",           tile:1007011  }
];

/* -------------------- products -------------------- */
const IMG = (id, w=700) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const P = (id, name, cat, price, old, rating, reviews, badge, imgId, colors, sizes, fabric, fit, desc) =>
  ({ id, name, cat, price, old, rating, reviews, badge, img:IMG(imgId), imgId, colors, sizes, fabric, fit, desc });

const PRODUCTS = [
  /* Slip & Satin */
  P(1,"Azure Satin Slip","slip",138,0,5,214,"Bestseller",19595288,["#6f8fb5","#2b2622","#c98c74"],ALL_SIZES,"Recycled satin (96% recycled polyester, 4% elastane)","True to size. Bias cut drapes close to the body — size up for a looser drape.","A weightless bias-cut slip in lustrous azure satin with adjustable straps and a delicate French-seam finish inside and out."),
  P(2,"Cielo Strapless Slip","slip",128,0,4,132,"",20187300,["#7d95b3","#e7cfc4","#2b2622"],ALL_SIZES,"Stretch satin with concealed boning","Fitted at the bust with a hidden shelf. If between sizes, take the larger.","A clean strapless column with a hidden shelf and a whisper of stretch so it stays exactly where you put it."),
  P(3,"Drape-Front Slip Dress","slip",145,0,5,88,"New",37015073,["#8aa0bd","#6b2b3a","#f0e7db"],ALL_SIZES,"Matte satin with cowl drape","Relaxed through the hip. Model is 5'10\" / 178cm wearing S.","A softly draped cowl neckline falls into a fluid midi finished with a side slit and bias-cut hem."),
  P(4,"Ivory Column Slip","slip",149,0,4,73,"",38809203,["#fffdfa","#e7cfc4","#6b2b3a"],ALL_SIZES,"Sand-washed cupro","Straight and easy. Runs slightly long — available in petite on request.","A minimal ivory column in sand-washed cupro that reads polished with heels and effortless with sandals."),

  /* Maxi & Midi */
  P(5,"Marina Maxi","maxi",168,0,5,156,"Bestseller",14452577,["#3f5a86","#2b2622","#e7cfc4"],ALL_SIZES,"Crepe with a hint of stretch","Flattering through the waist with a defined seam. True to size.","A sleeveless crepe maxi with a shaped waist seam that turns an easy column into something quietly dramatic."),
  P(6,"Sage Column Maxi","maxi",172,0,5,64,"",17153107,["#8a9a7b","#2b2622","#fffdfa"],ALL_SIZES,"Crepe-back satin","Long and lean. Model is 5'9\" / 175cm wearing S.","Floor-grazing columns in crepe-back satin with a high neck and a low, elegant back."),
  P(7,"Rosewood Maxi","maxi",158,0,4,121,"",18779659,["#c98c74","#6b2b3a","#f0e7db"],ALL_SIZES,"Crinkle georgette","Flowy and generous. Size down for a closer fit.","A sun-ready maxi in airy crinkle georgette, gathered at the shoulder for movement that catches every breeze."),
  P(8,"Amber Midi","midi",118,0,4,97,"",15238818,["#c98c74","#2b2622","#8a9a7b"],ALL_SIZES,"Linen-viscose blend","Straight fit, sits mid-calf on most. True to size.","An easy midi in a linen-viscose blend with a crew neck and hidden side pockets you'll actually use."),
  P(9,"Sunbeam Midi","midi",112,145,5,143,"Sale",9725049,["#e6c15a","#c98c74","#2b2622"],ALL_SIZES,"Cotton poplin","True to size with a defined waist.","A sun-yellow poplin midi with a fitted bodice and a full, swishy skirt — the dress that starts conversations."),

  /* Cocktail & Party */
  P(10,"Lagoon Cocktail Dress","cocktail",189,0,5,131,"",20171258,["#2f7d7a","#2b2622","#6b2b3a"],ALL_SIZES,"Structured ponte","Tailored through the waist and hip. True to size.","A jewel-toned ponte cocktail dress with a portrait neckline and a pencil skirt that holds its shape all night."),
  P(11,"Soirée Sheath Dress","cocktail",175,0,4,109,"",32746353,["#2b2622","#6b2b3a","#c98c74"],ALL_SIZES,"Double-knit stretch","Second-skin fit with all-way stretch. Size up for a relaxed look.","A little black dress, perfected: a double-knit sheath with a scoop back and a hem that hits just above the knee."),
  P(12,"Blush Hour Dress","cocktail",165,0,4,142,"",29650435,["#e7cfc4","#c98c74","#6b2b3a"],ALL_SIZES,"Silk-touch jersey","Skims the body without clinging. True to size.","Silk-touch jersey in soft blush, ruched at the side for a flattering drape that moves when you do."),
  P(13,"Confetti Sequin Mini","cocktail",199,0,5,167,"Limited",34961621,["#d98ca0","#e7cfc4","#2b2622"],ALL_SIZES,"Hand-embellished sequin mesh","Lined, true to size. Sequins have a little give.","A party in a dress: hand-embellished sequin mesh over a soft lining, cut to a flattering A-line mini."),

  /* Evening Gowns */
  P(14,"Crimson Pearl Gown","evening",385,0,5,54,"",36747258,["#6b2b3a","#2b2622","#fffdfa"],["XS","S","M","L","XL","2XL"],"Duchess satin with pearl trim","Structured through the bodice. Size up if broad-shouldered.","A floor-length duchess satin gown with a hand-set pearl neckline and a dramatic, architectural train."),
  P(15,"Midnight Velvet Gown","evening",340,0,5,71,"Bestseller",36973652,["#2b2622","#3a2b3a","#6b2b3a"],["XS","S","M","L","XL","2XL"],"Plush stretch velvet","Close fit with real stretch. True to size.","Deep-navy stretch velvet with a wrapped bodice and a leg-revealing slit — moody, modern, unforgettable."),
  P(16,"Starlight Sequin Gown","evening",420,0,5,47,"Limited",28115171,["#3f5a86","#c0c0c0","#2b2622"],["XS","S","M","L","XL"],"Sequin mesh over satin","Fitted, true to size. Best for a straighter figure.","Covered in tonal sequins that catch every light in the room, this gown is a modern take on old-Hollywood glamour."),
  P(17,"Ember Column Gown","evening",330,0,4,39,"New",32328387,["#c26a3a","#6b2b3a","#2b2622"],["S","M","L","XL","2XL"],"Silk crepe","Long column, true to size. Model is 5'11\" / 180cm in S.","A molten-ember column in silk crepe with a sculpted shoulder and a clean, unbroken line to the floor."),

  /* Bridal */
  P(18,"Ever After Gown","bridal",540,0,5,38,"Bestseller",14358523,["#fffdfa","#f0e7db"],["XS","S","M","L","XL","2XL"],"Silk mikado with tulle underskirt","Structured bodice, full skirt. Size up for a fuller look.","A duchess-worthy bridal ball gown in silk mikado, finished with a hand-rolled hem and covered buttons."),
  P(19,"Meadow Bloom Bridal","bridal",495,0,5,29,"New",17244526,["#fffdfa","#e7cfc4","#8a9a7b"],["XS","S","M","L","XL"],"Embroidered tulle over satin","Fitted bodice, A-line skirt. True to size.","An embroidered floral tulle overlay scatters blooms across a satin A-line — romantic yet never fussy."),
  P(20,"Heirloom Lace Gown","bridal",610,0,5,21,"Limited",26851014,["#fffdfa","#f0e7db","#c98c74"],["S","M","L","XL"],"Corded Chantilly lace","Slim through the hip. Size up if between sizes.","Corded Chantilly lace with scalloped edges and a low illusion back, for the bride who wants heritage, not volume."),
  P(21,"First Light Silk Gown","bridal",560,0,4,33,"",12031114,["#fffdfa","#f0e7db","#a9b4c2"],["XS","S","M","L","XL","2XL"],"Sand-washed silk","Bias cut, drapes close. True to size.","A slip-style bridal gown in sand-washed silk with a delicate cowl and a bias skirt that pools beautifully."),

  /* Bridesmaid */
  P(22,"Something Blue Dress","bridesmaid",128,0,4,241,"Bestseller",26738618,["#7d95b3","#3f5a86","#2b2622"],ALL_SIZES,"Recycled chiffon","Relaxed A-line, true to size.","Matching chiffon A-lines in nine shades, cut to flatter every body in the party. Machine washable, truly reworn."),
  P(23,"Sunset Chiffon Dress","bridesmaid",118,0,4,188,"",37430312,["#d98c5a","#c98c74","#e6c15a"],ALL_SIZES,"Recycled chiffon","Relaxed fit with a tie waist. True to size.","Warm sunset chiffon with a softly wrapped bodice and a sweeping, dancing-length skirt."),
  P(24,"Peony Chiffon Dress","bridesmaid",118,0,4,176,"",6141769,["#e7cfc4","#d98ca0","#fffdfa"],ALL_SIZES,"Recycled chiffon","Relaxed A-line, true to size.","Blush peony chiffon with a flutter sleeve and a covered sash — pretty without stealing the spotlight."),
  P(25,"After Dark Chiffon Dress","bridesmaid",124,0,4,133,"",37460505,["#2b2622","#3a2b3a","#8a8078"],ALL_SIZES,"Recycled chiffon","Relaxed fit, true to size.","For a modern party: inky chiffon with a high neck and a low back, made to work for every one of your people."),

  /* Summer & Sundress */
  P(26,"Boardwalk Sundress","summer",88,0,4,263,"",10600392,["#f0e7db","#e7cfc4","#c98c74"],ALL_SIZES,"Organic cotton poplin","Relaxed fit to the knee. True to size.","A throw-on cotton sundress with a smocked back and a skirt made for chasing an ocean breeze."),
  P(27,"Terrace Sundress","summer",96,0,4,152,"",15270631,["#c98c74","#8a9a7b","#e6c15a"],ALL_SIZES,"Crinkle cotton","Tie straps are adjustable. True to size.","Tiny floral crinkle cotton with adjustable ties and a button front — the dress that lives by the door."),
  P(28,"Coastline Sundress","summer",92,120,5,203,"Sale",31277458,["#7d95b3","#f0e7db","#d98ca0"],ALL_SIZES,"Linen-cotton blend","Relaxed, slightly generous. Size down for a closer fit.","A breezy linen-cotton sundress with a deep V and a tie back, made for salt air and long afternoons."),
  P(29,"Linen Day Dress","summer",108,0,4,117,"",33787529,["#f0e7db","#fffdfa","#a9b4c2"],ALL_SIZES,"European washed linen","Straight and easy. True to size.","Pure washed linen with a shirt collar and chest pockets — the everyday dress that only gets better with age."),

  /* Floral */
  P(30,"Poppy Floral Wrap","floral",132,0,5,198,"Bestseller",16099148,["#6b2b3a","#c98c74","#2b2622"],ALL_SIZES,"Viscose crepe","True wrap with an adjustable tie. True to size.","A true wrap in painted poppy print, with a tie you control and a silhouette that flatters nearly everyone."),
  P(31,"Garden Party Maxi","floral",156,0,4,134,"",7509903,["#8a9a7b","#e7cfc4","#c98c74"],ALL_SIZES,"Viscose georgette","Flowy and generous. Size down for a closer fit.","A flowing georgette maxi scattered with garden blooms, gathered at the waist and finished with a fluttered hem."),
  P(32,"Spring Sheer Dress","floral",128,0,4,88,"New",38943901,["#e7cfc4","#8a9a7b","#d98ca0"],ALL_SIZES,"Muslin with sheer sleeves","Lined body, sheer sleeve. True to size.","Soft muslin with sheer bishop sleeves and a hand-drawn floral, made for weddings and warm weather alike."),
  P(33,"Heirloom Floral Dress","floral",142,0,5,61,"",31683080,["#c98c74","#8a9a7b","#f0e7db"],ALL_SIZES,"Viscose with a vintage print","Fitted bodice, full skirt. True to size.","A vintage-inspired floral with a nipped waist and a full skirt, printed from an archive textile we couldn't forget."),

  /* Bodycon & Fitted */
  P(34,"Riviera Ribbed Dress","bodycon",98,0,4,278,"Bestseller",1007011,["#2b2622","#f0e7db","#6b2b3a"],ALL_SIZES,"Ribbed cotton jersey","Stretch fit, true to size. Size up for a relaxed look.","A ribbed stretch jersey dress that moves with you, cut to trace the body from shoulder to mid-calf."),
  P(35,"Scarlet Bodycon","bodycon",105,0,5,164,"",18103136,["#8f2b3a","#2b2622","#c98c74"],ALL_SIZES,"Scuba knit","Close, sculpting fit. True to size.","A sculpting scuba-knit midi in scarlet, with a square neck and a back zip for that second-skin effect."),
  P(36,"Fiamma Midi Dress","bodycon",112,0,4,151,"",33627135,["#8f2b3a","#6b2b3a","#2b2622"],ALL_SIZES,"Double-knit with stretch","Close fit, true to size. Model is 5'9\" / 175cm wearing S.","A double-knit midi with a high neck and a built-in waist panel for an unbroken, sculpted line."),
  P(37,"Graphite Sheath Dress","bodycon",96,130,4,209,"Sale",6825904,["#2b2622","#8a8078","#fffdfa"],ALL_SIZES,"Ponte with stretch","Tailored, true to size.","A graphite ponte sheath with a subtle sheen and princess seams — the work-to-dinner dress that always delivers.")
];

const money = n => "$" + n.toLocaleString();
const stars = n => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
const catLabel = slug => (CATEGORIES.find(c => c.slug === slug) || {}).label || slug;

/* -------------------- search -------------------- */
const COLOR_NAMES = {
  "#6f8fb5": ["blue", "steel blue", "dusty blue"],
  "#7d95b3": ["blue", "dusty blue", "powder blue"],
  "#8aa0bd": ["blue", "light blue", "sky blue"],
  "#3f5a86": ["blue", "navy", "cobalt"],
  "#2b2622": ["black", "charcoal"],
  "#3a2b3a": ["purple", "plum", "aubergine", "eggplant"],
  "#6b2b3a": ["burgundy", "wine", "maroon", "bordeaux"],
  "#8f2b3a": ["red", "scarlet", "crimson"],
  "#d98ca0": ["pink", "rose", "blush"],
  "#e7cfc4": ["blush", "nude", "beige", "champagne"],
  "#f0e7db": ["cream", "ivory", "off white"],
  "#fffdfa": ["white", "ivory"],
  "#c98c74": ["tan", "nude", "terracotta", "camel"],
  "#8a9a7b": ["green", "sage", "olive"],
  "#2f7d7a": ["teal", "green", "turquoise", "emerald"],
  "#e6c15a": ["yellow", "gold", "mustard"],
  "#c26a3a": ["orange", "rust", "ember", "burnt orange"],
  "#d98c5a": ["orange", "coral", "apricot", "peach"],
  "#c0c0c0": ["silver", "grey", "gray"],
  "#a9b4c2": ["grey", "gray", "silver", "blue grey"],
  "#8a8078": ["grey", "gray", "taupe", "stone"]
};

const colorNames = p => (p.colors || [])
  .flatMap(hex => COLOR_NAMES[String(hex).toLowerCase()] || [])
  .join(" ");

const productSearchText = p => [
  p.name, catLabel(p.cat), p.cat, p.desc, p.fabric, p.fit, p.badge, colorNames(p)
].join(" ").toLowerCase();

const searchWords = q => String(q || "").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

const productWords = p => productSearchText(p).split(/[^a-z0-9]+/).filter(Boolean);

const matchProduct = (p, q) => {
  const words = searchWords(q);
  if (!words.length) return true;
  const hay = productWords(p);
  return words.every(w => hay.some(hw => hw.startsWith(w)));
};
