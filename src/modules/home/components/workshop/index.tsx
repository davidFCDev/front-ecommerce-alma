/* eslint-disable @next/next/no-img-element */


const Workshop = () => {
  return (
    <div className="w-full mt-16 small:mt-24 mb-32 small:mb-44 py-10 bg-left-to-right">
      <div className="content-container flex flex-col-reverse gap-16 small:flex-row small:items-center justify-center py-10 relative">
        <div className="flex flex-col text-xl-regular text-gray-900 small:max-w-[45%] gap-6 small:gap-10">
          <span className="text-sm small:text-base text-purple-700 mb-6 font-semibold tracking-wide italic text-center">
            Taller de creaciones
          </span>
          <div className="flex flex-col gap-2 max-w-md text-justify items-center small:items-start">
            <h2 className="text-xl small:text-2xl font-extrabold text-gray-700 uppercase flex items-center">
              Vela para el Alma
            </h2>
            <p className="text-base small:text-lg leading-7 small:leading-9 font-light text-gray-900 max-w-lg mb-6">
              Sumérgete en la magia de las velas. En este taller aprenderás a
              crear tu propia vela desde cero. Contáctanos para más información
              y detalles.
            </p>
          </div>
          <img
            src="/velas-icono.png"
            alt="icono de velas"
            className="w-16 small:w-48 absolute left-[5%] -top-6 small:top-[5%] opacity-60"
          />
          <img
            src="/velas-2-icono.png"
            alt="icono de velas"
            className="w-16 small:w-48 absolute right-[5%] -bottom-6 small:bottom-[5%] opacity-60"
          />
        </div>
      </div>
    </div>
  )
}

export default Workshop
