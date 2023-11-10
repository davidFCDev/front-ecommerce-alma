import { Metadata } from "next"
import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Almacén",
  description: "Explora todos nuestros productos.",
}

export default function StorePage() {
  return <StoreTemplate />
}
