// ── PRODUCT DATA ──────────────────────────────────────────────────────────
var PRODS = [
  {id:1,  name:'Golden Orbit Sırğalar',  cat:'Sırğalar',    mat:'18K Qızıl Vermeil', price:'₼218', badge:'Yeni',        img:'earring1'},
  {id:2,  name:'Celestial Pendant',      cat:'Boyunbağılar', mat:'925 Gümüş',          price:'₼160', badge:'',            img:'necklace1'},
  {id:3,  name:'Pavé Üzük',             cat:'Üzüklər',      mat:'Rose Gold',          price:'₼265', badge:'Best Seller', img:'ring1'},
  {id:4,  name:'Zəncir Qolbaq',         cat:'Qolbaqlar',    mat:'925 Gümüş',          price:'₼122', badge:'Yeni',        img:'bracelet1'},
  {id:5,  name:'Heritage Saat',          cat:'Saatlar',      mat:'Qızıl Korpus',       price:'₼655', badge:'',            img:'watch1'},
  {id:6,  name:'Axşam Çantası',         cat:'Çantalar',     mat:'Genuine Leather',    price:'₼374', badge:'Yeni',        img:'bag1'},
  {id:7,  name:'Tor Shell Eynək',       cat:'Eynəklər',     mat:'Acetate',            price:'₼195', badge:'',            img:'sunglass1'},
  {id:8,  name:'İncili Sırğalar',       cat:'Sırğalar',     mat:'925 Gümüş',          price:'₼150', badge:'Best Seller', img:'earring2'},
  {id:9,  name:'Tennis Boyunbağı',      cat:'Boyunbağılar', mat:'18K Qızıl',          price:'₼302', badge:'',            img:'necklace2'},
  {id:10, name:'Stacking Üzük Set',     cat:'Üzüklər',      mat:'Qarışıq Metal',      price:'₼332', badge:'Yeni',        img:'ring2'},
  {id:11, name:'Snake Chain Qolbaq',    cat:'Qolbaqlar',    mat:'18K Qızıl',          price:'₼228', badge:'',            img:'bracelet2'},
  {id:12, name:'Cat Eye Eynək',         cat:'Eynəklər',     mat:'Metal Çərçivə',      price:'₼166', badge:'Best Seller', img:'sunglass2'}
];

// ── BEAUTIFUL SVG PRODUCT IMAGES ─────────────────────────────────────────
var IMGS = {
  earring1: makeSVG(
    'linear-gradient(160deg,#C8B49A,#8A6A50)',
    '<ellipse cx="140" cy="110" rx="28" ry="28" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2.5"/>' +
    '<path d="M140 138 C140 185 108 215 108 262 C108 282 172 287 172 262 C172 215 140 185 140 138" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round"/>' +
    '<ellipse cx="140" cy="110" rx="14" ry="14" fill="rgba(255,255,255,0.22)"/>' +
    '<ellipse cx="260" cy="110" rx="28" ry="28" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2.5"/>' +
    '<path d="M260 138 C260 185 228 215 228 262 C228 282 292 287 292 262 C292 215 260 185 260 138" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round"/>' +
    '<ellipse cx="260" cy="110" rx="14" ry="14" fill="rgba(255,255,255,0.22)"/>'
  ),
  earring2: makeSVG(
    'linear-gradient(160deg,#E2DBD0,#B0A090)',
    '<ellipse cx="140" cy="108" rx="32" ry="32" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>' +
    '<ellipse cx="140" cy="108" rx="18" ry="18" fill="rgba(255,255,255,0.18)"/>' +
    '<circle cx="140" cy="108" r="6" fill="rgba(255,255,255,0.5)"/>' +
    '<path d="M140 140 L140 240" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>' +
    '<ellipse cx="140" cy="255" rx="18" ry="22" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>' +
    '<ellipse cx="260" cy="108" rx="32" ry="32" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>' +
    '<ellipse cx="260" cy="108" rx="18" ry="18" fill="rgba(255,255,255,0.18)"/>' +
    '<circle cx="260" cy="108" r="6" fill="rgba(255,255,255,0.5)"/>' +
    '<path d="M260 140 L260 240" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>' +
    '<ellipse cx="260" cy="255" rx="18" ry="22" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/>'
  ),
  necklace1: makeSVG(
    'linear-gradient(160deg,#BEB0A0,#7A6858)',
    '<path d="M60 80 Q200 200 340 80" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2.5"/>' +
    '<circle cx="200" cy="200" r="4" fill="rgba(255,255,255,0.4)"/>' +
    '<circle cx="230" cy="185" r="4" fill="rgba(255,255,255,0.4)"/>' +
    '<circle cx="170" cy="185" r="4" fill="rgba(255,255,255,0.4)"/>' +
    '<circle cx="260" cy="155" r="3" fill="rgba(255,255,255,0.3)"/>' +
    '<circle cx="140" cy="155" r="3" fill="rgba(255,255,255,0.3)"/>' +
    '<path d="M175 210 L200 260 L225 210" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>' +
    '<circle cx="200" cy="270" r="18" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>'
  ),
  necklace2: makeSVG(
    'linear-gradient(160deg,#C9B898,#8A7860)',
    '<path d="M50 100 Q200 220 350 100" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-dasharray="6 4"/>' +
    '<path d="M60 110 Q200 235 340 110" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-dasharray="6 4"/>' +
    '<circle cx="155" cy="200" r="5" fill="rgba(255,255,255,0.5)"/>' +
    '<circle cx="200" cy="218" r="5" fill="rgba(255,255,255,0.5)"/>' +
    '<circle cx="245" cy="200" r="5" fill="rgba(255,255,255,0.5)"/>' +
    '<circle cx="120" cy="175" r="4" fill="rgba(255,255,255,0.35)"/>' +
    '<circle cx="280" cy="175" r="4" fill="rgba(255,255,255,0.35)"/>'
  ),
  ring1: makeSVG(
    'linear-gradient(160deg,#D8CCB8,#A09080)',
    '<circle cx="200" cy="180" r="72" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="3"/>' +
    '<circle cx="200" cy="180" r="52" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>' +
    '<circle cx="200" cy="180" r="30" fill="rgba(255,255,255,0.12)"/>' +
    '<circle cx="200" cy="108" r="16" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>' +
    '<circle cx="200" cy="108" r="8" fill="rgba(255,255,255,0.5)"/>'
  ),
  ring2: makeSVG(
    'linear-gradient(160deg,#C0B8A8,#887870)',
    '<circle cx="180" cy="180" r="55" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2.5"/>' +
    '<circle cx="220" cy="160" r="40" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>' +
    '<circle cx="200" cy="200" r="35" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>' +
    '<circle cx="190" cy="168" r="10" fill="rgba(255,255,255,0.3)"/>'
  ),
  bracelet1: makeSVG(
    'linear-gradient(160deg,#B8AFA0,#7A7268)',
    '<path d="M80 180 Q80 90 200 90 Q320 90 320 180 Q320 270 200 270 Q80 270 80 180" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-dasharray="12 6"/>' +
    '<circle cx="200" cy="90" r="10" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>' +
    '<circle cx="200" cy="90" r="5" fill="rgba(255,255,255,0.7)"/>' +
    '<circle cx="134" cy="114" r="5" fill="rgba(255,255,255,0.3)"/>' +
    '<circle cx="266" cy="114" r="5" fill="rgba(255,255,255,0.3)"/>' +
    '<circle cx="100" cy="180" r="5" fill="rgba(255,255,255,0.3)"/>' +
    '<circle cx="300" cy="180" r="5" fill="rgba(255,255,255,0.3)"/>'
  ),
  bracelet2: makeSVG(
    'linear-gradient(160deg,#C8A870,#906838)',
    '<path d="M80 180 Q80 90 200 90 Q320 90 320 180 Q320 270 200 270 Q80 270 80 180" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="3"/>' +
    '<path d="M90 180 Q90 100 200 100 Q310 100 310 180 Q310 260 200 260 Q90 260 90 180" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>' +
    '<circle cx="200" cy="90" r="8" fill="rgba(255,255,255,0.5)"/>'
  ),
  watch1: makeSVG(
    'linear-gradient(160deg,#2A2018,#4A3828)',
    '<rect x="162" y="55" width="76" height="28" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>' +
    '<circle cx="200" cy="180" r="75" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.4)" stroke-width="2.5"/>' +
    '<circle cx="200" cy="180" r="60" fill="rgba(20,15,10,0.5)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>' +
    '<circle cx="200" cy="180" r="3" fill="rgba(255,255,255,0.8)"/>' +
    '<path d="M200 180 L200 135" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M200 180 L230 180" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round"/>' +
    '<text x="200" y="205" text-anchor="middle" font-family="Georgia" font-size="9" fill="rgba(255,255,255,0.35)" letter-spacing="2">JUMLA</text>' +
    '<rect x="162" y="277" width="76" height="28" rx="4" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>'
  ),
  bag1: makeSVG(
    'linear-gradient(160deg,#C0B4A4,#887A6C)',
    '<rect x="85" y="130" width="230" height="170" rx="8" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2.5"/>' +
    '<path d="M120 130 Q120 82 200 82 Q280 82 280 130" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2.5"/>' +
    '<line x1="85" y1="175" x2="315" y2="175" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>' +
    '<rect x="178" y="155" width="44" height="28" rx="14" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>' +
    '<circle cx="200" cy="169" r="5" fill="rgba(255,255,255,0.35)"/>'
  ),
  sunglass1: makeSVG(
    'linear-gradient(160deg,#3A3028,#1A1410)',
    '<rect x="30" y="130" width="145" height="95" rx="48" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.45)" stroke-width="2.5"/>' +
    '<rect x="225" y="130" width="145" height="95" rx="48" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.45)" stroke-width="2.5"/>' +
    '<path d="M175 177 L225 177" stroke="rgba(255,255,255,0.45)" stroke-width="2.5"/>' +
    '<path d="M30 163 L10 150" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>' +
    '<path d="M370 163 L390 150" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>'
  ),
  sunglass2: makeSVG(
    'linear-gradient(160deg,#2C2420,#1A1510)',
    '<path d="M30 155 Q102 110 175 155 Q102 200 30 155Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.45)" stroke-width="2.5"/>' +
    '<path d="M225 155 Q298 110 370 155 Q298 200 225 155Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.45)" stroke-width="2.5"/>' +
    '<path d="M175 155 L225 155" stroke="rgba(255,255,255,0.45)" stroke-width="2.5"/>' +
    '<path d="M30 155 L10 148" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>' +
    '<path d="M370 155 L390 148" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>'
  )
};

function makeSVG(bg, shapes) {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 360">' +
    '<defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">' +
    bg.replace('linear-gradient(160deg,','<stop offset="0%" style="stop-color:').replace(',','"/><stop offset="100%" style="stop-color:') + '"/>' +
    '</linearGradient></defs>' +
    '<rect width="400" height="360" fill="url(#bg)"/>' +
    shapes +
    '</svg>'
  );
}

// ── CATEGORY IMAGES ───────────────────────────────────────────────────────
var CAT_IMGS = {
  earrings:   makeCatSVG('linear-gradient(160deg,#C8B49A,#8A6A50)', '<ellipse cx="110" cy="80" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><path d="M110 102 C110 138 88 158 88 195 C88 210 132 214 132 195 C132 158 110 138 110 102" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><ellipse cx="110" cy="80" rx="11" ry="11" fill="rgba(255,255,255,0.2)"/><ellipse cx="190" cy="80" rx="22" ry="22" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><path d="M190 102 C190 138 168 158 168 195 C168 210 212 214 212 195 C212 158 190 138 190 102" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/><ellipse cx="190" cy="80" rx="11" ry="11" fill="rgba(255,255,255,0.2)"/>'),
  necklaces:  makeCatSVG('linear-gradient(160deg,#C9B898,#8A7860)', '<path d="M40 60 Q150 145 260 60" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2"/><circle cx="150" cy="145" r="3" fill="rgba(255,255,255,0.4)"/><circle cx="175" cy="135" r="3" fill="rgba(255,255,255,0.35)"/><circle cx="125" cy="135" r="3" fill="rgba(255,255,255,0.35)"/><path d="M133 156 L150 185 L167 156" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><circle cx="150" cy="192" r="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>'),
  rings:      makeCatSVG('linear-gradient(160deg,#D8CCB8,#A09080)', '<circle cx="150" cy="130" r="55" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2.5"/><circle cx="150" cy="130" r="38" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><circle cx="150" cy="130" r="22" fill="rgba(255,255,255,0.1)"/><circle cx="150" cy="75" r="12" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.5)" stroke-width="1.5"/><circle cx="150" cy="75" r="6" fill="rgba(255,255,255,0.5)"/>'),
  bracelets:  makeCatSVG('linear-gradient(160deg,#B8AFA0,#7A7268)', '<path d="M60 140 Q60 70 150 70 Q240 70 240 140 Q240 210 150 210 Q60 210 60 140" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="2.5" stroke-dasharray="10 5"/><circle cx="150" cy="70" r="8" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/><circle cx="150" cy="70" r="4" fill="rgba(255,255,255,0.7)"/>'),
  watches:    makeCatSVG('linear-gradient(160deg,#2A2018,#4A3828)', '<rect x="118" y="38" width="64" height="22" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/><circle cx="150" cy="140" r="62" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.35)" stroke-width="2"/><circle cx="150" cy="140" r="48" fill="rgba(20,15,10,0.4)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/><circle cx="150" cy="140" r="3" fill="rgba(255,255,255,0.8)"/><path d="M150 140 L150 105" stroke="rgba(255,255,255,0.8)" stroke-width="1.5" stroke-linecap="round"/><path d="M150 140 L175 140" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" stroke-linecap="round"/><rect x="118" y="220" width="64" height="22" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>'),
  bags:       makeCatSVG('linear-gradient(160deg,#C0B4A4,#887A6C)', '<rect x="55" y="98" width="190" height="140" rx="6" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2"/><path d="M88 98 Q88 62 150 62 Q212 62 212 98" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2"/><line x1="55" y1="132" x2="245" y2="132" stroke="rgba(255,255,255,0.25)" stroke-width="1.2"/><rect x="132" y="116" width="36" height="22" rx="11" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/><circle cx="150" cy="127" r="4" fill="rgba(255,255,255,0.3)"/>'),
  sunglasses: makeCatSVG('linear-gradient(160deg,#3A3028,#1A1410)', '<rect x="22" y="100" width="110" height="72" rx="36" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.45)" stroke-width="2"/><rect x="168" y="100" width="110" height="72" rx="36" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.45)" stroke-width="2"/><path d="M132 136 L168 136" stroke="rgba(255,255,255,0.45)" stroke-width="2"/><path d="M22 120 L5 112" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><path d="M278 120 L295 112" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>')
};

function makeCatSVG(bg, shapes) {
  var colors = bg.replace('linear-gradient(160deg,','').replace(')','').split(',');
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 280">' +
    '<defs><linearGradient id="cbg" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" style="stop-color:' + colors[0] + '"/>' +
    '<stop offset="100%" style="stop-color:' + colors[1] + '"/>' +
    '</linearGradient></defs>' +
    '<rect width="300" height="280" fill="url(#cbg)"/>' +
    shapes +
    '</svg>'
  );
}

// ── INIT ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initMarquee();
  initCategories();
  initFilters();
  initDetailPage();
  initPagination();
  renderGrids();
});

function initMarquee() {
  var items = ['Premium Keyfiyyət','Əl işi Zərgərlik','150₼ Üzəri Pulsuz Çatdırılma','Hər Həftə Yeni Gələnlər','Təhlükəsiz Ödəniş','@thejumla — 121K İzləyici'];
  var el = document.getElementById('mq');
  if (!el) return;
  var h = '';
  for (var r = 0; r < 3; r++)
    for (var i = 0; i < items.length; i++)
      h += '<span class="mq-item">' + items[i] + '<span class="mq-dot"></span></span>';
  el.innerHTML = h;
}

// ── CATEGORIES ────────────────────────────────────────────────────────────
// Layout (4-col grid):
//   Row 1: Earrings | Necklaces | Rings     | Bracelets   (each 1 col)
//   Row 2: Watches  | Bags      | Sunglasses (spans 2 cols, same 3:4 ratio)
function initCategories() {
  var cats = [
    {n:'Sırğalar',     c:'84',  key:'earrings',   wide:false},
    {n:'Boyunbağılar', c:'67',  key:'necklaces',  wide:false},
    {n:'Üzüklər',      c:'112', key:'rings',      wide:false},
    {n:'Qolbaqlar',    c:'59',  key:'bracelets',  wide:false},
    {n:'Saatlar',      c:'43',  key:'watches',    wide:false},
    {n:'Çantalar',     c:'38',  key:'bags',       wide:false},
    {n:'Eynəklər',     c:'29',  key:'sunglasses', wide:true}
  ];
  var g = document.getElementById('cat-grid');
  if (!g) return;
  var h = '';
  for (var i = 0; i < cats.length; i++) {
    var ct = cats[i];
    var cls = 'cat-card' + (ct.wide ? ' wide' : '');
    h += '<div class="' + cls + '" onclick="goPage(\'products\')">' +
      '<div class="cat-bg" style="background-image:url(\'' + (CAT_IMGS[ct.key] || '') + '\');background-size:cover;background-position:center;height:100%"></div>' +
      '<div class="cat-ov"></div>' +
      '<div class="cat-body">' +
        '<div class="cat-lbl">Kolleksiya</div>' +
        '<div class="cat-name">' + ct.n + '</div>' +
        '<div class="cat-cnt">' + ct.c + ' parça</div>' +
      '</div>' +
    '</div>';
  }
  g.innerHTML = h;
}

// ── PRODUCT CARD ──────────────────────────────────────────────────────────
function mkCard(p) {
  var badge = p.badge ? '<span class="prod-badge' + (p.badge === 'Yeni' ? ' new' : '') + '">' + p.badge + '</span>' : '';
  var imgSrc = IMGS[p.img] || '';
  return '<div class="prod-card" onclick="goDetail(' + p.id + ')">' +
    '<div class="prod-img">' +
      '<div class="prod-img-bg" style="background-image:url(\'' + imgSrc + '\');background-size:cover;background-position:center;height:100%"></div>' +
      badge +
      '<div class="prod-actions">' +
        '<button class="btn-cart" onclick="event.stopPropagation();toast(\'Səbətə əlavə edildi ✓\')">Səbətə Əlavə Et</button>' +
        '<button class="wish-sm" onclick="event.stopPropagation();toast(\'İstək siyahısı ♡\')">' +
          '<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div class="prod-name">' + p.name + '</div>' +
    '<div class="prod-mat">' + p.mat + '</div>' +
    '<div class="prod-price">' + p.price + '</div>' +
  '</div>';
}

function renderGrids() {
  var ng = document.getElementById('new-grid');
  var bg = document.getElementById('bs-grid');
  var sg = document.getElementById('shop-grid');
  var rg = document.getElementById('rel-grid');
  if (ng) { var h = ''; for (var i = 0; i < 4; i++) h += mkCard(PRODS[i]); ng.innerHTML = h; }
  if (bg) { var h = ''; for (var i = 4; i < 8; i++) h += mkCard(PRODS[i]); bg.innerHTML = h; }
  if (sg) { var h = ''; for (var i = 0; i < PRODS.length; i++) h += mkCard(PRODS[i]); sg.innerHTML = h; }
  if (rg) { var h = ''; for (var i = 0; i < 4; i++) h += mkCard(PRODS[i]); rg.innerHTML = h; }
}

// ── FILTERS ───────────────────────────────────────────────────────────────
function initFilters() {
  var fp = document.getElementById('filter-content');
  if (!fp) return;
  var h = '';
  var cats = ['Sırğalar (84)','Boyunbağılar (67)','Üzüklər (112)','Qolbaqlar (59)','Saatlar (43)','Çantalar (38)','Eynəklər (29)'];
  h += '<div class="f-sec"><div class="f-title">Kateqoriya</div>';
  for (var i = 0; i < cats.length; i++) h += '<label class="f-opt"><input type="checkbox"> ' + cats[i] + '</label>';
  h += '</div>';
  var prices = ['150₼ altında','150–250₼','250–500₼','500₼ üzəri'];
  h += '<div class="f-sec"><div class="f-title">Qiymət</div>';
  for (var i = 0; i < prices.length; i++) h += '<label class="f-opt"><input type="radio" name="pr"> ' + prices[i] + '</label>';
  h += '</div>';
  var mats = ['925 Gümüş','18K Qızıl Vermeil','Rose Gold','Polad','Daş','Dəri'];
  h += '<div class="f-sec"><div class="f-title">Material</div>';
  for (var i = 0; i < mats.length; i++) h += '<label class="f-opt"><input type="checkbox"> ' + mats[i] + '</label>';
  h += '</div>';
  var sw = [{c:'#C9A96E',n:'Qızıl'},{c:'#E8E8E8',n:'Gümüş'},{c:'#E8A0A0',n:'Rose Gold'},{c:'#2C2420',n:'Qara'},{c:'#E0D4C0',n:'Krem'},{c:'#4A90D9',n:'Mavi'}];
  h += '<div class="f-sec"><div class="f-title">Rəng</div><div style="display:flex;gap:.5rem;flex-wrap:wrap">';
  for (var i = 0; i < sw.length; i++) h += '<div class="sw" style="background:' + sw[i].c + '" title="' + sw[i].n + '" onclick="toast(\'Filtr: ' + sw[i].n + '\')"></div>';
  h += '</div></div>';
  fp.innerHTML = h;
}

// ── DETAIL PAGE ───────────────────────────────────────────────────────────
function initDetailPage() {
  var dt = document.getElementById('det-thumbs');
  var dm = document.getElementById('det-main');
  var dc = document.getElementById('det-chips');
  var prod = PRODS[0];
  if (dt) {
    var thumbImgs = [IMGS.earring1, IMGS.earring2, IMGS.necklace1, IMGS.ring1];
    var h = '';
    for (var i = 0; i < thumbImgs.length; i++) {
      h += '<div class="det-thumb' + (i === 0 ? ' on' : '') + '" onclick="setThumb(this,\'' + thumbImgs[i] + '\')">' +
        '<div style="width:100%;height:100%;background-image:url(\'' + thumbImgs[i] + '\');background-size:cover;background-position:center"></div>' +
      '</div>';
    }
    dt.innerHTML = h;
  }
  if (dm) dm.style.backgroundImage = 'url(' + IMGS.earring1 + ')';
  if (dm) { dm.style.backgroundSize = 'cover'; dm.style.backgroundPosition = 'center'; }
  if (dc) {
    var ms = ['18K Qızıl Vermeil','925 Gümüş','Rose Gold'];
    var h = '';
    for (var i = 0; i < ms.length; i++) h += '<div class="chip' + (i === 0 ? ' on' : '') + '" onclick="setChip(this)">' + ms[i] + '</div>';
    dc.innerHTML = h;
  }
}

// ── PAGINATION ────────────────────────────────────────────────────────────
function initPagination() {
  var pg = document.getElementById('pgn');
  if (!pg) return;
  var h = '';
  for (var i = 1; i <= 5; i++) {
    var a = i === 1;
    h += '<button style="width:38px;height:38px;border:1px solid ' + (a ? 'var(--gold)' : 'var(--beige-mid)') + ';background:' + (a ? 'var(--charcoal)' : 'transparent') + ';color:' + (a ? 'white' : 'var(--charcoal)') + ';cursor:pointer;font-family:var(--font-b);font-size:.82rem" onclick="toast(\'Səhifə ' + i + '\')">' + i + '</button>';
  }
  h += '<button style="width:38px;height:38px;border:1px solid var(--beige-mid);background:transparent;cursor:pointer;font-size:1.1rem" onclick="toast(\'Növbəti\')">›</button>';
  pg.innerHTML = h;
}

// ── ROUTING ───────────────────────────────────────────────────────────────
function goPage(id) {
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) pages[i].classList.remove('active');
  var pg = document.getElementById('pg-' + id);
  if (pg) pg.classList.add('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
  renderGrids();
}

function goDetail(id) { goPage('detail'); }
function scrollToId(id) { var el = document.getElementById(id); if (el) el.scrollIntoView({behavior: 'smooth'}); }
function toggleMob() { var mn = document.getElementById('mob-nav'); if (mn) mn.classList.toggle('open'); }

// ── UI ────────────────────────────────────────────────────────────────────
function setThumb(el, imgUrl) {
  var all = document.querySelectorAll('.det-thumb');
  for (var i = 0; i < all.length; i++) all[i].classList.remove('on');
  el.classList.add('on');
  var dm = document.getElementById('det-main');
  if (dm && imgUrl) { dm.style.backgroundImage = 'url(' + imgUrl + ')'; dm.style.backgroundSize = 'cover'; }
}

function setChip(el) {
  var all = document.querySelectorAll('.chip');
  for (var i = 0; i < all.length; i++) all[i].classList.remove('on');
  el.classList.add('on');
}

function adjQty(d) {
  var el = document.getElementById('qty-v');
  if (!el) return;
  var v = parseInt(el.textContent) + d;
  if (v < 1) v = 1; if (v > 99) v = 99;
  el.textContent = v;
}

function nlSub(e) { e.preventDefault(); toast('Uğurla abunə oldunuz ✓'); e.target.reset(); }
function ctSub(e) { e.preventDefault(); toast('Mesajınız göndərildi!'); e.target.reset(); }

var _tt;
function toast(msg) {
  var el = document.getElementById('toast-el');
  if (!el) return;
  el.textContent = msg; el.classList.add('show');
  clearTimeout(_tt); _tt = setTimeout(function() { el.classList.remove('show'); }, 2600);
}

// ── SCROLL ────────────────────────────────────────────────────────────────
window.addEventListener('scroll', function() {
  var bt = document.getElementById('btt');
  if (bt) bt.classList.toggle('show', window.scrollY > 350);
  var nav = document.getElementById('main-nav');
  if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 2px 24px rgba(26,23,20,0.07)' : 'none';
});
