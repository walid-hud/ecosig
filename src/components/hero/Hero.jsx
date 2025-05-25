import { MdArrowOutward as Arrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PiCertificate } from "react-icons/pi";
import ImageLoader from "../utils/Imgloader";
import Button from "../utils/Button";

const Hero = () => {
    return (
        <section id="hero-section" className="pt-16 ">
            <h1 className="text-4xl px-4" style={{ textWrap:"balance"}}>
                <p className=" lg:text-6xl">Préparez-vous à l’emploi avec notre formation autorisée et accréditée par l’État
                    <img src="./accredite.png" alt="Accreditation" className="w-10 md:w-12 inline mx-2" />
                </p>
                <span className="text-lg block text-neutral-800 mt-2 mb-4 md:text-2xl lg:text-3xl">
                    Nous formons des stagiaires qualifiés en{" "}
                    <NavLink to="/formations_diplomantes" className="text-blue-700 text-shadow-sm">
                        TIC
                    </NavLink>
                    ,{" "}
                    <NavLink to="/formations_diplomantes" className="text-blue-700 text-shadow-sm">
                        gestion et management
                    </NavLink>
                    , pour en faire des acteurs dynamiques de l’économie.
                </span>
                <div className="flex mt-4 gap-x-2 text-xl pb-2 md:**:text-2xl lg:**:text-3xl md:gap-x-6   " style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}>
                    <NavLink to="/inscription" className={"*:bg-blue-600"}>
                        <Button  text={"S'inscrire"}  icon={<Arrow className="text-2xl" />}>
                        </Button>
                    </NavLink>

                    <NavLink to="/formations_diplomantes" className="text-xl">
                        <Button bg={"neutral"} text={"Formations"}  icon={<PiCertificate className="text-2xl mx-1" />}/>
                    </NavLink>
                </div>
            </h1>
            <ImageLoader styleClasses={"md:scale-110"} imgSrc={"/pair-programming.svg"} title={"pair programming"} />
            
        </section>
    );
};

export default Hero;
