import BreadCrumb from "@/components/BreadCrumb"
import Courses from "@/components/courses"
import Footer from "@/components/Footer"
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
