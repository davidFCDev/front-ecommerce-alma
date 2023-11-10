import OrdersTemplate from "@modules/account/templates/orders-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pedidos",
  description: "Revisa tus pedidos previos..",
}

export default function Orders() {
  return <OrdersTemplate />
}
