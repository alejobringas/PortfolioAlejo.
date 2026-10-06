# Alejo Bringas — Portfolio

Portfolio personal de desarrollo web y aplicaciones de escritorio. Presenta una selección de proyectos, sus tecnologías y enlaces públicos.

[Ver portfolio](https://alejobringasdev.netlify.app/) · [GitHub](https://github.com/alejobringas) · [ARCH Studio](https://archstudio.com.ar/)

## Stack

React, TypeScript y Vite. Iconos de Lucide y tipografías locales de Fontsource.

## Desarrollo

Requiere una versión de Node.js compatible con Vite 6 y npm.

```sh
npm ci
npm run dev
```

## Validación y producción

```sh
npm run lint
npm run build
npm run preview
```

El build incluye la comprobación de TypeScript y genera `dist/`. El sitio se publica en Netlify desde ese directorio.

## Contenido

- `src/data/portfolio.ts`: proyectos, tecnologías y contacto.
- `src/components/`: secciones y tarjetas.
- `src/styles.css`: identidad visual y comportamiento responsive.
- `public/assets/projects/`: capturas de los proyectos.

Las demos y versiones candidatas se identifican en las descripciones. Un enlace al sitio de un proyecto no implica que su código fuente esté publicado en este repositorio.
