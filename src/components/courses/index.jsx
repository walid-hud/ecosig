import { FaArrowRight as Arrow } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { formationsDiplomants } from "@/data";
import ImageLoader from "../utils/Imgloader";
import React, { useRef } from "react";
const Card = ({ title, imgLink, info, link }) => {
  // 
  // code for 3d hover tilt effect , still don't know if I should use it.
  // 
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    // const card = cardRef.current;
    // const rect = card.getBoundingClientRect();
    // const x = e.clientX - rect.left; // x position within the element.
    // const y = e.clientY - rect.top;  // y position within the element.
    // const centerX = rect.width / 2;
    // const centerY = rect.height / 2;
    // const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    // const rotateY = ((x - centerX) / centerX) * 10;
    // card.style.transform = `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1)`;
  };

  const handleMouseLeave = () => {
    // const card = cardRef.current;
    // card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return(
    <NavLink
      to={link}
      ref={cardRef}
      className="block border-1 rounded-2xl px-2 py-4 mb-4 min-h-[50px] origin-top backdrop-blur-3xl md:flex md:flex-col md:justify-between md:transition-all md:hover:scale-105 duration-600 ease-in-out hover:bg-gradient-to-br  hover:from-transparent hover:to-neutral-500 hover:bg-neutral-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl lg:text-2xl font-bold font-serif">{title}</h2>
      <ImageLoader imgSrc={imgLink} title={title}  />
      <p className="lg:text-lg">{info}</p>
      <div  className="flex w-full text-lg">
        <button className="cursor-pointer flex outline-0 px-2 border-2 hover:border-black  hover:text-blue-700  py-1 mt-2 rounded-lg relative left-1/2 -translate-x-1/2 items-center gap-2 transition-all duration-400 ease-in-out active:scale-90">
          <span>En savoir plus</span>
          <Arrow className="text-blue-700" />
        </button>
      </div>
    </NavLink>
  )
};

const Courses = () => (
  <div id="courses" className="px-4 mt-[4rem]  scroll-mt-[5rem]">
    <h1 className="text-3xl border-l-6 py-2 border-blue-600 font-medium rounded-md px-2 mb-4 md:text-5xl">Formations diplômantes</h1>
    <div id="card-container">
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
