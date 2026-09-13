export interface Photo {
  src: string
}

export interface Client {
  id: string
  name: string
  tags: string[]
  photos: Photo[]
}

function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}

export const clients: Client[] = [
  {
    id: "1",
    name: "Dayane",
    tags: ["Lash Lifting", "Brow Lamination"],
    photos: [
      { src: asset("fotos/dayane 1.jpeg") },
      { src: asset("fotos/dayane 2.jpeg") },
      { src: asset("fotos/dayane 3.jpeg") },
    ],
  },
  {
    id: "2",
    name: "Maria",
    tags: ["Lash Lifting", "Brow Lamination"],
    photos: [
      { src: asset("fotos/maria 1.jpeg") },
      { src: asset("fotos/maria 2.jpeg") },
      { src: asset("fotos/maria 3.jpeg") },
    ],
  },
  {
    id: "3",
    name: "Ivy",
    tags: ["Lash Lifting", "Brow Lamination"],
    photos: [
      { src: asset("fotos/ivy 1.jpeg") },
      { src: asset("fotos/ivy 2.jpeg") },
      { src: asset("fotos/ivy 3.jpeg") },
    ],
  },
  {
    id: "4",
    name: "Luiza",
    tags: ["Lash Lifting", "Brow Lamination"],
    photos: [
      { src: asset("fotos/luiza 1.jpeg") },
      { src: asset("fotos/luiza 2.jpeg") },
      { src: asset("fotos/luiza 3.jpeg") },
    ],
  },
  {
    id: "5",
    name: "Dayane",
    tags: ["Lash Lifting"],
    photos: [
      { src: asset("fotos/dayane1 1.jpeg") },
      { src: asset("fotos/dayane1 2.jpeg") },
      { src: asset("fotos/dayane1 3.jpeg") },
    ],
  },
]
