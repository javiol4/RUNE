/* RUNE · Datos del prototipo.
   Fotos de producto: img/zapatillas (el género sale del nombre del archivo).
   Fotos de atletas: img/atletas (mismas fotos que las campañas A13–A16).
   Nombres y descripciones de modelo son de prototipo: revisar antes de publicar. */
(function () {
  var IMG = 'img/zapatillas/';

  var regions = [
    { key: 'na',    code: 'NA',    name: 'Norteamérica',  price: 120 },
    { key: 'emea',  code: 'EA',    name: 'Europa-África', price: 126 },
    { key: 'apac',  code: 'AP',    name: 'Asia-Pacífico', price: 120 },
    { key: 'latam', code: 'LATAM', name: 'Latinoamérica', price: 128 }
  ];

  var uses = [
    { key: 'Running',    desc: 'Larga distancia y ritmo sostenido.' },
    { key: 'Training',   desc: 'Estabilidad para gimnasio y pista.' },
    { key: 'Trail',      desc: 'Agarre y protección fuera del asfalto.' },
    { key: 'Uso diario', desc: 'La misma construcción, para la ciudad.' }
  ];

  // [archivo, nombre, uso, ref, descripción]
  var raw = [
    ['Zapatillas_hombre_1_2.jpg', 'Raidō 42',        'Running',    'RN-0242', 'Upper tejido de una sola pieza, 238 g.'],
    ['Zapatillas_hombre_1_1.jpg', 'Liquen Trail',    'Trail',      'RN-0512', 'Suela de agarre multidireccional y puntera reforzada.'],
    ['Zapatillas_hombre_1_3.jpg', 'Grafito Tempo',   'Training',   'RN-0405', 'Upper de punto con soporte firme en el talón.'],
    ['Zapatillas_hombre_1_4.jpg', 'Petróleo 90',     'Uso diario', 'RN-0601', 'Mediasuela alta y líneas de archivo.'],
    ['Zapatillas_hombre_2_1.jpg', 'Ocre Ridge',      'Trail',      'RN-0527', 'Protección de puntera y talón.'],
    ['Zapatillas_hombre_2_2.jpg', 'Hueso Court',     'Uso diario', 'RN-0614', 'Piel lisa y suela vulcanizada.'],
    ['Zapatillas_hombre_2_3.jpg', 'Niebla Long Run', 'Running',    'RN-0231', 'Amortiguación alta para rodajes largos.'],
    ['Zapatillas_hombre_2_4.jpg', 'Basalto Court',   'Training',   'RN-0418', 'Caña alta y soporte lateral reforzado.'],
    ['Zapatillas_hombre_3_1.png', 'Arcilla Hike',    'Trail',      'RN-0533', 'Piel resistente y suela de tacos profundos.'],
    ['Zapatillas_hombre_3_2.png', 'Raidō 21',        'Running',    'RN-0221', 'Mediasuela de doble densidad.'],
    ['Zapatillas_hombre_3_3.png', 'Ceniza Pace',     'Running',    'RN-0246', 'Talón estable y transición rápida.'],
    ['Zapatillas_hombre_3_4.png', 'Índigo Stability','Training',   'RN-0422', 'Base ancha para pista y gimnasio.'],
    ['Zapatillas_hombre_4_1.png', 'Hueso Knit',      'Running',    'RN-0252', 'Upper de punto sin costuras, ligero.'],
    ['Zapatillas_hombre_4_2.png', 'Bosque 85',       'Uso diario', 'RN-0620', 'Ante y malla sobre suela de goma natural.'],
    ['Zapatillas_hombre_4_3.png', 'Basalto Tempo',   'Running',    'RN-0258', 'Para series y ritmo sostenido.'],
    ['Zapatillas_hombre_4_4.png', 'Aurora Daily',    'Uso diario', 'RN-0626', 'Upper tornasol, la misma construcción.'],

    ['Zapatillas_mujer_2_1.jpg',  'Lima Tempo',      'Running',    'RN-0266', 'Para series y ritmo sostenido.'],
    ['Zapatillas_mujer_1_1.png',  'Índigo Run',      'Running',    'RN-0262', 'Malla técnica y refuerzos laterales.'],
    ['Zapatillas_mujer_1_2.png',  'Cobre 78',        'Uso diario', 'RN-0632', 'Ante, lana y detalle metálico.'],
    ['Zapatillas_mujer_1_3.png',  'Musgo Trail',     'Trail',      'RN-0540', 'Suela de agarre y mediasuela protegida.'],
    ['Zapatillas_mujer_1_4.png',  'Prisma Air',      'Uso diario', 'RN-0638', 'Cámara de aire visible y upper ligero.'],
    ['Zapatillas_mujer_2_2.jpg',  'Ciruela Ridge',   'Trail',      'RN-0546', 'Protección de puntera y talón.'],
    ['Zapatillas_mujer_2_3.jpg',  'Coral Pace',      'Running',    'RN-0270', 'Mediasuela de doble densidad.'],
    ['Zapatillas_mujer_2_4.jpg',  'Fiordo Train',    'Training',   'RN-0430', 'Upper de punto con soporte medio.'],
    ['Zapatillas_mujer_3_1.jpg',  'Aurora Run',      'Running',    'RN-0274', 'Upper degradado y amortiguación alta.'],
    ['Zapatillas_mujer_3_2.jpg',  'Bosque Court',    'Uso diario', 'RN-0644', 'Upper texturizado y suela plana.'],
    ['Zapatillas_mujer_3_3.jpg',  'Ocre Trek',       'Trail',      'RN-0552', 'Suela de tacos profundos.'],
    ['Zapatillas_mujer_3_4.jpg',  'Hielo Air',       'Uso diario', 'RN-0650', 'Cámara de aire visible y upper tornasol.'],
    ['Zapatillas_mujer_4_1.jpg',  'Coral Knit',      'Running',    'RN-0278', 'Upper de punto sin costuras.'],
    ['Zapatillas_mujer_4_2.jpg',  'Hueso 92',        'Uso diario', 'RN-0656', 'Ante y malla, líneas de archivo.'],
    ['Zapatillas_mujer_4_3.jpg',  'Lirio Train',     'Training',   'RN-0436', 'Punto elástico y base estable.'],
    ['Zapatillas_mujer_4_4.jpg',  'Liquen Ridge',    'Trail',      'RN-0558', 'Suela de agarre multidireccional.']
  ];

  var products = raw.map(function (r, i) {
    var gender = /mujer/i.test(r[0]) ? 'Mujer' : 'Hombre';
    return {
      id: r[3].toLowerCase(),
      img: IMG + r[0],
      file: r[0],
      name: r[1],
      use: r[2],
      ref: r[3],
      spec: r[4],
      gender: gender,
      order: i
    };
  });

  // Embajadores · campañas A13–A16 (campanas/campanas-A13-A16.html).
  // Fotos retocadas, sin logos de terceros (salvo Fórmula 1 en Hamilton).
  var A = 'img/atletas/';
  var athletes = [
    {
      id: 'haaland', name: 'Erling Haaland', short: 'E. Haaland', sport: 'Fútbol', since: 'Año 13', years: 'A13–A14',
      region: 'apac', regionName: 'Asia-Pacífico', leads: 'Norteamérica · Asia-Pacífico', from: 'Min 00', to: 'Min 90',
      headline: 'Siempre llega.', campaign: 'A13 · Mismo estándar.',
      text: 'Lanzó la marca en el Año 13 junto a Jude Bellingham con «Mismo estándar.». Encabeza las piezas de Norteamérica y Asia-Pacífico.',
      img: A + 'Haaland_Rune_2.jpg', img2: A + 'Haaland_Rune_1.jpg', pos: '50% 30%', pos2: '50% 10%', bw: true
    },
    {
      id: 'bellingham', name: 'Jude Bellingham', short: 'J. Bellingham', sport: 'Fútbol', since: 'Año 13', years: 'A13–A15',
      region: 'emea', regionName: 'Europa-África', leads: 'Europa-África · Latinoamérica', from: 'Min 00', to: 'Min 90',
      headline: 'Todo el campo es tuyo.', campaign: 'A13–A15',
      text: 'Presente desde el lanzamiento. Encabeza Europa-África y Latinoamérica, y hace de puente hacia «Tres ritmos. Un estándar.» en el Año 15.',
      img: A + 'Bellingham_Rune_1.jpg', img2: A + 'Bellingham_Rune_2.jpg', pos: '50% 22%', pos2: '50% 25%', bw: true
    },
    {
      id: 'messi', name: 'Lionel Messi', short: 'L. Messi', sport: 'Fútbol', since: 'Año 15', years: 'A15–A16',
      region: 'latam', regionName: 'Latinoamérica', leads: 'Latinoamérica · Europa-África', from: 'Min 00', to: 'Min 90',
      headline: 'El partido se lee caminando.', campaign: 'A15–A16',
      text: 'Llega en el Año 15 con «Tres ritmos. Un estándar.». Su edición es de Latinoamérica, donde sigue en el Año 16 junto a Vozinha.',
      img: A + 'Messi_Rune_1.jpg', img2: A + 'Messi_Rune_2.jpg', pos: '45% 50%', pos2: '50% 50%', bw: false
    },
    {
      id: 'vozinha', name: 'Vozinha', short: 'Vozinha', sport: 'Fútbol · Cabo Verde', since: 'Año 15', years: 'A15–A16',
      region: 'na', regionName: 'Norteamérica', leads: 'Norteamérica · Latinoamérica', from: 'Min 00', to: 'Min 90',
      headline: 'Firme en cualquier parte.', campaign: 'A15–A16',
      text: 'Guardameta de Cabo Verde. Acompaña las piezas de producto en Norteamérica y forma dúo con Messi en Latinoamérica.',
      img: A + 'Vozinha_Rune_2.jpg', img2: A + 'Vozinha_Rune_1.jpg', pos: '50% 35%', pos2: '50% 40%', bw: false
    },
    {
      id: 'hamilton', name: 'Lewis Hamilton', short: 'L. Hamilton', sport: 'Fórmula 1', since: 'Año 16', years: 'A16',
      region: 'apac', regionName: 'Asia-Pacífico', leads: 'Europa-África · Asia-Pacífico', from: 'Km 00', to: 'Km 305',
      headline: '305 km. Mismo ritmo.', campaign: 'A16 · Distancia larga.',
      text: 'Se incorpora en el Año 16 y encabeza «Distancia larga.» en Europa-África. La línea de recorrido llega a la distancia de un Gran Premio: 305 kilómetros.',
      img: A + 'Hamilton_Rune_2.jpg', img2: A + 'Hamilton_Rune_1.jpg', pos: '50% 30%', pos2: '50% 90%', bw: true
    }
  ];

  // Campañas: atleta(s), región principal y titular de cada año.
  var campaigns = [
    { year: 'A13', tag: 'Pieza global', stage: 'Lanzamiento', headline: 'Mismo estándar.', region: 'global', regionName: 'Global',
      from: 'Min 00', to: 'Min 90', cast: [['haaland', '50% 30%'], ['bellingham', '50% 25%']],
      photos: [A + 'Haaland_Rune_2.jpg', A + 'Bellingham_Rune_1.jpg'],
      note: 'El dúo presenta la marca. Haaland abre Norteamérica y Asia-Pacífico; Bellingham, Europa-África y Latinoamérica.' },
    { year: 'A14', tag: 'Vía pública · Asia-Pacífico', stage: 'Refuerzo', headline: '90 minutos. Mismo ritmo.', region: 'apac', regionName: 'Asia-Pacífico',
      from: 'Min 00', to: 'Min 90', cast: [['haaland', '50% 35%'], ['bellingham', '50% 15%']],
      photos: [A + 'Haaland_Rune_2.jpg', A + 'Bellingham_Rune_2.jpg'],
      note: 'Se repiten los titulares para construir reconocimiento. Cada mercado ve a su atleta; cambia el acento, no el mensaje.' },
    { year: 'A15', tag: 'Región principal · Latinoamérica', stage: 'Transición', headline: 'Tres ritmos. Un estándar.', region: 'latam', regionName: 'Latinoamérica',
      from: 'Min 00', to: 'Min 90', cast: [['bellingham', '50% 20%'], ['messi', '30% 50%'], ['vozinha', '50% 40%']],
      photos: [A + 'Bellingham_Rune_2.jpg', A + 'Messi_Rune_1.jpg', A + 'Vozinha_Rune_1.jpg'],
      note: 'Región principal: Latinoamérica, con el trío. Bellingham y Messi en Europa-África; mensaje de producto en Norteamérica y Asia-Pacífico.' },
    { year: 'A16', tag: 'Región principal · Europa-África', stage: 'Distancia larga', headline: 'Distancia larga.', region: 'emea', regionName: 'Europa-África',
      from: 'Km 00', to: 'Km 305', cast: [['hamilton', '50% 40%'], ['messi', '30% 50%'], ['vozinha', '50% 45%']],
      photos: [A + 'Hamilton_Rune_2.jpg', A + 'Messi_Rune_1.jpg', A + 'Vozinha_Rune_2.jpg'],
      note: 'Región principal: Europa-África, con Hamilton al frente. Messi y Vozinha en Latinoamérica; mensaje de producto en Norteamérica y Asia-Pacífico.' }
  ];

  // Tiendas insignia · Politicas_sitio_web_RUNE.md, sección 3.
  // Nombres y direcciones ficticios, creados para el prototipo académico.
  var stores = {
    na: [
      { name: 'Stride Athletics', addr: '1420 N. Michigan Ave.', city: 'Chicago, IL, EE. UU.' },
      { name: 'Summit Run Co.', addr: '875 Larimer St.', city: 'Denver, CO, EE. UU.' },
      { name: 'Pacific Track Outfitters', addr: '310 SW Morrison St.', city: 'Portland, OR, EE. UU.' },
      { name: 'Metro Sport Footwear', addr: '220 Queen St. W.', city: 'Toronto, ON, Canadá' }
    ],
    emea: [
      { name: 'Läufer Sporthaus', addr: 'Friedrichstraße 112', city: 'Berlín, Alemania' },
      { name: 'Corsa Sport', addr: 'Corso Buenos Aires 45', city: 'Milán, Italia' },
      { name: 'Pista Running', addr: 'Calle de Fuencarral 88', city: 'Madrid, España' },
      { name: 'Savanna Run', addr: '54 Long Street', city: 'Ciudad del Cabo, Sudáfrica' }
    ],
    apac: [
      { name: 'Kizuna Running', addr: '3-12-7 Shibuya', city: 'Tokio, Japón' },
      { name: 'Lion City Athletics', addr: '290 Orchard Road #03-15', city: 'Singapur' },
      { name: 'Harbour Sports', addr: '412 George St.', city: 'Sídney, Australia' },
      { name: 'Seoul Stride', addr: '25 Gangnam-daero', city: 'Seúl, Corea del Sur' }
    ],
    latam: [
      { name: 'Pulso Deportivo', addr: 'Av. Insurgentes Sur 1235', city: 'Ciudad de México, México' },
      { name: 'Passo Esporte', addr: 'Rua Oscar Freire 640', city: 'São Paulo, Brasil' },
      { name: 'Correr Sur', addr: 'Av. Providencia 2140', city: 'Santiago, Chile' },
      { name: 'Andes Running', addr: 'Av. Ballivián 560 (El Prado)', city: 'Cochabamba, Bolivia' }
    ]
  };

  window.RUNE = window.RUNE || {};
  window.RUNE.data = { regions: regions, uses: uses, products: products, athletes: athletes, campaigns: campaigns, stores: stores };
})();
