import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-zinc-100 shadow-md text-black py-6 mb-8">
        <div className="w-[70%] mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">Sobre Mí</h1>
        </div>
      </header>

      <div className="max-w-screen-sm mx-auto px-4">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Quién soy?</h2>
          <p className="text-gray-600 leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones tecnológicas que marquen la diferencia. 
            Me especializo en desarrollo web y disfruto aprendiendo nuevas tecnologías.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experiencia</h2>
          <ul className="space-y-4">
            <li className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">Desarrollador Full Stack</h3>
              <p className="text-gray-600">Desarrollo de aplicaciones web utilizando React, Node.js y otras tecnologías modernas.</p>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">
              ¿Interesado en colaborar? No dudes en contactarme a través de mis redes sociales o correo electrónico.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
