/* eslint-disable @next/next/no-img-element */
"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const AboutText = () => {
  const [ref1, inView1] = useInView({ threshold: 0.7, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.7, triggerOnce: true })

  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  }

  return (
    <div className="flex flex-col mb-10 small:mb-32 gap-10 small:gap-16 text-xl-regular text-gray-900 px-10 small:px-32">
      <span className="text-sm small:text-base text-purple-700 mb-6 font-semibold tracking-wide italic text-center">
        ¿Quiénes somos?
      </span>

      <div className="flex flex-col small:flex-row gap-16 small:gap-20">
        <motion.div
          animate={inView1 ? animationOptions : {}}
          initial={{ opacity: 0, y: 50 }}
          ref={ref1}
          className="flex flex-col gap-2 small:gap-6"
        >
          <div className="flex items-center gap-3 small:gap-5 justify-center small:justify-start">
            <img
              src="/tarot-icono.png"
              alt="icono de tarot"
              className="w-8 pb-3 small:pb-0 small:w-10"
            />
            <h2 className="text-2xl small:text-3xl font-bold">Nosotros</h2>
          </div>
          <p className="font-light text-base small:text-lg leading-7 small:leading-8">
            Somos una pequeña tienda esotérica donde encontrarás velas de cera
            de soja cargadas de energía gracias a sus minerales y plantas
            aromáticas, además de bisutería, sahumerios y mucho más.
          </p>
        </motion.div>

        <motion.div
          animate={inView2 ? animationOptions : {}}
          initial={{ opacity: 0, y: 50 }}
          ref={ref2}
          className="flex flex-col gap-2 small:gap-6"
        >
          <div className="flex items-center gap-3 small:gap-5 justify-center small:justify-start">
            <img
              src="/ojo-icono.png"
              alt="icono de esoterismo"
              className="w-8 pb-3 small:pb-0 small:w-10"
            />
            <h2 className="text-2xl small:text-3xl font-bold">Te guiamos</h2>
          </div>
          <p className="font-light text-base small:text-lg leading-7 small:leading-8">
            Puedes contar con nuestra ayuda y asesoramiento para guiarte en la
            elección de los productos.
          </p>
        </motion.div>

        <motion.div
          animate={inView3 ? animationOptions : {}}
          initial={{ opacity: 0, y: 50 }}
          ref={ref3}
          className="flex flex-col gap-2 small:gap-6"
        >
          <div className="flex items-center gap-3 small:gap-5 justify-center small:justify-start">
            <img
              src="/vela-icono.png"
              alt="icono de velas"
              className="w-8 pb-3 small:pb-0 small:w-10"
            />
            <h2 className="text-2xl small:text-3xl font-bold">Workshop</h2>
          </div>
          <p className="font-light text-base small:text-lg leading-7 small:leading-8">
            También ofrecemos otros servicios como nuestro taller vela para el
            alma en el que crearás desde cero tu propia vela.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutText
