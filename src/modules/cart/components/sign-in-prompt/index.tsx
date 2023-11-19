import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-gray-50 flex items-start justify-between py-4 px-2">
      <div className="">
        <h2 className="text-xl-semi">¿Ya tienes una cuenta?</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          Inicia sesión para una mejor experiencia.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary" className="font-semibold tracking-wide">Accede</Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
