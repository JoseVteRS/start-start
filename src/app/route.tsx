import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
            Bienvenido a Mi Blog Personal
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-12">
            Un espacio donde comparto mis pensamientos sobre desarrollo, tecnología y más
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
              Últimos Posts
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              Explora mis publicaciones más recientes sobre desarrollo web y tecnología
            </p>
            <Link
              to="/posts"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Ver Posts
            </Link>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
              Sobre Mí
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              Conoce más sobre mi trayectoria y experiencia en el mundo del desarrollo
            </p>
            <Link
              to="/about"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Conóceme
            </Link>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
              Contacto
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              ¿Tienes alguna pregunta o propuesta? No dudes en contactarme
            </p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
