import { Header } from "@/components/layout/header"
import { Sobre } from "@/components/sections/sobre"
import { Servicos } from "@/components/sections/servicos"
import { Galeria } from "@/components/sections/galeria"
import { Contactos } from "@/components/sections/contactos"
import { WhatsAppButton } from "@/components/whatsapp-button"

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Header />
      <Sobre />
      <Servicos />
      <Galeria />
      <Contactos />
      <WhatsAppButton />
    </div>
  )
}

export default App
