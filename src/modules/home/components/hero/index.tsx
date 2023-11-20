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
        className="text-white absolute inset-0 z-10 pb-32 flex flex-col items-center text-center small:text-left justify-end small:items-start small:px-32 small:py-20"
      >
        <h1 className="text-4xl small:text-5xl mb-4 drop-shadow-md shadow-black uppercase font-bold">
          Alma, cuerpo y mente
        </h1>
        <p className="text-lg-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black text-gray-100">
          velas de cera de soja | minerales | sahumerios | handmade in Mataró
        </p>
        <UnderlineLink href="/store">Nuestros productos</UnderlineLink>
        <ContactButtom />
      </motion.div>
      <Image
        src="/hero2.webp"
        loading="eager"
        priority={true}
        quality={90}
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
