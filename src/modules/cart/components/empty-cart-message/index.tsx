import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-50 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">Tu cesta está vacía</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Aún no tienes nada en tu cesta. Cambiemos eso, usa el siguiente acceso para empezar a descubrir nuestros productos.
      </p>
      <div className="text-white">
        <UnderlineLink href="/store">Ver productos</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
