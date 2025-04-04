import { createTRPCRouter, publicProcedure } from "@/trpc/init";

const POSTS = [
  {
    id: 1,
    title: "Introducción a TanStack Router",
    excerpt: "Aprende los conceptos básicos...",
  },
  {
    id: 2,
    title: "Layouts en TanStack",
    excerpt: "Cómo estructurar tu aplicación...",
  },
  { id: 3, title: "Data Loading", excerpt: "Patrones de carga de datos..." },
  { id: 4, title: "Rutas Dinámicas", excerpt: "Trabajando con parámetros..." },
  {
    id: 5,
    title: "Optimización",
    excerpt: "Mejores prácticas de rendimiento...",
  },
];

export const postsRouter = createTRPCRouter({
  get: publicProcedure.query(async () => {
    return { res: POSTS };
  }),
});
