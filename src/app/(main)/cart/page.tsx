import CartTemplate from "@modules/cart/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tu cesta",
  description: "Mira lo que tienes en tu cesta",
}

export default function Cart() {
  return <CartTemplate />
}
