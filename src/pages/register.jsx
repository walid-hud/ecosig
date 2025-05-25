import { MdArrowOutward as Arrow, MdTurnLeft } from "react-icons/md";
import { lazy, useRef } from "react";
const Footer = lazy(() => import("@/components/Footer"));
import { IoMdSend as Send } from "react-icons/io";
import BreadCrumb from "@/components/BreadCrumb"
import { NavLink, useParams } from "react-router-dom"
import { ScrollToTop, } from "@/components/utils";
import FormSendUI from "@/components/FormSendUI";


const Register = () => {
  ScrollToTop();
  const params = useParams();
  const ChoosenCourse = params.course;

  const coursesOptions = [
    { name: "tsdi", value: "T.S.D.I : Technicien Spécialisé en Développement Informatique" },
    { name: "tsge", value: "T.S.G.E : Technicien Spécialisé en Gestion des Entreprises" },
    { name: "tgi", value: "T.G.I : Technicien en Gestion Informatisée" }
  ].sort((a, b) => (a.name === ChoosenCourse ? -1 : b.name === ChoosenCourse ? 1 : 0));

  const BreadCrumblinks = [
    { path: "/", label: "accuil" },
    { path: "/inscription", label: "inscription" },
    { path: ChoosenCourse, label: ChoosenCourse }
  ];

  const firstName = useRef(null)
  const lastName = useRef(null)
  const email = useRef(null)
  const phone = useRef(null)
  const level = useRef(null)
  const address = useRef(null)
  const course = useRef(null)

  // Helper for field labels and placeholders
  const fieldMeta = {
    last_name: { label: "Nom", placeholder: "Entrez votre nom", required: true, ref: lastName },
    first_name: { label: "Prénom", placeholder: "Entrez votre prénom", required: true, ref: firstName },
    email: { label: "Email", placeholder: "nom@example.com", required: true, type: "email", ref: email },
    phone: { label: "Telephone", placeholder: "0XXXXXXXXX", required: true, type: "tel", ref: phone },
    level: { label: "Niveau d'études", placeholder: "EX: Bac", required: true, ref: level },
    address: { label: "Address", placeholder: "Address (optional)", required: false, ref: address }
  };
  
  const handlSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("last_name", lastName.current.value);
    formData.append("first_name", firstName.current.value);
    formData.append("email", email.current.value);
    formData.append("phone", phone.current.value);
    formData.append("level", level.current.value);
    formData.append("address", address.current.value);
    formData.append("course", course.current.value);
    // finish later 
  }

  return (
    <>
      <section role="inscription" className="h-screen mt-[4rem]">
        <BreadCrumb styles="top-[4.5rem]" links={BreadCrumblinks} />
        <main className="mt-2 px-4">
          <h1 className="text-4xl border-l-5 border-blue-600 rounded-sm px-2 mb-4">Inscription</h1>
          <form className="flex flex-col gap-y-2" onSubmit={(e)=>handlSubmit(e)}>
            {Object.entries(fieldMeta).map(([field, meta], index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <label
                  htmlFor={field}
                  className="text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0"
                >
                  {meta.label}
                  {meta.required && <span className="text-red-600">*</span>}
                </label>
                <input
                  ref={meta.ref}
                  type={meta.type || "text"}
                  required={meta.required}
                  name={field}
                  placeholder={meta.placeholder}
                  id={field}
                  className="outline-1 focus:outline-sky-600 rounded-md p-3"
                  aria-label={field}
                />
              </div>
            ))}
            <div className="flex flex-col gap-y-2">
              <label htmlFor="course" className="text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0">
                Filière<span className="text-red-600">*</span>
              </label>
              <select
                ref={course}
                name="course"
                id="course"
                className="outline-1 rounded-md p-3 mb-4 focus:outline-sky-600 backdrop-blur-md"
                aria-label="Filière"
              >
                {coursesOptions.map((course, index) => (
                  <option key={index} value={course.value}>
                    {course.value}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="outline-1 outline-black bg-blue-500 active:scale-90 active:animate-bounce focus:outline-red-600 text-xl text-white flex items-center justify-center gap-4 py-2 px-4 rounded-md mb-10 hover:bg-blue-700 transition duration-300"
            >
              Envoyer <Send />
            </button>
          </form>
        </main>
        {/* <FormSendUI loading={true} Visible={true}/> */}
        <Footer />
      </section>
    </>
  );
};

export default Register;