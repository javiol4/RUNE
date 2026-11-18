/* RUNE · Comportamiento compartido: cabecera, pie, región, bolsa, íconos y patrón. */
(function () {
  var R = window.RUNE = window.RUNE || {};
  var D = R.data;

  /* ---------- Almacenamiento seguro ---------- */
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* sin almacenamiento */ } }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }

  /* ---------- Íconos (carpeta iconos/, trazo recto) ---------- */
  var P = {
    'arrow-right': 'M4.5 12H19M13.5 6.5L19 12L13.5 17.5',
    bag: 'M6.2 8H17.8A1.2 1.2 0 0 1 19 9.3L18.3 18.7A2.5 2.5 0 0 1 15.8 21H8.2A2.5 2.5 0 0 1 5.7 18.7L5 9.3A1.2 1.2 0 0 1 6.2 8ZM9 10.5V7A3 3 0 0 1 15 7V10.5',
    search: 'M17.5 11A6.5 6.5 0 1 1 4.5 11A6.5 6.5 0 1 1 17.5 11ZM15.8 15.8L20 20',
    user: 'M15.5 8A3.5 3.5 0 1 1 8.5 8A3.5 3.5 0 1 1 15.5 8ZM5 20C5 16.4 8.1 14 12 14C15.9 14 19 16.4 19 20',
    globe: 'M20.5 12A8.5 8.5 0 1 1 3.5 12A8.5 8.5 0 1 1 20.5 12ZM3.5 12H20.5M12 3.5C9.5 6 8.5 9 8.5 12C8.5 15 9.5 18 12 20.5C14.5 18 15.5 15 15.5 12C15.5 9 14.5 6 12 3.5Z',
    truck: 'M4 6H12.5A1.5 1.5 0 0 1 14 7.5V16H3V7A1 1 0 0 1 4 6ZM14 9H17.4A1 1 0 0 1 18.2 9.4L20.6 12.6A2 2 0 0 1 21 13.8V15A1 1 0 0 1 20 16H14M8.8 17.5A1.8 1.8 0 1 1 5.2 17.5A1.8 1.8 0 1 1 8.8 17.5ZM18.8 17.5A1.8 1.8 0 1 1 15.2 17.5A1.8 1.8 0 1 1 18.8 17.5Z',
    lock: 'M7.5 11H16.5A2.5 2.5 0 0 1 19 13.5V18.5A2.5 2.5 0 0 1 16.5 21H7.5A2.5 2.5 0 0 1 5 18.5V13.5A2.5 2.5 0 0 1 7.5 11ZM8 11V7.5A4 4 0 0 1 16 7.5V11M12 15V17',
    chat: 'M6.5 4H17.5A2.5 2.5 0 0 1 20 6.5V13.5A2.5 2.5 0 0 1 17.5 16H11L6.5 20V16A2.5 2.5 0 0 1 4 13.5V6.5A2.5 2.5 0 0 1 6.5 4ZM8.5 10H8.51M12 10H12.01M15.5 10H15.51',
    'shield-check': 'M12 3L19 5.8V11.5C19 15.8 16.1 19.4 12 21C7.9 19.4 5 15.8 5 11.5V5.8ZM9 12L11 14L15 10',
    shoe: 'M4 18.5H20A1 1 0 0 0 21 17.5V15.8C21 14 19.7 12.5 17.9 12.2L13.8 11.5C13 11.4 12.3 11 11.7 10.4L10.1 8.6C9.5 8 8.6 7.9 7.9 8.3L4.2 10.6C3.5 11 3 11.8 3 12.6V17.5A1 1 0 0 0 4 18.5ZM3 15.5H21',
    store: 'M4.5 11V19A1 1 0 0 0 5.5 20H18.5A1 1 0 0 0 19.5 19V11M3 9.5L4.7 5A1.5 1.5 0 0 1 6.1 4H17.9A1.5 1.5 0 0 1 19.3 5L21 9.5A2.25 2.25 0 0 1 16.5 9.5A2.25 2.25 0 0 1 12 9.5A2.25 2.25 0 0 1 7.5 9.5A2.25 2.25 0 0 1 3 9.5ZM10 20V16A2 2 0 0 1 14 16V20',
    location: 'M12 21C12 21 5.5 15 5.5 10A6.5 6.5 0 0 1 18.5 10C18.5 15 12 21 12 21ZM14.3 10A2.3 2.3 0 1 1 9.7 10A2.3 2.3 0 1 1 14.3 10Z',
    'check-circle': 'M21 12A9 9 0 1 1 3 12A9 9 0 1 1 21 12ZM8.5 12.5L11 15L15.5 9.5',
    check: 'M5 12.5L10 17.5L19 7',
    plus: 'M12 5.5V18.5M5.5 12H18.5',
    minus: 'M5.5 12H18.5',
    'return': 'M9 5L4 10L9 15M4 10H14.5A4.75 4.75 0 0 1 14.5 19.5H10.5',
    size: 'M4.6 14.6L14.6 4.6A1.4 1.4 0 0 1 16.6 4.6L19.4 7.4A1.4 1.4 0 0 1 19.4 9.4L9.4 19.4A1.4 1.4 0 0 1 7.4 19.4L4.6 16.6A1.4 1.4 0 0 1 4.6 14.6ZM8.3 11L9.8 12.5M11.3 8L12.8 9.5M14.3 5L15.8 6.5',
    users: 'M15 7.5A3 3 0 1 1 9 7.5A3 3 0 1 1 15 7.5ZM6.5 19C6.5 15.8 9 13.5 12 13.5C15 13.5 17.5 15.8 17.5 19M7.7 9.5A2.2 2.2 0 1 1 3.3 9.5A2.2 2.2 0 1 1 7.7 9.5ZM20.7 9.5A2.2 2.2 0 1 1 16.3 9.5A2.2 2.2 0 1 1 20.7 9.5ZM2.5 18C2.5 15.5 3.8 14 5.5 14M21.5 18C21.5 15.5 20.2 14 18.5 14',
    bolt: 'M13.5 3L5.5 13.5H11.5L10.5 21L18.5 10.5H12.5Z',
    heart: 'M12 20C7 16.6 4 13.6 4 9.7C4 7.1 6 5 8.5 5C10 5 11.2 5.8 12 7C12.8 5.8 14 5 15.5 5C18 5 20 7.1 20 9.7C20 13.6 17 16.6 12 20Z',
    close: 'M6 6L18 18M18 6L6 18',
    menu: 'M4 7H20M4 12H20M4 17H20',
    'chevron-right': 'M9.5 6L15.5 12L9.5 18',
    'chevron-down': 'M6 9.5L12 15.5L18 9.5'
  };
  function icon(name, size, cls) {
    size = size || 20;
    return '<svg class="ico' + (cls ? ' ' + cls : '') + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true"><path d="' + P[name] + '"/></svg>';
  }

  /* ---------- Símbolo Raidō y patrón de runas ---------- */
  var SYM = 'M12 96 L12 8 L52 24 L12 42 M12 42 L50 76';
  function symbol(cls) {
    return '<svg class="sym' + (cls ? ' ' + cls : '') + '" viewBox="0 0 64 100" fill="none" aria-hidden="true"><path d="' + SYM + '" stroke="currentColor" stroke-width="8" stroke-linejoin="miter"/></svg>';
  }
  function pattern(opts) {
    opts = opts || {};
    var c = opts.cols || 24, r = opts.rows || 8, w = opts.weight || 10, color = opts.color || 'var(--pattern-on-dark)';
    var g = '';
    for (var i = 0; i < c * r; i++) {
      var col = i % c, row = Math.floor(i / c);
      var flip = (col + row) % 2;
      g += '<g transform="translate(' + col * 64 + ',' + row * 100 + ')' + (flip ? ' rotate(180 32 50)' : '') + '"><path d="' + SYM + '"/></g>';
    }
    return '<svg viewBox="0 0 ' + c * 64 + ' ' + r * 100 + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g fill="none" stroke="' + color + '" stroke-width="' + w + '" stroke-linejoin="miter">' + g + '</g></svg>';
  }

  /* ---------- Región ---------- */
  function region() {
    var k = load('rune.region', 'na');
    return D.regions.filter(function (r) { return r.key === k; })[0] || D.regions[0];
  }
  function setRegion(key) {
    save('rune.region', key);
    document.documentElement.setAttribute('data-region', key);
    document.dispatchEvent(new CustomEvent('rune:region', { detail: region() }));
  }
  function price(reg) { return 'USD ' + (reg || region()).price; }

  /* ---------- Bolsa ---------- */
  function bag() { return load('rune.bag', []); }
  function setBag(items) { save('rune.bag', items); renderBag(); }
  function addToBag(id, size) {
    var items = bag();
    items.push({ id: id, size: size });
    setBag(items);
  }
  function byId(id) { return D.products.filter(function (p) { return p.id === id; })[0]; }

  /* ---------- Tarjeta de producto ---------- */
  function productCard(p, opts) {
    opts = opts || {};
    return '<a class="pcard" href="producto.html?ref=' + p.id + '">' +
      '<div class="stage">' + (opts.badge ? '<span class="badge">' + esc(opts.badge) + '</span>' : '') +
      '<img src="' + p.img + '" alt="' + esc(p.name) + ', zapatilla ' + esc(p.use.toLowerCase()) + ' de ' + p.gender.toLowerCase() + '" loading="lazy" width="688" height="384"></div>' +
      '<div class="body"><span class="meta">' + esc(p.use) + ' · ' + p.gender + '</span>' +
      '<span class="name">' + esc(p.name) + '</span>' +
      '<span class="spec">' + esc(p.spec) + '</span>' +
      '<span class="foot"><span class="price" data-price>' + price() + '</span><span class="lbl-sm muted">Ref. ' + p.ref + '</span></span></div></a>';
  }

  /* ---------- Cabecera ---------- */
  var NAV = [
    { id: 'coleccion', label: 'Colección', href: 'coleccion.html' },
    { id: 'calidad', label: 'Tecnología y calidad', href: 'calidad.html' },
    { id: 'atletas', label: 'Atletas', href: 'atletas.html' },
    { id: 'historia', label: 'Nuestra historia', href: 'historia.html' },
    { id: 'compromiso', label: 'Compromiso RUNE', href: 'compromiso.html' }
  ];

  function header(active) {
    var cur = region();
    var opts = D.regions.map(function (r) {
      return '<option value="' + r.key + '"' + (r.key === cur.key ? ' selected' : '') + '>' + r.name + ' · USD</option>';
    }).join('');
    var nav = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.id === active ? ' aria-current="page"' : '') + '>' + n.label + '</a>';
    }).join('');
    var mnav = NAV.concat([
      { id: 'tiendas', label: 'Encuentra una tienda', href: 'tiendas.html' },
      { id: 'inversionistas', label: 'Inversionistas', href: 'inversionistas.html' },
      { id: 'ayuda', label: 'Ayuda', href: 'ayuda.html' }
    ]).map(function (n) {
      return '<a href="' + n.href + '"' + (n.id === active ? ' aria-current="page"' : '') + '>' + n.label + icon('chevron-right', 20) + '</a>';
    }).join('');
    return '<a class="skip" href="#contenido">Saltar al contenido</a>' +
      '<header class="site-header">' +
      '<div class="topbar"><div class="wrap">' +
      '<label class="region-pick"><span class="sq" aria-hidden="true"></span>' + icon('globe', 16) + '<span class="sr-only">Región</span><select data-region-select aria-label="Región de compra">' + opts + '</select></label>' +
      '<nav aria-label="Enlaces de servicio">' +
      '<a href="tiendas.html"' + (active === 'tiendas' ? ' aria-current="page"' : '') + '>Encuentra una tienda</a>' +
      '<a href="inversionistas.html"' + (active === 'inversionistas' ? ' aria-current="page"' : '') + '>Inversionistas</a>' +
      '<a href="ayuda.html"' + (active === 'ayuda' ? ' aria-current="page"' : '') + '>Ayuda</a></nav>' +
      '</div></div>' +
      '<div class="mainbar"><div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="RUNE, inicio">' + symbol() + '<span class="wm">RUNE</span></a>' +
      '<nav class="mainnav" aria-label="Menú principal">' + nav + '</nav>' +
      '<div class="tools">' +
      '<a class="icon-btn" href="coleccion.html#buscar" aria-label="Buscar en la colección">' + icon('search', 20) + '</a>' +
      '<a class="icon-btn" href="ayuda.html#contacto" aria-label="Mi cuenta">' + icon('user', 20) + '</a>' +
      '<button class="icon-btn" type="button" data-bag-toggle aria-expanded="false" aria-controls="bolsa" aria-label="Bolsa de compra">' + icon('bag', 20) + '<span class="count" data-bag-count></span></button>' +
      '<button class="icon-btn menu-btn" type="button" data-menu-toggle aria-expanded="false" aria-controls="menu-movil" aria-label="Abrir menú">' + icon('menu', 22) + '</button>' +
      '</div></div></div>' +
      '<nav class="mobile-nav" id="menu-movil" aria-label="Menú"><div class="wrap">' + mnav + '</div></nav>' +
      '<div class="bag-panel" id="bolsa" role="dialog" aria-label="Bolsa de compra" data-bag-panel></div>' +
      '</header>';
  }

  function renderBag() {
    var items = bag();
    document.querySelectorAll('[data-bag-count]').forEach(function (el) { el.textContent = items.length ? items.length : ''; });
    var panel = document.querySelector('[data-bag-panel]');
    if (!panel) return;
    var reg = region();
    var head = '<header><span class="h4">Tu bolsa</span><button class="rm" type="button" data-bag-close aria-label="Cerrar bolsa">' + icon('close', 20) + '</button></header>';
    if (!items.length) {
      panel.innerHTML = head + '<p class="empty">Tu bolsa está vacía. <a class="link" href="coleccion.html">Ver la colección</a>.</p>';
      return;
    }
    var list = items.map(function (it, i) {
      var p = byId(it.id); if (!p) return '';
      return '<li><div class="stage thumb"><img src="' + p.img + '" alt=""></div>' +
        '<div class="stack gap-8"><a href="producto.html?ref=' + p.id + '" style="text-decoration:none;font-weight:600">' + esc(p.name) + '</a><span class="caption">Talla EU ' + esc(it.size) + ' · ' + price(reg) + '</span></div>' +
        '<button class="rm" type="button" data-bag-remove="' + i + '" aria-label="Quitar ' + esc(p.name) + '">' + icon('close', 18) + '</button></li>';
    }).join('');
    panel.innerHTML = head + '<ul>' + list + '</ul><footer>' +
      '<div class="row"><span>Subtotal · ' + reg.name + '</span><strong>USD ' + (reg.price * items.length) + '</strong></div>' +
      '<div class="row caption"><span>Envío desde tu almacén regional</span><span>Gratis</span></div>' +
      '<div class="row caption"><span>Devolución en 30 días</span><span>Gratis</span></div>' +
      '<a class="btn btn--accent" href="ayuda.html#contacto">Finalizar compra ' + icon('arrow-right', 18, 'ico--arrow') + '</a></footer>';
  }

  /* ---------- Pie ---------- */
  function footer() {
    var cols = [
      { t: 'Tienda', l: [['Colección', 'coleccion.html'], ['Hombre', 'coleccion.html?genero=hombre'], ['Mujer', 'coleccion.html?genero=mujer'], ['Encuentra una tienda', 'tiendas.html'], ['Alta de minoristas', 'tiendas.html#mayorista']] },
      { t: 'Marca', l: [['Nuestra historia', 'historia.html'], ['Tecnología y calidad', 'calidad.html'], ['Atletas RUNE', 'atletas.html'], ['Compromiso RUNE', 'compromiso.html']] },
      { t: 'Compañía', l: [['Inversionistas', 'inversionistas.html'], ['Trabaja con nosotros', 'historia.html#equipo'], ['Prensa', 'inversionistas.html#documentos']] },
      { t: 'Ayuda', l: [['Envíos', 'ayuda.html'], ['Devoluciones', 'ayuda.html'], ['Guía de tallas', 'ayuda.html#tallas'], ['Contacto', 'ayuda.html#contacto']] }
    ];
    var c = cols.map(function (col) {
      return '<nav class="f-col" aria-label="' + col.t + '"><span class="lbl-sm">' + col.t + '</span>' +
        col.l.map(function (x) { return '<a href="' + x[1] + '">' + x[0] + '</a>'; }).join('') + '</nav>';
    }).join('');
    return '<footer class="site-footer"><div class="wrap">' +
      '<div class="f-top"><div class="f-brand"><a class="brand" href="index.html" aria-label="RUNE, inicio">' + symbol() + '<span class="wm">RUNE</span></a>' +
      '<span class="ts">Set In Stone</span>' +
      '<p class="small muted-inv" style="max-width:30ch">Calzado deportivo para larga distancia. Desde Ohio, con la misma calidad en cuatro regiones.</p></div>' + c + '</div>' +
      '<div class="f-perks">' +
      '<div>' + icon('truck', 24) + 'Envío gratuito desde tu almacén regional</div>' +
      '<div>' + icon('lock', 24) + 'Pago seguro</div>' +
      '<div>' + icon('chat', 24) + 'Atención al cliente en tu región</div>' +
      '<div>' + icon('globe', 24) + 'NA · EA · AP · LATAM</div></div>' +
      '<div class="f-legal"><span>© RUNE · Compañía C · Prototipo académico, BSG 2026</span>' +
      '<nav aria-label="Legal"><a href="ayuda.html">Privacidad</a><a href="ayuda.html">Términos de uso</a><a href="ayuda.html">Cookies</a></nav></div>' +
      '</div></footer>';
  }

  /* ---------- Hidratación ---------- */
  function hydrate() {
    document.documentElement.setAttribute('data-region', region().key);

    var h = document.querySelector('[data-site-header]');
    if (h) h.outerHTML = header(h.getAttribute('data-active') || '');
    var f = document.querySelector('[data-site-footer]');
    if (f) f.outerHTML = footer();

    document.querySelectorAll('[data-icon]').forEach(function (el) {
      el.outerHTML = icon(el.getAttribute('data-icon'), +el.getAttribute('data-size') || 20, el.getAttribute('data-class') || '');
    });
    document.querySelectorAll('[data-symbol]').forEach(function (el) { el.outerHTML = symbol(el.getAttribute('data-class') || ''); });
    document.querySelectorAll('[data-pattern]').forEach(function (el) {
      el.classList.add('pattern');
      el.innerHTML = pattern({
        cols: +el.getAttribute('data-cols') || undefined,
        rows: +el.getAttribute('data-rows') || undefined,
        weight: +el.getAttribute('data-weight') || undefined,
        color: el.getAttribute('data-color') || undefined
      });
    });

    var sel = document.querySelector('[data-region-select]');
    if (sel) sel.addEventListener('change', function () { setRegion(sel.value); });
    document.addEventListener('rune:region', function () {
      document.querySelectorAll('[data-price]').forEach(function (el) { el.textContent = price(); });
      document.querySelectorAll('[data-region-name]').forEach(function (el) { el.textContent = region().name; });
      if (sel && sel.value !== region().key) sel.value = region().key;
      renderBag();
    });
    document.querySelectorAll('[data-region-name]').forEach(function (el) { el.textContent = region().name; });
    document.querySelectorAll('[data-price]').forEach(function (el) { el.textContent = price(); });

    var hdr = document.querySelector('.site-header');
    var mt = document.querySelector('[data-menu-toggle]');
    if (mt) mt.addEventListener('click', function () {
      var open = hdr.classList.toggle('open');
      mt.setAttribute('aria-expanded', open ? 'true' : 'false');
      mt.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      mt.innerHTML = icon(open ? 'close' : 'menu', 22);
    });

    var bt = document.querySelector('[data-bag-toggle]');
    var panel = document.querySelector('[data-bag-panel]');
    function toggleBag(force) {
      var open = typeof force === 'boolean' ? force : !panel.classList.contains('open');
      panel.classList.toggle('open', open);
      bt.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    if (bt && panel) {
      bt.addEventListener('click', function (e) { e.stopPropagation(); toggleBag(); });
      panel.addEventListener('click', function (e) {
        e.stopPropagation();
        var rm = e.target.closest('[data-bag-remove]');
        if (rm) { var items = bag(); items.splice(+rm.getAttribute('data-bag-remove'), 1); setBag(items); }
        if (e.target.closest('[data-bag-close]')) toggleBag(false);
      });
      document.addEventListener('click', function () { toggleBag(false); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('open')) { toggleBag(false); bt.focus(); } });
    }
    renderBag();
  }

  R.icon = icon;
  R.symbol = symbol;
  R.pattern = pattern;
  R.esc = esc;
  R.region = region;
  R.setRegion = setRegion;
  R.price = price;
  R.bag = bag;
  R.addToBag = addToBag;
  R.openBag = function () { var b = document.querySelector('[data-bag-toggle]'); if (b && !document.querySelector('[data-bag-panel]').classList.contains('open')) b.click(); };
  R.byId = byId;
  R.productCard = productCard;
  R.params = new URLSearchParams(location.search);

  hydrate();
})();
