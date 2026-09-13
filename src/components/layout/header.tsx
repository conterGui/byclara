import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contactos", href: "#contactos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-light">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="ByClara" className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand transition-colors hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`text-brand sm:hidden ${open ? "invisible" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-light/90 sm:hidden">
          <button
            className="absolute right-6 top-4 text-brand"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6" />
          </button>

          <a href="#" className="absolute left-6 top-4">
<img src={`${import.meta.env.BASE_URL}logo.png`} alt="ByClara" className="h-12 w-auto" />
          </a>

          <nav className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-bold tracking-wide text-brand transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
