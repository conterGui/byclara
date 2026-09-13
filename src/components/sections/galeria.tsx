import { useState } from "react"
import { Lightbox } from "@/components/lightbox"
import { clients, type Client } from "@/data/clients"
import { Arch } from "@/components/decor"

export function Galeria() {
  const [selected, setSelected] = useState<Client | null>(null)

  const total = clients.length

  function getRows(): Client[][] {
    if (total <= 3) return [clients]

    const rows: Client[][] = []
    let remaining = total

    while (remaining > 0) {
      if (remaining === 4) {
        rows.push(clients.slice(rows.flat().length, rows.flat().length + 2))
        rows.push(clients.slice(rows.flat().length))
        break
      }
      if (remaining <= 3) {
        rows.push(clients.slice(rows.flat().length))
        break
      }
      rows.push(clients.slice(rows.flat().length, rows.flat().length + 3))
      remaining -= 3
    }

    return rows
  }

  const rows = getRows()

  return (
    <section id="galeria" className="relative w-full overflow-hidden bg-brand-light py-10 lg:py-16">
      <Arch />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-3xl font-bold text-brand">Galeria</h2>

        <div className="flex flex-col gap-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-6 max-sm:!grid-cols-1"
              style={{ gridTemplateColumns: `repeat(${row.length}, 1fr)` }}
            >
              {row.map((client) => (
                <button
                  key={client.id}
                  onClick={() => setSelected(client)}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-white"
                >
                  <img
                    src={client.photos[0].src}
                    alt={client.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brand/60 via-brand/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {client.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <Lightbox
          photos={selected.photos}
          clientName={selected.name}
          tags={selected.tags}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
