import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { DefaultCatchBoundary } from './components/default-catch-boundary'
import { NotFound } from './components/not-found'
import { routeTree } from './routeTree.gen'

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
    // Configuración específica para SSR
    context: {
      isServer: typeof window === 'undefined',
    },
    // Deshabilitar hidratación en el servidor
    defaultPreloadStaleTime: 0,
    // Asegurarse de que los loaders se ejecuten en el servidor
    defaultPendingComponent: () => null,
    defaultPendingMinMs: 0,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
