import Courses from "@/components/courses"
import Footer from "@/components/Footer"
import Hero from "@/components/hero"
import Quote from "@/components/Quote"
import Transition from "@/components/Transition"
import { ScrollToTop   } from "@/components/utils"

const Home = () => {
  ScrollToTop()
  return (
    <>
      <Hero />
      <Courses />
      <Quote/>
      <Footer/>
    </>
  )
}

export default Home
