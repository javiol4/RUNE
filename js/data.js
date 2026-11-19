/* RUNE · Datos del prototipo.
   Fotos de producto: img/zapatillas (el género sale del nombre del archivo).
   Fotos de atletas: img/atletas (mismas piezas que las campañas A13–A16).
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

  // Embajadores · campañas A13–A16 (carpeta campanas)
  var athletes = [
    {
      id: 'haaland', name: 'Erling Haaland', short: 'E. Haaland', sport: 'Fútbol', since: 'Año 13',
      region: 'emea', regionName: 'Europa-África', from: 'Min 00', to: 'Min 90',
      headline: 'Siempre llega.', campaign: 'A13 · Mismo estándar.',
      text: 'Lanzó la plataforma «Mismo estándar» en el Año 13 junto a Jude Bellingham. Potencia y constancia de principio a fin del partido.',
      img: 'img/atletas/Haaland_Rune_2.jpg', img2: 'img/atletas/Haaland_Rune_1.jpg', pos: '50% 30%', pos2: '50% 10%'
    },
    {
      id: 'bellingham', name: 'Jude Bellingham', short: 'J. Bellingham', sport: 'Fútbol', since: 'Año 13',
      region: 'emea', regionName: 'Europa-África', from: 'Min 00', to: 'Min 90',
      headline: 'Todo el campo es tuyo.', campaign: 'A13–A15 · Puente entre campañas.',
      text: 'Presente desde el lanzamiento. Su edición se adapta a las cuatro regiones sin cambiar el producto: solo cambia el acento.',
      img: 'img/atletas/Bellingham_Rune_1.jpg', img2: 'img/atletas/Bellingham_Rune_2.jpg', pos: '50% 22%', pos2: '50% 30%'
    },
    {
      id: 'messi', name: 'Lionel Messi', short: 'L. Messi', sport: 'Fútbol', since: 'Año 15',
      region: 'latam', regionName: 'Latinoamérica', from: 'Min 00', to: 'Min 90',
      headline: 'Cada paso cuenta.', campaign: 'A15 · Tres ritmos. Un estándar.',
      text: 'Llega en el Año 15 para la campaña «Tres ritmos. Un estándar.», con edición propia para Latinoamérica.',
      img: 'img/atletas/Messi_Rune_1.jpg', img2: 'img/atletas/Messi_Rune_2.jpg', pos: '50% 40%', pos2: '50% 60%'
    },
    {
      id: 'vozinha', name: 'Vozinha', short: 'Vozinha', sport: 'Fútbol · Cabo Verde', since: 'Año 15',
      region: 'emea', regionName: 'Europa-África', from: 'Min 00', to: 'Min 90',
      headline: 'Firme en cualquier parte.', campaign: 'A15–A16 · Set In Stone.',
      text: 'Guardameta de Cabo Verde. Lleva la promesa de RUNE a mercados de África con la misma exigencia que en cualquier estadio.',
      img: 'img/atletas/Vozinha_Rune_2.jpg', img2: 'img/atletas/Vozinha_Rune_1.jpg', pos: '50% 30%', pos2: '50% 20%'
    },
    {
      id: 'hamilton', name: 'Lewis Hamilton', short: 'L. Hamilton', sport: 'Fórmula 1', since: 'Año 16',
      region: 'na', regionName: 'Norteamérica', from: 'Km 00', to: 'Km 305',
      headline: '305 km. Mismo ritmo.', campaign: 'A16 · Distancia larga.',
      text: 'Se incorpora en el Año 16 y lleva la línea de recorrido a la distancia de un Gran Premio: 305 kilómetros al mismo nivel.',
      img: 'img/atletas/Hamilton_Rune_2.jpg', img2: 'img/atletas/Hamilton_Rune_1.jpg', pos: '50% 20%', pos2: '50% 40%'
    }
  ];

  var timeline = [
    { name: 'Haaland',    cells: ['Lanza', 'Refuerza', '', ''] },
    { name: 'Bellingham', cells: ['Lanza', 'Refuerza', 'Puente', ''] },
    { name: 'Messi',      cells: ['', '', 'Entra', 'Puente'] },
    { name: 'Vozinha',    cells: ['', '', 'Entra', 'Puente'] },
    { name: 'Hamilton',   cells: ['', '', '', 'Entra'] }
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
  window.RUNE.data = { regions: regions, uses: uses, products: products, athletes: athletes, timeline: timeline, stores: stores };
})();
