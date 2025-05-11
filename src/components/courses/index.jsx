import { FaArrowRight as Arrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { formationsDiplomants } from "@/data";

const Card = ({ title, imgLink, info, link }) => (
  <div className="border-1 rounded-2xl px-2 py-4 mb-4 min-h-[50px] origin-top backdrop-blur-3xl">
    <h2 className="text-xl font-bold font-serif">{title}</h2>
    <img src={imgLink} alt={title} className="my-4 aspect-video" />
    <p>{info}</p>
    <NavLink to={link} className="flex w-full text-lg">
      <button className="flex outline-1 px-2 py-1 mt-2 rounded-lg relative left-1/2 -translate-x-1/2 items-center gap-2 transition-all duration-400 ease-in-out active:scale-80">
        <span>En savoir plus</span>
        <Arrow className="text-blue-700" />
      </button>
    </NavLink>
  </div>
);

const Courses = () => (
  <div id="formations" className="px-4 mt-[2rem] scroll-mt-[5rem]">
    <h1 className="text-2xl md:text-3xl text-left">Formations diplômantes</h1>
    <hr className="text-transparent mt-1 mb-4 bg-blue-500 h-1 rounded-2xl" />
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
);

export default Courses;
