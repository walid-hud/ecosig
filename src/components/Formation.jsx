import { MdArrowOutward as Arrow, MdTurnLeft } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom"
import { formationsDiplomants } from "@/data/index"
import BreadCrumb from "./BreadCrumb"
import { ScrollToTop } from "./utils"
import { PiListChecksDuotone, PiCertificate, PiTimer } from "react-icons/pi"
import Footer from "./Footer"


const Formation = () => {
    ScrollToTop()
    const params = useParams()
    const course = params.course
    const courseData = formationsDiplomants.find((formation) => formation.link === course);
    if (!courseData) {
        window.location.replace("./404");
        return null;
    }
    const {
        id,
        title,
        text,
        link,
        imgLink,
        prerequisite,
        profile,
        duration,
        unites
    } = courseData;
    const BreadCrumblinks = [{ path: '/', label: 'accuil' }, { path: '/formations_diplomantes', label: 'formations diplomantes' }, { path: `/${course}`, label: course }]
    return (
        <main className="h-screen mt-[4rem]">
            <BreadCrumb links={BreadCrumblinks} />
            <h1 className="text-3xl border-l-6 mx-4 my-4 py-2 border-blue-600 font-medium rounded-md px-2 mb-4 md:text-5xl">{title}</h1>

            {/* <h1 className="border-l-6 mx-4 my-4  rounded-md  border-blue-600 text-3xl md:mx-4 px-2 font-medium md:text-4xl md:my-4  " style={{ fontFamily: "var(--font-serif)" }}>{title}</h1> */}
            <div className=" mt-4 flex flex-col px-4 md:grid md:grid-cols-2  ">
                <img src={imgLink} alt={`${imgLink}`}
                    className="py-4 md:h-4/5  md:origin-center"
                />
                <p className="text-xl text-gray-900   md:text-3xl md:pt-24 " >{text}</p>


                <div className="md:flex md:flex-col md:col-span-2 md:px-[25%]">
                    <p className="flex items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1 md:text-3xl "><PiListChecksDuotone className="text-2xl md:text-4xl" />Condition D'admission :</p>
                    <p className="md:text-xl">{prerequisite}</p>
                    <p className=" md:text-3xl flex items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1 "><PiCertificate className="text-2xl md:text-4xl" />Profile:</p>
                    <p className="md:text-xl">{profile}</p>
                    <p className="flex items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1 md:text-3xl"><PiTimer className="text-xl md:text-4xl" />Durée : {duration}</p>
                    <h1 className="flex sticky top-[0rem]  items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1 md:text-3xl">Unités :</h1>
                    <div className="sticky top-[5rem] flex flex-col gap-y-2  rounded-md  outline-1 px-2 py-4 backdrop-blur-lg ">
                        {unites.map((unit, index) => {
                            return <p
                                key={index} className={`text-shadow-sm py-1 unit_text flex md:text-xl`}><li /> {unit} .</p>
                        })}
                    </div>
                </div>
            </div>
            <div
                className="px-4 flex flex-col **:flex **:items-center **:justify-center **:gap-2 *:text-xl  py-4 gap-y-4 *:rounded-md *:py-2
                md:items-center
                md:justify-around
                    *:transition-all
                    *:duration-300 
                    *:ease-in-out
                    *:md:w-1/2
                    *:md:text-2xl
                    *:hover:bg-neutral-800
                    *:hover:text-blue-600
                    *:hover:border-white
                    
            ">
                <NavLink className="bg-blue-600 border-1 border-black  active:text-red-600 active-scale-110   text-neutral-100 backdrop-contrast-125 active:scale-90 " to={`/préinscription/${link}`}>
                    <button>S’inscrire à ce formation <Arrow /></button>
                </NavLink>

                <NavLink to={"/formations_diplomantes"} className="border-1 active:scale-90  backdrop-blur-lg">
                    <button>Voir d'autres formations <MdTurnLeft /></button>
                </NavLink>
            </div>
            <Footer />
        </main>
    )
}

export default Formation
