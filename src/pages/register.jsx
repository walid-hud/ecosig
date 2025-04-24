import { IoMdSend as Send } from "react-icons/io";
import BreadCrumb from "@/components/BreadCrumb"
import { useParams } from "react-router-dom"
import Footer from "@/components/Footer";
import { ScrollToTop,  } from "@/components/utils";


const Register = () => {
  ScrollToTop()
  const params = useParams()
  const ChoosenCourse = params.course
  let coursesOptions = [
    { name: "tsdi", value: "T.S.D.I : Technicien Spécialisé en Développement Informatique" },
    { name: "tsge", value: "T.S.G.E : Technicien Spécialisé en Gestion des Entreprises" },
    { name: "tgi", value: "T.G.I : Technicien en Gestion Informatisée" }
  ]
  coursesOptions.sort((a, b) => {
    if (a.name === ChoosenCourse) return -1;
    if (b.name === ChoosenCourse) return 1;
    return 0;
  });
  const BreadCrumblinks = [{ path: '/', label: 'accuil' }, { path: '/inscription', label: 'inscription' }, { path: ChoosenCourse, label: ChoosenCourse }]
  return (
    <>
        <section role="inscription" className="h-screen  mt-[4rem]" >
          <BreadCrumb styles={"top-[4.5rem] "} links={BreadCrumblinks} />
          <main className=" mt-2 px-4 ">
            <h1 className="text-4xl border-l-5 border-blue-600 rounded-sm px-2 mb-4">Inscription</h1>
            <form className='flex flex-col gap-y-2    '>

              <label htmlFor="last_name" className='text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0 '>Nom</label>
              <input type="text" required name="last_name" placeholder="Entrez votre nom" id="last_name" className='outline-1 focus:outline-sky-600 rounded-md p-3' aria-label="Nom" />

              <label htmlFor="first_name" className='text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0 '>Prénom</label>
              <input type="text" required name="first_name" placeholder="Entrez votre prénom" id="first_name" className='outline-1 focus:outline-sky-600 rounded-md p-3' aria-label="Prénom" />

              <label htmlFor="address" className='text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0'>Address</label>
              <input type='text' required name="address" placeholder="Address" id="address" className='outline-1 focus:outline-sky-600 rounded-md p-3' />

              <label htmlFor="email" className='text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0 '>Email</label>
              <input type='email' required name="email" placeholder="Entrez votre email" id="email" className='outline-1 focus:outline-blue-700  rounded-md p-3' aria-label="Email" />

              <label htmlFor="phone" className='text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0'>Telephone</label>
              <input type='tel' required name="phone" placeholder="Telephone" id="phone" className='outline-1 focus:outline-sky-600 rounded-md p-3' />

              <label htmlFor="level" className='text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0'>Niveau d'études</label>
              <input type='text' required name="level" placeholder="EX: Bac" id="level" className='outline-1 focus:outline-sky-600 rounded-md p-3' />

              <label htmlFor="course" className='text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0'>Filière</label>
              <select name="course" id="course" className="outline-1 rounded-md p-3 mb-4 focus:outline-sky-600" aria-label="Filière">
                {coursesOptions.map((course, index) => {
                  return <option key={index} value={course.value} >{course.value}</option>

                })}
              </select>
              <button type="submit" className='outline-1 outline-black bg-blue-500 active:scale-90 active:animate-bounce focus:outline-red-600 text-xl text-white flex items-center justify-center gap-4 py-2 px-4 rounded-md mb-10 hover:bg-blue-700 transition duration-300'>Envoyer <Send className="" /></button>
            </form>
          </main>
          <Footer />
        </section>
                
    </>
  )
}

export default Register;