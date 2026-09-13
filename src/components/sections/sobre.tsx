import { Sparkles } from "lucide-react"
import { Arch, ArchCircle } from "@/components/decor"

export function Sobre() {
  return (
    <section
      id="sobre"
      className="relative min-h-[90vh] w-full overflow-hidden bg-brand-light"
    >
      <Arch className="right-14 opacity-60" />
      <ArchCircle className="opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-12 top-12 z-0 hidden h-24 w-24 opacity-40 [background-image:radial-gradient(circle,#A47549_2px,transparent_2px)] [background-size:16px_16px] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-12 right-4 z-0 hidden h-16 w-16 opacity-40 [background-image:radial-gradient(circle,#A47549_1.5px,transparent_1.5px)] [background-size:12px_12px] lg:block"
      />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center gap-6 px-4 py-10 sm:px-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-14 lg:py-12 lg:min-h-[80vh]">
        <div className="relative z-10 space-y-7 text-center lg:space-y-8 lg:text-left">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(255,231,211,0.92),transparent_72%)] lg:hidden"
          />

          <Sparkles
            aria-hidden
            className="pointer-events-none absolute -left-10 top-0 hidden h-8 w-8 text-brand/30 lg:block"
          />
          <Sparkles
            aria-hidden
            className="pointer-events-none absolute -right-8 bottom-2 hidden h-6 w-6 text-brand/20 lg:block"
          />

          <span className="block text-sm font-medium uppercase tracking-widest text-brand/70 [text-shadow:0_1px_8px_rgba(255,231,211,0.95)] lg:text-base">
            Lash Lifting · Brow Lamination
          </span>

          <h2 className="font-display text-[clamp(3.5rem,16vw,10rem)] font-bold leading-none tracking-tight text-brand [text-shadow:0_2px_24px_rgba(255,231,211,1)]">
            ByClara
          </h2>

          <p className="mx-auto max-w-md text-lg leading-relaxed text-brand sm:text-xl [text-shadow:0_2px_12px_rgba(255,231,211,0.95)] lg:mx-0 lg:text-brand/75">
            Realço a beleza natural de cada olhar com técnicas delicadas que
            unem cuidado e autoestima.
          </p>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}hero-Photoroom.png`}
          alt="Clara Santos"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.3] object-cover opacity-40 [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] lg:pointer-events-auto lg:static lg:relative lg:h-[76vh] lg:w-auto lg:scale-100 lg:object-contain lg:opacity-100 lg:[-webkit-mask-image:linear-gradient(to_bottom,black_96%,transparent_100%)] lg:[mask-image:linear-gradient(to_bottom,black_96%,transparent_100%)]"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-t from-brand-light to-transparent" />
    </section>
  )
}