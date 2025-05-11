import { MdArrowOutward as Arrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PiCertificate } from "react-icons/pi";

const Hero = () => {
    return (
        <section className="pt-16 h-screen">
            <h1 className="text-4xl px-4 text-left" style={{ textWrap: "balance" }}>
                Préparez-vous à l’emploi avec notre formation autorisée et accréditée par l’État
                <img src="./accredite.png" alt="Accreditation" className="w-10 inline mx-2" />
                <span className="text-lg block text-neutral-800 mt-2 mb-4">
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
                <div className="flex mt-4 gap-x-2 text-xl pb-4" style={{ fontFamily: "var(--font-serif)", textWrap: "balance" }}>
                    <NavLink to="/inscription">
                        <button
                            id="button-main"
                            title="Rejoignez-nous"
                            className="flex items-center md:text-xl border-2 px-4 py-2 bg-white active:text-red-600 active:scale-110 transition-all duration-200 hover:text-red-600 hover:border-1 hover:px-6 border-blue-600 rounded-full"
                        >
                            S'inscrire
                            <Arrow className="text-xl" />
                        </button>
                    </NavLink>
                    <a href="#formations" className="text-xl">
                        <button
                            id="button-main"
                            title="Formations"
                            className="flex items-center border-2 px-4 py-2 bg-transparent active:text-red-600 active:scale-110 transition-all duration-200 border-blue-600 rounded-full"
                        >
                            formations
                            <PiCertificate className="text-2xl mx-1" />
                        </button>
                    </a>
                </div>
            </h1>
            <img src="./engineering-team.svg" loading='lazy' alt="Engineering Team" className="mt-4" />
        </section>
    );
};

export default Hero;
