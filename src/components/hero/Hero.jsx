import { MdArrowOutward as Arrow } from "react-icons/md";
import { NavLink } from "react-router-dom"
import { PiCertificate } from "react-icons/pi";

const Hero = () => {
    return (<>
        <section className='pt-[4rem]'>
            <h1 className="text-4xl px-4  text-left ">
                Préparez-vous à l’emploi avec notre formation autorisée et accréditée par l’État
                <img src="./accredite.png" className="w-10 inline mx-2" />

                <span className="text-lg block text-neutral-800q mt-2 mb-4">Nous formons des stagiaires qualifiés en
                    <NavLink viewTransition to={"/formations_diplomantes"} className="text-blue-700 text-shadow-sm "> TIC</NavLink>,
                    <NavLink viewTransition to={"/formations_diplomantes"} className="text-blue-700 text-shadow-sm "> gestion et management </NavLink>
                    ,pour en faire des acteurs dynamiques de l’économie.
                </span>
                <div className="flex  my-2 gap-x-2 *:text-xl " style={{ fontFamily: "var(--font-serif)" }}>
                    <NavLink viewTransition to={'/inscription'} >
                        <button id="button-main" title="Rejoignez-nous"
                            className={`flex items-center  md:text-xl border-2 min-sm:px-4 max-sm:px-6  py-2  bg-white active:text-red-600 active:scale-110 
                        transition-all duration-200
                        hover:text-red-600 hover:border-1 hover:px-6
                        border-blue-600 rounded-full`}>
                            S'inscrire
                            <Arrow className="text-xl" />
                        </button>
                    </NavLink>
                    <a href='#formations' className="text-xl" >
                        <button id="button-main" title="Rejoignez-nous"
                            className={`flex items-center md:text-xl border-2 min-sm:px-4 max-sm:px-2   py-2  bg-transparent active:text-red-600 active:scale-110 
                        transition-all duration-200
                        hover:text-red-600 hover:border-1 hover:px-6 
                        border-blue-600 rounded-full`}>
                            formations
                            <PiCertificate className="text-2xl mx-1" />
                        </button>
                    </a>
                </div>
            </h1>
            <img src="./engineering-team.svg" className=" " />
        </section>
    </>)
}

export default Hero
