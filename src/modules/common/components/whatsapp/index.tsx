/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const ContactButtom = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send/?phone=34626889880&text&type=phone_number&app_absent=0"
      target="_blank"
      className="fixed bottom-2 small:bottom-1 right-2 small:right-1 z-20"
    >
      <img
        src="/whats-icono.png"
        alt="icono de whatsapp"
        className="w-12 h-12 small:w-16 small:h-16 hover:scale-105 transform transition-all duration-300"
      />
    </Link>
  )
}

export default ContactButtom
