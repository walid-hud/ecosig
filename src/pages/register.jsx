import { lazy } from "react";
const Footer = lazy(() => import("@/components/Footer"));
import { IoMdSend as Send } from "react-icons/io";
import BreadCrumb from "@/components/BreadCrumb"
import { useParams } from "react-router-dom"
import { ScrollToTop,  } from "@/components/utils";


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

  return (
    <>
      <section role="inscription" className="h-screen mt-[4rem]">
        <BreadCrumb styles="top-[4.5rem]" links={BreadCrumblinks} />
        <main className="mt-2 px-4">
          <h1 className="text-4xl border-l-5 border-blue-600 rounded-sm px-2 mb-4">Inscription</h1>
          <form className="flex flex-col gap-y-2">
            {["last_name", "first_name", "email", "phone", "level", "address"].map((field, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <label
                  htmlFor={field}
                  className="text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0"
                >
                  {field === "last_name" && "Nom"}
                  {field === "first_name" && "Prénom"}
                  {field === "email" && "Email"}
                  {field === "phone" && "Telephone"}
                  {field === "level" && "Niveau d'études"}
                  {field === "address" && "Address"}
                  {field !== "address" && <span className="text-red-600">*</span>}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  required={field !== "address"}
                  name={field}
                  placeholder={
                    field === "last_name"
                      ? "Entrez votre nom"
                      : field === "first_name"
                      ? "Entrez votre prénom"
                      : field === "email"
                      ? "Entrez votre email"
                      : field === "phone"
                      ? "Telephone"
                      : field === "level"
                      ? "EX: Bac"
                      : "Address (optional)"
                  }
                  id={field}
                  className="outline-1 focus:outline-sky-600 rounded-md p-3"
                  aria-label={field}
                />
              </div>
            ))}
            <label htmlFor="course" className="text-sm mb-[-10px] px-2 w-fit backdrop-opacity-0">
              Filière<span className="text-red-600">*</span>
            </label>
            <select
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
            <button
              type="submit"
              className="outline-1 outline-black bg-blue-500 active:scale-90 active:animate-bounce focus:outline-red-600 text-xl text-white flex items-center justify-center gap-4 py-2 px-4 rounded-md mb-10 hover:bg-blue-700 transition duration-300"
            >
              Envoyer <Send />
            </button>
          </form>
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Register;