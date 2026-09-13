import { Mail, Phone } from "lucide-react"
import type { ComponentType } from "react"
import { Dots } from "@/components/decor"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

interface Contact {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
  href: string
}

const contacts: Contact[] = [
  {
    icon: Phone,
    label: "Telefone",
    value: "924 933 390",
    href: "tel:+351924933390",
  },
  {
    icon: Mail,
    label: "Email",
    value: "souzasantosc324@gmail.com",
    href: "mailto:souzasantosc324@gmail.com",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@byclara.pt",
    href: "https://instagram.com/byclara.pt",
  },
]

export function Contactos() {
  return (
    <section id="contactos" className="relative w-full overflow-hidden bg-brand-light py-10 lg:py-16">
      <Dots className="left-12 top-16" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-brand">Contactos</h2>

        <div className="flex flex-col items-center gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Instagram" ? "_blank" : undefined}
              rel={contact.label === "Instagram" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 text-brand transition-opacity hover:opacity-70"
            >
              <contact.icon className="h-5 w-5" />
              <span className="text-lg">{contact.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
