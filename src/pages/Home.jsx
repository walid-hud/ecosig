import React from "react"
import Hero from "@/components/hero"
const Courses = React.lazy(() => import("@/components/courses"))
const Footer = React.lazy(() => import("@/components/footer"))
const Quote = React.lazy(() => import("@/components/quote"))
import { ScrollToTop   } from "@/components/utils"
import About from "./About"

const Home = () => {
  ScrollToTop()
  return (
    <>
      <Hero />
      <Courses />
      <About/>
      <Footer/>
    </>
  )
}

export default Home
