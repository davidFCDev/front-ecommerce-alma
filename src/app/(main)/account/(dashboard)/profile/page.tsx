import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perfil",
  description: "Mira y edita tu perfil.",
}

export default function Profile() {
  return <ProfileTemplate />
}
