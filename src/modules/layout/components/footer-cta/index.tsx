/* eslint-disable @next/next/no-img-element */

import Button from "@modules/common/components/button"

const FooterCTA = () => {
  return (
    <div className="w-full flex relative items-center justify-center text-gray-900">
      <div className="absolute z-10 flex flex-col gap-4 small:max-w-[40%] text-center px-8 small:px-0">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl small:text-7xl font-neutral">Únete a nuestra newsletter</h2>
          <p className="text-sm small:text-base">Recibe nuestras ofertas exclusivas</p>
        </div>
        <div className="flex flex-col gap-4 px-6 small:px-0">
          <input
            type="text"
            placeholder="Correo electrónico"
            className="rounded-lg p-3 outline-none shadow"
          />
          <Button className="rounded-lg tracking-wider text-sm small:text-lg">
            Suscribirse
          </Button>
        </div>
      </div>

      <div className="w-full flex h-[550px]">
        <img
          src="/banner-newsletter.jpg"
          alt="banner suscripcion"
          className="w-full object-center object-cover"
        />
      </div>
    </div>
  )
}

export default FooterCTA
