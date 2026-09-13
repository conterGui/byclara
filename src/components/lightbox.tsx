import { useEffect, useRef, useState, type TouchEvent } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import type { Photo } from "@/data/clients"

interface LightboxProps {
  photos: Photo[]
  clientName: string
  tags: string[]
  startIndex?: number
  onClose: () => void
}

export function Lightbox({ photos, clientName, tags, startIndex = 0, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex)
  const [dragX, setDragX] = useState(0)
  const startX = useRef<number | null>(null)

  const goNext = () => setCurrent((i) => (i < photos.length - 1 ? i + 1 : 0))
  const goPrev = () => setCurrent((i) => (i > 0 ? i - 1 : photos.length - 1))

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") setCurrent((i) => (i > 0 ? i - 1 : photos.length - 1))
      if (e.key === "ArrowRight") setCurrent((i) => (i < photos.length - 1 ? i + 1 : 0))
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [photos.length, onClose])

  const onTouchStart = (e: TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const onTouchMove = (e: TouchEvent) => {
    if (startX.current === null) return
    setDragX(e.touches[0].clientX - startX.current)
  }

  const onTouchEnd = () => {
    if (startX.current === null) return
    const delta = dragX
    startX.current = null
    if (delta < -60) goNext()
    else if (delta > 60) goPrev()
    setDragX(0)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 text-white hover:text-white/80"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="absolute top-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <p className="text-sm text-white/80">
          {clientName} — {current + 1}/{photos.length}
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="flex items-center gap-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-white/80"
          onClick={goPrev}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <img
          src={photos[current].src}
          alt={clientName}
          draggable={false}
          className="max-h-[80vh] max-w-[80vw] touch-pan-y select-none rounded-lg object-contain"
          style={{
            transform: `translateX(${dragX}px)`,
            transition: dragX === 0 ? "transform 0.2s ease-out" : "none",
          }}
        />

        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-white/80"
          onClick={goNext}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  )
}
