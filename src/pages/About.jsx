import BreadCrumb from '@/components/BreadCrumb'
import Footer from '@/components/Footer'
import {lazy} from 'react'
const BreadCrumblinks = [
  { path: "/", label: "accuil" },
  { path: "/", label: "À propos" },
];
const About = () => {

  return (
    <section
      className="h-screen  mt-[4rem]">
      <BreadCrumb links={BreadCrumblinks} />
      
      <Footer />
    </section>
  )
}

export default About
