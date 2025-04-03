import { createFileRoute, useParams } from '@tanstack/react-router';

interface Post {
  title: string;
  content: string;
}

// Simulamos una base de datos de posts
const POSTS_DB: Record<string, Post> = {
  '1': {
    title: 'Introducción a TanStack Router',
    content: 'TanStack Router es una biblioteca moderna para el enrutamiento...'
  },
  '2': {
    title: 'Server Side Rendering',
    content: 'El SSR es una técnica que permite renderizar las páginas en el servidor...'
  },
  // ... más posts
}

export const Route = createFileRoute('/posts/$postId/')({
  loader: async ({ params: { postId } }) => {
    // En un caso real, esto sería una llamada a una API o base de datos
    const post = POSTS_DB[postId]
    if (!post) {
      throw new Error('Post no encontrado')
    }
    return post
  },
  component: PostComponent,
})

function PostComponent() {
  const { postId } = useParams({ from: '/posts/$postId/' })
  const { title, content } = Route.useLoaderData()
  
  return (
    <article className="prose prose-zinc lg:prose-lg">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-zinc-500 mt-2">ID: {postId}</div>
      </header>
      
      <div className="mt-6">
        <p className="text-lg text-zinc-700">
          {content}
        </p>
      </div>
    </article>
  )
}
