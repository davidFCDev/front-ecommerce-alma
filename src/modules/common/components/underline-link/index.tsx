import ArrowRight from "@modules/common/icons/arrow-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link
        href={href}
        className="underline-link flex items-center text-base-regular small:text-large-regular shadow-sm shadow-neutral-900 rounded-sm gap-x-2 small:gap-x-4 py-2 transition-all duration-300 group px-6 w-full"
      >
        <>
          <span>{children}</span>
          <ArrowRight
            size={20}
            className="transition-all group-hover:ml-2 duration-300"
          />
        </>
      </Link>
    </div>
  )
}

export default UnderlineLink
