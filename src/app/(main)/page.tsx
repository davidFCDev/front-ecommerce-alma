import About from "@modules/home/components/about"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Workshop from "@modules/home/components/workshop"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Compra productos espirituales en La Fuerza del Alma.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <Workshop />
    </>
  )
}

export default Home
