# Rohigarnez — Sitio web (React + Vite)

Rohigarnez es una aplicación frontend construida con React y Vite pensada para mostrar la web corporativa (páginas: inicio, servicios, proyectos y contacto). El proyecto usa Tailwind, componentes UI (MUI, Ant Design) y está estructurado como una aplicación SPA con React Router.

Estado actual
- Frontend con React 19 y Vite.
- Estructura de proyecto en la carpeta `rohigarnez/`.
- Rutas principales implementadas en `src/App.jsx`: `/`, `/servicios`, `/proyectos`, `/contacto` y rutas dinámicas para servicios y detalles de proyectos.

Características principales
- SPA con React Router.
- Estilos con TailwindCSS + variables CSS personalizadas.
- Componentes modulares en `src/components`.
- Páginas en `src/pages`.
- Soporte para modo oscuro mediante variables CSS.

Tecnologías
- React 19
- Vite
- TailwindCSS (v4)
- @vitejs/plugin-react
- MUI (@mui/material)
- Ant Design (antd)
- Otras: lucide-react, clsx, class-variance-authority, tw-animate-css

Requisitos
- Node.js 18+ (recomendado)
- npm (o pnpm/yarn si prefieres)

Instalación (rápida)
1. Clonar el repositorio:
   - git clone <tu-repo>
   - cd rohigarnez
2. Instalar dependencias:
   - npm install
3. Ejecutar en modo desarrollo:
   - npm run dev
4. Compilar para producción:
   - npm run build
5. Vista previa del build:
   - npm run preview

Scripts importantes
- npm run dev     → inicia servidor de desarrollo (Vite)
- npm run build   → crea build de producción
- npm run preview → sirve el build localmente
- npm run lint    → ejecutar ESLint

Nota: Si el proyecto está dentro de una subcarpeta (por ejemplo `rohigarnez/`), asegúrate de ejecutar los comandos dentro de esa carpeta.

Política de contribuciones (IMPORTANTE)
- Este repositorio NO acepta contribuciones externas.
- No abras Pull Requests ni Issues para proponer cambios.
- Cualquier cambio o solicitud debe ser comunicada directamente al mantenedor principal: @sergiomtzs96.
- No se revisarán PRs abiertas por colaboradores externos; serán cerradas sin merge.

Opciones recomendadas para reforzar esta política
- Convertir el repositorio a privado (GitHub Settings → Repository settings → Make private).
- Deshabilitar Issues (Settings → Features → uncheck "Issues") si no quieres recibir reports.
- Usar reglas de protección de rama para permitir sólo merges desde ramas internas controladas.
- Añadir un archivo CODEOWNERS que limite merges a ciertas cuentas/teams.

Estructura principal (resumen)
- rohigarnez/
  - src/
    - App.jsx            → definición de rutas principales
    - main.jsx           → entrada de la app
    - index.css          → variables y estilos globales (incluye imports de Tailwind)
    - components/        → componentes reutilizables (Navbar, Footer, etc.)
    - pages/             → páginas: Home, Services, Proyects, ProyectsDetails, Contact
    - assets/            → imágenes y recursos estáticos
    - data/              → datos estáticos o JSON utilizados por la app
  - public/ (si aplica)  → archivos estáticos servidos tal cual
  - package.json         → scripts y dependencias
  - vite.config.js       → configuración de Vite
  - eslint.config.js     → reglas de lint

Despliegue sugerido
- Vercel o Netlify funcionan muy bien con Vite; configurar la carpeta de build como `dist/`.
- Alternativamente, servir `dist/` desde cualquier CDN o servidor estático.

Contacto
- Autor/Propietario del repo: sergiomtzs96
- Para dudas administrativas (no código): contactar al mantenedor directamente.

Licencia
- Este repositorio está bajo licencia propietaria (All rights reserved). Ver el archivo LICENSE en la raíz para detalles.