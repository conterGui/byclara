import { Dots } from "@/components/decor"

export function Servicos() {
  const services = [
    {
      title: "Lash Lifting",
      description:
        "Curvatura e definição dos cílios naturais, realçando o olhar sem necessidade de extensões.",
    },
    {
      title: "Brow Lamination",
      description:
        "Alinhamento das sobrancelhas para um aspeto mais bem cuidado e uniforme.",
    },
  ]

  return (
    <section id="servicos" className="relative w-full overflow-hidden bg-brand-light py-10 lg:py-16">
      <Dots className="left-12 top-16" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-brand">
          Serviços
        </h2>
        <p className="mb-12 text-center text-brand/60">
          Cada procedimento inclui um tutorial de cuidados para manter os
          resultados por mais tempo.
        </p>

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex w-full max-w-sm flex-col items-center gap-3 rounded-2xl bg-white/50 p-8 text-center"
            >
              <h3 className="text-xl font-bold text-brand">{service.title}</h3>
              <p className="text-sm leading-relaxed text-brand/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
