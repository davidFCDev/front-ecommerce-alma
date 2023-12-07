"use client"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import ContactButtom from "@modules/common/components/whatsapp"

const Hero = () => {
  const animationOptions = {
    opacity: 1,
    transition: { duration: 0.6 },
  }

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true })

  return (
    <div className="h-[100vh] w-full relative font-roboto">
      <motion.div
        animate={inView ? animationOptions : {}}
        initial={{ opacity: 0 }}
        ref={ref}
        className="text-white absolute inset-0 z-20 flex flex-col text-left justify-end items-start small:items-start pb-20 pl-10 small:px-32 small:py-20"
      >
        <div className="flex flex-col">
          <h1 className="text-4xl small:text-5xl drop-shadow-md shadow-black uppercase font-bold tracking-wide">
            <span className="text-5xl small:text-6xl">A</span>lma,
          </h1>
          <h1 className="text-4xl small:text-5xl drop-shadow-md shadow-black uppercase font-bold tracking-wide">
            <span className="text-5xl small:text-6xl">C</span>uerpo
          </h1>
          <h1 className="text-4xl small:text-5xl mb-4 drop-shadow-md shadow-black uppercase font-bold tracking-wide">
            y <span className="text-5xl small:text-6xl">M</span>ente
          </h1>
          <div className="flex flex-col gap-2 text-lg-regular max-w-[35rem] mb-6 drop-shadow-md shadow-black text-gray-100">
            <p className="text-xs small:text-sm text-light">
              handmade in Mataró, Barcelona
            </p>
          </div>
        </div>

        <UnderlineLink href="/store" >Nuestros productos</UnderlineLink>
        <ContactButtom />
      </motion.div>
      <div className="hidden small:block bg-gradient-to-tr from-black to-transparent w-full h-full absolute z-10 opacity-40" />
      <div className="block small:hidden bg-gradient-to-tr from-black to-transparent w-full h-full absolute z-10 opacity-40" />

      <Image
        src="/heroweb.webp"
        loading="eager"
        priority={true}
        quality={100}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default Hero
