import { FaArrowRight as Arrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { formationsDiplomants } from "@/data";
import ImageLoader from "../utils/Imgloader";
import { motion } from "framer-motion";
const Card = ({ title, imgLink, info, link }) => {

  

return(
    <motion.div
    
    >
    <NavLink
      to={link}
      className="block outline-1 rounded-2xl px-2 py-4 mb-4 backdrop-blur-3xl md:flex md:flex-col md:justify-between md:transition-all
      md:hover:scale-[1.025] duration-300 ease-in-out hover:bg-neutral-300 hover:outline-blue-600 hover:outline-2"

      title="cliquez pour plus d'infos">

      <h2 className="text-xl lg:text-[1.4rem] text-center font-bold"  style={{fontFamily:"var(--font-serif)"}}>{title}</h2>
      {title == "Technicien en Gestion Informatisée" && <br/>}
      <ImageLoader imgSrc={imgLink} title={title}  />
      <p className="lg:text-lg">{info}</p>
      <div  className="flex w-full text-lg mt-4">
        <button className={"cursor-pointer flex outline-0 px-2 border-2 hover:border-black  hover:text-blue-700  py-1 rounded-lg relative left-1/2 -translate-x-1/2 items-center gap-2 transition-all duration-400 ease-in-out active:scale-90"}>
          <span>En savoir plus</span>
          <Arrow className="text-blue-700" />
        </button>
      </div>
    </NavLink>
    </motion.div>
  )
};

const Courses = () => (
  <div id="courses" className="px-4 mt-[1rem]">
    <h1 className="text-3xl border-l-6 py-2 border-blue-600 font-medium rounded-md px-2 mb-4 md:text-5xl">Formations diplômantes</h1>
    <div
      id="card-container"
    >
      {formationsDiplomants.map(({ id, title, text, imgLink, link }) => (
        <Card
          key={id}
          title={title}
          imgLink={imgLink}
          info={text}
          link={`/formations_diplomantes/${link}`}
        />
      ))}
    </div>
  </div>
);

export default Courses;
