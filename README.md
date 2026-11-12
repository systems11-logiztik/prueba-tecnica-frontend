# Prueba técnica — Frontend Semisenior

Proyecto base para la prueba técnica. Ya trae instaladas y configuradas las librerías que vas a necesitar, para que el tiempo de la sesión lo dediques a construir.

## Antes de la sesión

Haz esto **el día anterior**, para confirmar que todo funciona en tu equipo:

1. Instala **Node.js 20.9 o superior** (recomendado: Node 22; si usas nvm, ejecuta `nvm use`).
2. Clona el repositorio e instala las dependencias:

   ```bash
   npm install
   ```

3. Levanta el proyecto:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000). Si ves la página "Panel de productos", está todo listo.

**No escribas código todavía.** El enunciado de la prueba se entrega al inicio de la sesión.

## Qué incluye

| Área | Librería | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 16.4.3 |
| UI | React | 19.3.0 |
| Lenguaje | TypeScript | 5 |
| Estilos | Tailwind CSS | 4 |
| Componentes | shadcn/ui (button, input, label, textarea, table, card, badge) | — |
| Datos | TanStack Query (con Devtools) | 5.104.5 |
| Tablas | TanStack Table | 8.21.3 |
| Formularios | React Hook Form + @hookform/resolvers | 7.91.0 / 5.9.2 |
| Validación | Zod | 4.6.7 |
| Estado global | Zustand | 5.0.16 |
| Estado en la URL | nuqs | 2.10.2 |
| HTTP | Axios | 1.20.0 |
| Íconos | lucide-react | 1.61.0 |

Ya configurado:

- `src/app/providers.tsx`: `QueryClientProvider`, React Query Devtools y el adaptador de nuqs para el App Router.
- `src/lib/api.ts`: una instancia de Axios apuntando a `https://dummyjson.com`.
- `src/lib/utils.ts`: la función `cn` para combinar clases de Tailwind.
- `src/components/ui/`: componentes base de shadcn/ui.

## Agregar más componentes de shadcn/ui

El proyecto ya tiene `components.json`, así que puedes agregar los que necesites:

```bash
npx shadcn@latest add select dialog
```

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run start` | Sirve la versión de producción |
| `npm run lint` | Ejecuta ESLint |

## Notas sobre Next.js 16

- El proyecto tiene activado `cacheComponents` en `next.config.ts`.
- En el App Router, los componentes que leen la URL en el cliente (`useSearchParams`, o los hooks de nuqs) deben estar dentro de un `<Suspense>`; si no, el build muestra un error.
- `AGENTS.md` lo genera Next.js para los asistentes de IA y apunta a la documentación incluida en `node_modules/next/dist/docs/`.
