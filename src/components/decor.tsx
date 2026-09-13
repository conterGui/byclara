export function Arch({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute right-6 top-1/2 z-0 hidden h-[60vh] w-[36vh] -translate-y-1/2 rounded-t-full border border-brand/15 lg:block ${className ?? ""}`}
    />
  )
}

export function ArchCircle({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute right-[calc(36vh+32px)] top-1/2 z-0 hidden h-[12vh] w-[12vh] -translate-y-1/2 rounded-full border border-brand/15 lg:block ${className ?? ""}`}
    />
  )
}

export function Dots({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-0 hidden h-24 w-24 opacity-40 [background-image:radial-gradient(circle,#A47549_2px,transparent_2px)] [background-size:16px_16px] lg:block ${className ?? ""}`}
    />
  )
}