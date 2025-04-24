import {motion} from 'motion/react'
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
    } = formationsDiplomants.find((formation) => formation.link === course) || {};
    const BreadCrumblinks = [{ path: '/', label: 'accuil' }, { path: '/formations_diplomantes', label: 'formations diplomantes' }, { path: `./${course}`, label: course }]
    return (
        <main className="h-screen mt-[4rem]">
            <BreadCrumb links={BreadCrumblinks} />
            <div className=" mt-4 flex flex-col px-4">
                <h1 className="border-l-6  rounded-md  border-blue-600 text-3xl px-2 font-medium " style={{ fontFamily: "var(--font-serif)" }}>{title}</h1>
                <img src={imgLink} alt={`${imgLink}`}
                    className="py-4 "
                />
                <div className="">
                    <p className="text-xl text-gray-900" >{text}</p>
                    <p className="flex items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1 "><PiListChecksDuotone className="text-2xl" />Condition D'admission :</p>
                    <p className="">{prerequisite}</p>
                    <p className="flex items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1 "><PiCertificate className="text-2xl" />Profile:</p>
                    <p className="">{profile}</p>
                    <p className="flex items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1 "><PiTimer className="text-xl" />Durée : {duration}</p>
                </div>
                <h1 className="flex sticky top-[0rem]  items-center text-xl mt-4 mb-2 gap-2 border-l-4 border-red-600 rounded-sm px-1">Unités :</h1>
                <div className="sticky top-[5rem] flex flex-col gap-y-2  rounded-md  outline-1 px-2 py-4  ">
                    {unites.map((unit, index) => {
                        return <motion.p 
                        key={index} className={`text-shadow-md py-1 unit_text`  }>- {unit}</motion.p>
                    })}
                </div>
            </div>
            <div
            className="px-4 flex flex-col **:flex **:items-center **:justify-center **:gap-2 *:text-xl  py-4 gap-y-4 *:rounded-md *:py-2
            *:transition-all
            *:duration-300 
            *:ease-in-out
            
            ">
                <NavLink className="bg-blue-600 border-1 active:text-red-600 active-scale-110   text-black backdrop-contrast-125" to={`/inscription/${link}`}>
                    {/* translate later  */}
                    <button>S'inscrit en ce formation <Arrow/></button>
                </NavLink>

                <NavLink to={"/formations_diplomantes"} className="outline-1 active:scale-110 active:invert-50">
                    <button>vior autre formations <MdTurnLeft/></button>
                </NavLink>
            </div>
            <Footer />
        </main>
    )
}

export default Formation
