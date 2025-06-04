import { lazy, useRef, useState } from "react";
const Footer = lazy(() => import("@/components/Footer"));
import { IoMdSend as Send } from "react-icons/io";
import BreadCrumb from "@/components/BreadCrumb"
import { useParams } from "react-router-dom"
import { ScrollToTop } from "@/components/utils";
import ImageLoader from "@/components/utils/Imgloader";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { mockFetchPost } from "@/components/utils";
import { MdCheck, MdWarning } from "react-icons/md";




const Register = () => {
  ScrollToTop();
  const [btnContent, setBtnContent] = useState(() => <>Envoyer <Send className="" /></>)
const [btnStyle, setBtnStyle] = useState("")
const [isSubmitting, setIsSubmitting] = useState(false);

const [nameRef, emailRef, messageRef] = [useRef(), useRef(), useRef()]

async function sendForm(e) {
  e.preventDefault();
  setIsSubmitting(true);
  setBtnContent(<><span>envoi en cours</span><FadeLoader style={{ transform: "scale(0.5)", display: "inline-block" }} color="white" loading size={90} className="ml-2 mt-[-8px] " /></>);
  setBtnStyle("bg-blue-600 cursor-not-allowed");
  // const formData = new FormData();
  // formData.append("name", nameRef.current.value);
  // formData.append("email", emailRef.current.value);
  // formData.append("message", messageRef.current.value);
  // formData.forEach((val,key,parent)=>console.log(`${parent} : ${key} : ${val} \n`))
  try {
    // Simulate sending data
    const res = await mockFetchPost();
    if (!res.ok) {
      setBtnStyle("bg-red-500 hover:bg-red-600");
      throw new Error()
    }

    const data = await res.json()

    if (!data || data.message == "Mock post failed") {
      setBtnStyle("bg-red-500 hover:bg-red-600");
      throw new Error()
    }

    if (data.message == "Mock post succeeded") {
      setBtnContent(<>Envoyé <MdCheck /></>);
      setBtnStyle("bg-green-500 hover:bg-green-600");
      toast.success("Envoyé")
      e.target.reset();
    }

  } catch (error) {
    setBtnContent(<> Erreur <MdWarning /></>);
    setBtnStyle("bg-red-500 hover:bg-red-600");
    toast.error("envoi échoué")
    e.target.reset();
  }
  setTimeout(() => {
    setBtnContent(() => <>Envoyer <Send className="" /></>);
    setBtnStyle("bg-blue-600")
    setIsSubmitting(false);
  }, 3000);
}
  const params = useParams();
  const ChoosenCourse = params.course;

  const coursesOptions = [
    { name: "tsdi", value: "T.S.D.I : Technicien Spécialisé en Développement Informatique" },
    { name: "tsge", value: "T.S.G.E : Technicien Spécialisé en Gestion des Entreprises" },
    { name: "tgi", value: "T.G.I : Technicien en Gestion Informatisée" }
  ].sort((a, b) => (a.name === ChoosenCourse ? -1 : b.name === ChoosenCourse ? 1 : 0));

  const BreadCrumblinks = [
    { path: "/", label: "accuil" },
    { path: "/préinscription", label: "préinscription" },
  ];

  if (ChoosenCourse) BreadCrumblinks.push({ path: ChoosenCourse, label: ChoosenCourse });

  if (ChoosenCourse && !coursesOptions.some(option => option.name === ChoosenCourse)) {
    window.location.replace("/404");
    return null;
  }

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
    // e.preventDefault();
    // let formData = new FormData();
    // formData.append("last_name", lastName.current.value);
    // formData.append("first_name", firstName.current.value);
    // formData.append("email", email.current.value);
    // formData.append("phone", phone.current.value);
    // formData.append("level", level.current.value);
    // formData.append("address", address.current.value);
    // formData.append("course", course.current.value);

  }

  return (
    <>
      <section role="préinscription" className="h-screen mt-[4rem]">
        <BreadCrumb styles="top-[4.5rem]" links={BreadCrumblinks} />
        <main className="mt-2 px-4 ">
          <h1 className="text-4xl border-l-5 md:text-5xl md:border-l-6 border-blue-600 rounded-sm px-2 mb-4">Préinscription</h1>
          <div className="md:flex ">
            <form className="flex flex-col gap-y-2 md:w-1/3 " onSubmit={(e) => sendForm(e)}>
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
                    inputMode={meta.type}
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
              <button disabled={isSubmitting} type="submit" className={`outline-1 outline-black bg-blue-500 active:scale-90 active:animate-bounce text-xl  text-white flex items-center justify-center gap-4 py-2 px-4  rounded-md mb-10 md:mb-0 hover:bg-blue-700 transition duration-300 ${btnStyle}`}>
                {btnContent}
              </button>
            </form>
            <ImageLoader styleClasses={"w-2/3 px-4 hidden md:block  mb-[3.5rem] "} title={"form illustration"} imgSrc={"/adventure.svg"} />
          </div>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Register;