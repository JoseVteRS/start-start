import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute('/posts')({
  component: PostsLayout,
  loader: async () => {
    // Simulamos una carga de datos del servidor
    return {
      pageTitle: 'Blog',
      description: 'Bienvenido a mi blog'
    }
  }
});

function PostsLayout() {
  const { pageTitle, description } = Route.useLoaderData()
  
  return (
    <div className="min-h-screen bg-white">
      {/* Componente BLOG en la parte superior */}
      <header className="bg-zinc-900 text-white py-6 mb-8">
        <div className="w-[70%] mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">{pageTitle}</h1>
          <p className="mt-2 text-zinc-300">{description}</p>
        </div>
      </header>

      {/* Contenido principal */}
      <div className="w-[70%] mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
