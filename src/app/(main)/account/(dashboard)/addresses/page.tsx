import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Direcciones",
  description: "Mira tus direcciones",
}

export default function Addresses() {
  return <AddressesTemplate />
}
