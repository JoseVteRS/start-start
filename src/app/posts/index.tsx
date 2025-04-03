import { createFileRoute, Link } from "@tanstack/react-router";

const POSTS = [
  { id: 1, title: "Introducción a TanStack Router", excerpt: "Aprende los conceptos básicos..." },
  { id: 2, title: "Layouts en TanStack", excerpt: "Cómo estructurar tu aplicación..." },
  { id: 3, title: "Data Loading", excerpt: "Patrones de carga de datos..." },
  { id: 4, title: "Rutas Dinámicas", excerpt: "Trabajando con parámetros..." },
  { id: 5, title: "Optimización", excerpt: "Mejores prácticas de rendimiento..." },
];

export const Route = createFileRoute("/posts/")({
  component: PostsIndex,
});

function PostsIndex() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Todos los Posts</h1>
        <p className="text-zinc-600">
          Explora nuestra colección de artículos sobre TanStack Router
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {POSTS.map((post) => (
          <Link
            key={post.id}
            to="/posts/$postId"
            params={{ postId: post.id.toString() }}
            className="block p-6 rounded-lg border hover:border-blue-500 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-zinc-600">{post.excerpt}</p>
            <span className="inline-block mt-4 text-blue-500 hover:underline">
              Leer más →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
