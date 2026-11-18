# RUNE · Sitio web (prototipo)

Prototipo navegable del sitio de **RUNE**, calzado deportivo de larga distancia. *Set In Stone.*

Es un sitio estático (HTML, CSS y JavaScript sin dependencias ni compilación) construido con el Design System de RUNE: neutros dominantes, Petróleo como color firma, un solo acento regional por pieza, radio 0, celdas separadas por 1px y tipografías Archivo e Instrument Sans.

> Prototipo académico · Compañía C · BSG 2026.

## Páginas

| Archivo | Sección |
| --- | --- |
| `index.html` | Inicio |
| `coleccion.html` | Colección (filtros Hombre/Mujer, uso, búsqueda y orden) |
| `producto.html?ref=rn-0242` | Ficha de producto (región, talla y bolsa) |
| `calidad.html` | Tecnología y calidad |
| `atletas.html` | Atletas RUNE · campañas A13–A16 |
| `historia.html` | Nuestra historia |
| `compromiso.html` | Compromiso RUNE |
| `tiendas.html` | Encuentra una tienda · alta de minoristas |
| `ayuda.html` | Atención al cliente · guía de tallas |
| `inversionistas.html` | Inversionistas · resultados Año 15 |

## Estructura

```
├── index.html … inversionistas.html   Páginas
├── css/
│   ├── tokens.css     Tokens del Design System (color, tipografía, espaciado)
│   └── site.css       Componentes y estilos del sitio
├── js/
│   ├── data.js        Catálogo (32 modelos), regiones y atletas
│   └── site.js        Cabecera, pie, región, bolsa, íconos y patrón de runas
└── img/
    ├── zapatillas/    Fotos de producto (el género sale del nombre del archivo)
    ├── atletas/       Fotos de campaña
    └── marca/         Packaging y favicon
```

Para cambiar nombres, descripciones o categorías de los modelos, edita `js/data.js`.

## Verlo en local

Las páginas funcionan abriendo `index.html` directamente, pero se recomienda un servidor local:

```bash
python -m http.server 8000
```

y abrir `http://localhost:8000`.

## Publicar con GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube el contenido de esta carpeta a la raíz.
2. En el repositorio: **Settings › Pages › Build and deployment**.
3. En **Source** elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
4. El sitio queda en `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`.

Desde la terminal:

```bash
git init
git add .
git commit -m "Sitio web RUNE"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<nombre-del-repositorio>.git
git push -u origin main
```

## Notas

- Políticas de devolución y garantía, y tiendas insignia: propuesta de políticas del prototipo, derivada de las decisiones del Año 15. Las 16 tiendas son ficticias (prototipo académico).
- Único dato pendiente: el PDF del informe anual en Inversionistas.
- La región elegida y la bolsa se guardan solo en el navegador de cada visitante (`localStorage`); no hay pagos ni envío real de formularios.
- Las cifras de Inversionistas y la historia provienen del caso del simulador BSG.
