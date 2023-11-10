import LoginTemplate from "@modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acceso",
  description: "Accede con tu cuenta personal.",
}

export default function Login() {
  return <LoginTemplate />
}
