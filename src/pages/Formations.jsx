import React from "react"
const BreadCrumb = React.lazy(() => import("@/components/BreadCrumb"))
const Courses = React.lazy(() => import("@/components/courses"))
const Footer = React.lazy(() => import("@/components/Footer"))
import { ScrollToTop } from "@/components/utils"


const Formations = () => {
  ScrollToTop()
  const BreadCrumblinks = [{ path: '/', label: 'Accueil' }, { path: '/formations_diplomantes', label: 'Formations diplomantes' }]
  return (
    <section
      className="h-screen  mt-[4rem]">
      <BreadCrumb links={BreadCrumblinks} />
      <Courses />
      <Footer />
    </section>
  )
}


export default Formations
