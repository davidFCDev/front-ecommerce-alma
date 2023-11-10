"use client"

import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import { BiLogoInstagram, BiLogoTelegram, BiLogoWhatsapp } from "react-icons/bi"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-16 pt-20 pb-16 px-6 small:px-20">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div className="flex flex-col gap-4 text-gray-800">
          <Link href="/" className="text-base font-semibold small:text-xl-semi uppercase">
            La fuerza del alma
          </Link>
          <p className="underline text-sm small:text-base">info@lafuerzadelalma.com</p>
          <p className="text-sm small:text-base">Whatsapp: +34 626 88 98 80</p>
          <p className="text-sm small:text-base">Mataró,Barcelona</p>
        </div>

        {collections && (
          <div className="flex flex-col gap-y-4 text-sm">
            <span className="text-lg font-semibold">Colecciones</span>
            <ul
              className={clsx("grid grid-cols-1 gap-4", {
                "grid-cols-3": (collections?.length || 0) > 3,
              })}
            >
              {collections?.map((c) => (
                <li
                  key={c.id}
                  className="transform hover:scale-105 transition-all text-xs small:text-base"
                >
                  <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-y-4 text-sm">
          <span className="text-lg font-semibold">Contacto</span>
          <div className="flex flex-col gap-4">
            <Link
              target="_blank"
              href="https://www.instagram.com/lafuerzadelalma.fa/"
              className="flex items-center gap-1 hover:text-pink-600"
            >
              Instagram
              <BiLogoInstagram className="text-lg" />
            </Link>
            <Link
              target="_blank"
              href="https://t.me/lafuerzadelalma"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Telegram
              <BiLogoTelegram className="text-lg" />
            </Link>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=34626889880&text&type=phone_number&app_absent=0"
              className="flex items-center gap-1 hover:text-green-600"
            >
              Whatsapp
              <BiLogoWhatsapp className="text-lg" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href='/contact' className="underline">Política de privacidad y Envíos</Link>
      </div>
    </div>
  )
}

export default FooterNav
