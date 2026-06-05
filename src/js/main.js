// ── DATA ──────────────────────────────────────────────────────────────────
var PRODS = [
  {id:1,name:'Golden Orbit Sırğalar',cat:'Sırğalar',mat:'18K Qızıl Vermeil',price:'₼218',badge:'Yeni',c1:'#D4B896',c2:'#BFA882',icon:'earring'},
  {id:2,name:'Celestial Pendant',cat:'Boyunbağılar',mat:'925 Gümüş',price:'₼160',badge:'',c1:'#C8B89A',c2:'#A89070',icon:'necklace'},
  {id:3,name:'Pavé Üzük',cat:'Üzüklər',mat:'Rose Gold',price:'₼265',badge:'Best Seller',c1:'#E0D4C0',c2:'#C9BAA0',icon:'ring'},
  {id:4,name:'Zəncir Qolbaq',cat:'Qolbaqlar',mat:'925 Gümüş',price:'₼122',badge:'Yeni',c1:'#BEB0A0',c2:'#A09080',icon:'bracelet'},
  {id:5,name:'Heritage Saat',cat:'Saatlar',mat:'Qızıl Korpus',price:'₼655',badge:'',c1:'#2C2420',c2:'#4A3C34',icon:'watch'},
  {id:6,name:'Axşam Çantası',cat:'Çantalar',mat:'Genuine Leather',price:'₼374',badge:'Yeni',c1:'#C4B8A8',c2:'#A8998A',icon:'bag'},
  {id:7,name:'Tor Shell Eynək',cat:'Eynəklər',mat:'Acetate',price:'₼195',badge:'',c1:'#4A3C34',c2:'#2C2420',icon:'sunglass'},
  {id:8,name:'İncili Sırğalar',cat:'Sırğalar',mat:'925 Gümüş',price:'₼150',badge:'Best Seller',c1:'#E8E4DC',c2:'#D4D0C8',icon:'earring'},
  {id:9,name:'Tennis Boyunbağı',cat:'Boyunbağılar',mat:'18K Qızıl',price:'₼302',badge:'',c1:'#D4B896',c2:'#C9A96E',icon:'necklace'},
  {id:10,name:'Stacking Üzük Set',cat:'Üzüklər',mat:'Qarışıq Metal',price:'₼332',badge:'Yeni',c1:'#C8B89A',c2:'#B0A080',icon:'ring'},
  {id:11,name:'Snake Chain Qolbaq',cat:'Qolbaqlar',mat:'18K Qızıl',price:'₼228',badge:'',c1:'#C9A96E',c2:'#A07840',icon:'bracelet'},
  {id:12,name:'Cat Eye Eynək',cat:'Eynəklər',mat:'Metal Çərçivə',price:'₼166',badge:'Best Seller',c1:'#1A1714',c2:'#2E2820',icon:'sunglass'}
];

var ICONS = {
  earring:'<svg width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" viewBox="0 0 80 80"><ellipse cx="30" cy="22" rx="7" ry="7"/><path d="M30 29C30 44 19 55 19 70c0 6 18 8 18 0C37 59 27 47 30 29"/><ellipse cx="50" cy="22" rx="7" ry="7"/><path d="M50 29C50 44 61 55 61 70c0 6-18 8-18 0C43 59 53 47 50 29"/></svg>',
  necklace:'<svg width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" viewBox="0 0 80 80"><path d="M12 22Q40 58 68 22"/><circle cx="40" cy="62" r="9"/><path d="M34 53L40 71 46 53"/></svg>',
  ring:'<svg width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" viewBox="0 0 80 80"><circle cx="40" cy="42" r="22"/><circle cx="40" cy="42" r="14"/><circle cx="40" cy="20" r="6"/></svg>',
  bracelet:'<svg width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" viewBox="0 0 80 80"><path d="M18 40Q18 18 40 18Q62 18 62 40Q62 62 40 62Q18 62 18 40" stroke-dasharray="9 5"/><circle cx="40" cy="18" r="5" fill="rgba(255,255,255,0.15)"/></svg>',
  watch:'<svg width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" viewBox="0 0 80 80"><circle cx="40" cy="40" r="19"/><circle cx="40" cy="40" r="14"/><path d="M40 28L40 40 52 40" stroke-linecap="round"/><rect x="29" y="14" width="22" height="9" rx="2"/><rect x="29" y="57" width="22" height="9" rx="2"/></svg>',
  bag:'<svg width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" viewBox="0 0 80 80"><rect x="12" y="28" width="56" height="42" rx="3"/><path d="M24 28Q24 15 40 15Q56 15 56 28"/><line x1="12" y1="44" x2="68" y2="44"/></svg>',
  sunglass:'<svg width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" viewBox="0 0 90 60"><rect x="4" y="18" width="34" height="24" rx="12"/><rect x="52" y="18" width="34" height="24" rx="12"/><path d="M38 30L52 30"/><path d="M4 30L1 24"/><path d="M86 30L89 24"/></svg>'
};

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

function initCategories() {
  var cats = [
    {n:'Sırğalar',c:'84',cls:'bg-earrings',ic:'earring'},
    {n:'Boyunbağılar',c:'67',cls:'bg-necklaces',ic:'necklace'},
    {n:'Üzüklər',c:'112',cls:'bg-rings',ic:'ring'},
    {n:'Qolbaqlar',c:'59',cls:'bg-bracelets',ic:'bracelet'},
    {n:'Saatlar',c:'43',cls:'bg-watches',ic:'watch'},
    {n:'Çantalar',c:'38',cls:'bg-bags',ic:'bag'},
    {n:'Eynəklər',c:'29',cls:'bg-sunglass',ic:'sunglass'}
  ];
  var g = document.getElementById('cat-grid');
  if (!g) return;
  var h = '';
  for (var i = 0; i < cats.length; i++) {
    var ct = cats[i];
    var extra = (i === 6) ? ' wide' : '';
    h += '<div class="cat-card' + extra + '" onclick="goPage(\'products\')">' +
      '<div class="cat-bg ' + ct.cls + '" style="height:100%;display:flex;align-items:center;justify-content:center">' + (ICONS[ct.ic] || '') + '</div>' +
      '<div class="cat-ov"></div>' +
      '<div class="cat-body"><div class="cat-lbl">Kolleksiya</div><div class="cat-name">' + ct.n + '</div><div class="cat-cnt">' + ct.c + ' parça</div></div>' +
    '</div>';
  }
  g.innerHTML = h;
}

function mkCard(p) {
  var badge = p.badge ? '<span class="prod-badge' + (p.badge === 'Yeni' ? ' new' : '') + '">' + p.badge + '</span>' : '';
  return '<div class="prod-card" onclick="goDetail(' + p.id + ')">' +
    '<div class="prod-img">' +
      '<div class="prod-img-bg" style="background:linear-gradient(135deg,' + p.c1 + ',' + p.c2 + ');height:100%">' + (ICONS[p.icon] || '') + '</div>' +
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

function initDetailPage() {
  var dt = document.getElementById('det-thumbs');
  var dm = document.getElementById('det-main');
  var dc = document.getElementById('det-chips');
  if (dt) {
    var colors = [['#D4B896','#BFA882'],['#C9A96E','#A07840'],['#E0D4C0','#C9BAA0'],['#BEB0A0','#A09080']];
    var h = '';
    for (var i = 0; i < colors.length; i++) {
      h += '<div class="det-thumb' + (i === 0 ? ' on' : '') + '" onclick="setThumb(this)">' +
        '<div style="width:100%;height:100%;background:linear-gradient(135deg,' + colors[i][0] + ',' + colors[i][1] + ')"></div>' +
      '</div>';
    }
    dt.innerHTML = h;
  }
  if (dm) dm.innerHTML = '<div style="width:100%;height:100%;background:linear-gradient(135deg,#D4B896,#BFA882);display:flex;align-items:center;justify-content:center">' + (ICONS.earring || '') + '</div>';
  if (dc) {
    var ms = ['18K Qızıl Vermeil','925 Gümüş','Rose Gold'];
    var h = '';
    for (var i = 0; i < ms.length; i++) h += '<div class="chip' + (i === 0 ? ' on' : '') + '" onclick="setChip(this)">' + ms[i] + '</div>';
    dc.innerHTML = h;
  }
}

function initPagination() {
  var pg = document.getElementById('pgn');
  if (!pg) return;
  var h = '';
  for (var i = 1; i <= 5; i++) {
    var a = i === 1;
    h += '<button style="width:38px;height:38px;border:1px solid ' + (a ? 'var(--gold)' : 'var(--beige-mid)') + ';background:' + (a ? 'var(--charcoal)' : 'transparent') + ';color:' + (a ? 'white' : 'var(--charcoal)') + ';cursor:pointer;font-family:var(--font-b);font-size:.82rem" onclick="toast(\'Səhifə ' + i + '\')">' + i + '</button>';
  }
  h += '<button style="width:38px;height:38px;border:1px solid var(--beige-mid);background:transparent;cursor:pointer;font-size:1.1rem" onclick="toast(\'Növbəti səhifə\')">›</button>';
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

// ── UI HELPERS ────────────────────────────────────────────────────────────
function setThumb(el) {
  var all = document.querySelectorAll('.det-thumb');
  for (var i = 0; i < all.length; i++) all[i].classList.remove('on');
  el.classList.add('on');
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
  if (v < 1) v = 1;
  if (v > 99) v = 99;
  el.textContent = v;
}

function nlSub(e) { e.preventDefault(); toast('Uğurla abunə oldunuz ✓'); e.target.reset(); }
function ctSub(e) { e.preventDefault(); toast('Mesajınız göndərildi! 24 saat ərzində cavab verəcəyik.'); e.target.reset(); }

var _tt;
function toast(msg) {
  var el = document.getElementById('toast-el');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_tt);
  _tt = setTimeout(function() { el.classList.remove('show'); }, 2600);
}

// ── SCROLL ────────────────────────────────────────────────────────────────
window.addEventListener('scroll', function() {
  var bt = document.getElementById('btt');
  if (bt) bt.classList.toggle('show', window.scrollY > 350);
  var nav = document.getElementById('main-nav');
  if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 2px 24px rgba(26,23,20,0.07)' : 'none';
});
