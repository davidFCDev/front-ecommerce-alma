/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const About = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  }
  const animationOptions2 = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2 },
  }

  const [ref1, inView1] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref6, inView6] = useInView({ threshold: 0.6, triggerOnce: true })
  const [ref7, inView7] = useInView({ threshold: 0.6, triggerOnce: true })

  return (
    <div className="mt-16 small:mt-32 w-full py-16 small:py-32 flex flex-col items-center gap-5 small:gap-10 text-justify text-gray-900 bg-stone-50">
      <div className="flex flex-col mb-10 small:mb-32 gap-10 small:gap-16 text-xl-regular text-gray-900 px-16 small:px-32">
        <span className="text-sm small:text-base text-purple-700 mb-6 font-semibold tracking-wide italic text-center">
          ¿Quieres saber más sobre nosotros?
        </span>

        <div className="flex flex-col small:flex-row gap-16 small:gap-20">
          <motion.div
            animate={inView1 ? animationOptions : {}}
            initial={{ opacity: 0, y: 50 }}
            ref={ref1}
            className="flex flex-col gap-4 small:gap-6"
          >
            <div className="flex items-center gap-3 small:gap-5 justify-center small:justify-start">
              <img
                src="/tarot-icono.png"
                alt="icono de tarot"
                className="w-8 pb-3 small:pb-0 small:w-10"
              />
              <h2 className="text-2xl small:text-3xl font-bold">Nosotros</h2>
            </div>
            <p className="font-light text-base small:text-lg leading-6 small:leading-8">
              Una pequeña tienda esotérica donde encontrarás velas de cera de
              soja cargadas de energía gracias a sus minerales y plantas
              aromáticas, además de minerales, sahumerios y mucho más.
            </p>
          </motion.div>

          <motion.div
            animate={inView2 ? animationOptions : {}}
            initial={{ opacity: 0, y: 50 }}
            ref={ref2}
            className="flex flex-col gap-4 small:gap-6"
          >
            <div className="flex items-center gap-3 small:gap-5 justify-center small:justify-start">
              <img
                src="/ojo-icono.png"
                alt="icono de esoterismo"
                className="w-8 pb-3 small:pb-0 small:w-10"
              />
              <h2 className="text-2xl small:text-3xl font-bold">Te guiamos</h2>
            </div>
            <p className="font-light text-base small:text-lg leading-6 small:leading-8">
              Puedes contar con nuestra ayuda y asesoramiento para guiarte en la
              elección de los productos.
            </p>
          </motion.div>

          <motion.div
            animate={inView3 ? animationOptions : {}}
            initial={{ opacity: 0, y: 50 }}
            ref={ref3}
            className="flex flex-col gap-4 small:gap-6"
          >
            <div className="flex items-center gap-3 small:gap-5 justify-center small:justify-start">
              <img
                src="/vela-icono.png"
                alt="icono de velas"
                className="w-8 pb-3 small:pb-0 small:w-10"
              />
              <h2 className="text-2xl small:text-3xl font-bold">Workshop</h2>
            </div>
            <p className="font-light text-base small:text-lg leading-6 small:leading-8">
              También ofrecemos otros servicios como nuestro taller vela para el
              alma en el que crearás desde cero tu propia vela.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col-reverse small:flex-row gap-5 items-start small:items-center">
        <img
          src="/banner-velas.jpg"
          alt="banner de velas"
          className="w-[75%] shadow-md"
        />
        <motion.h2
          animate={inView4 ? animationOptions2 : {}}
          initial={{ opacity: 0, x: 50 }}
          ref={ref4}
          className="uppercase px-20 text-base small:text-xl tracking-widest text-gray-700"
        >
          Velas
        </motion.h2>
      </div>

      <div className="flex flex-col-reverse small:flex-row-reverse gap-5 items-end small:items-center">
        <img
          src="/banner-minerales.jpg"
          alt="banner de piedras / minerales"
          className="w-[75%] shadow-md"
        />
        <motion.h2
          animate={inView5 ? animationOptions2 : {}}
          initial={{ opacity: 0, x: -50 }}
          ref={ref5}
          className="uppercase px-20 text-base small:text-xl tracking-widest text-gray-700"
        >
          Minerales
        </motion.h2>
      </div>

      <div className="flex flex-col-reverse small:flex-row gap-5 items-start small:items-center">
        <img
          src="/banner-sahumerios.jpg"
          alt="banner de sahumerios"
          className="w-[75%] shadow-md"
        />
        <motion.h2
          animate={inView6 ? animationOptions2 : {}}
          initial={{ opacity: 0, x: 50 }}
          ref={ref6}
          className="uppercase px-20 text-base small:text-xl tracking-widest text-gray-700"
        >
          Sahumerios
        </motion.h2>
      </div>

      <div className="flex flex-col-reverse small:flex-row-reverse gap-5 items-end small:items-center">
        <img
          src="/banner-saquitos.jpg"
          alt="banner de costura"
          className="w-[75%] shadow-md"
        />
        <motion.h2
          animate={inView7 ? animationOptions2 : {}}
          initial={{ opacity: 0, x: -50 }}
          ref={ref7}
          className="uppercase px-20 text-base small:text-xl tracking-widest text-gray-700"
        >
          y mucho más...
        </motion.h2>
      </div>
    </div>
  )
}

export default About
