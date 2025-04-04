import { Spinner } from "@/components/spinner";
import { useTRPC } from "@/trpc/react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  beforeLoad: Spinner,
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery(
      context.trpc.posts.get.queryOptions()
    );
  },
  component: PostsIndex,
});

function PostsIndex() {
  const trpc = useTRPC();
  const { data, isLoading } = useSuspenseQuery(trpc.posts.get.queryOptions());

  console.log({ data });

  if (!data || isLoading) return null;

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Todos los Posts</h1>
        <p className="text-zinc-600">
          Explora nuestra colección de artículos sobre TanStack Router
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.res.map((post) => (
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
