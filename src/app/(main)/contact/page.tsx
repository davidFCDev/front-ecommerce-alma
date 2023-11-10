import Contact from "@modules/contact"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Contacto",
  description: "Resuelve todas tus dudas.",
}

export default function StorePage() {
  return <Contact />
}