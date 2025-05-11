import { motion, AnimatePresence } from "motion/react";
import { MdAlternateEmail, MdHome } from "react-icons/md";
import { PiCertificate, PiInfo, PiPuzzlePiece } from 'react-icons/pi';
import { MdArrowOutward as Arrow } from "react-icons/md";
import { MdMenu as MenuIcon } from "react-icons/md";
import { MdClose as CloseIcon } from "react-icons/md";
import { ButtonMain } from "../buttons/Buttons"
import Logo from "../Logo"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 25){
        navbar.classList.add("backdrop-blur-md", 'border-b-2', 'border-black'); ;
      } else {
        navbar.classList.remove("backdrop-blur-md", 'border-b-2', 'border-black');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add a click event listener to close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sideBar = document.getElementById("side-bar");
      if (sideBar && !sideBar.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      <nav id="navbar" className="flex justify-between fixed top-0 z-[9999] w-screen items-center px-4 md:flex transition-all duration-300 ease-in-out  "
      >
        <Logo />
        <div className="hidden md:flex gap-12 font-['var(--font-serif)'] text-xl  *:hover:text-red-500">
          <NavLink viewTransition  id="nav-link" to="/">
            <h1 className="smooth-underline" id="first">Accueil</h1>
          </NavLink>
          <a id="nav-link" href="/formations_diplomantes">
            <h1 className="smooth-underline">Formations</h1>
          </a>
          <NavLink viewTransition  id="nav-link" to="/activites">
            <h1 className="smooth-underline">Activités</h1>
          </NavLink>
          <NavLink viewTransition  id="nav-link" >
            <h1 className="smooth-underline">À propos</h1>
          </NavLink>
          <a id="nav-link" href="#contact">
            <h1 className="smooth-underline">Contact</h1>
          </a>
        </div>
        <NavLink viewTransition  to={"inscription"}>  
        <ButtonMain text={"S'inscrire"} icon={<Arrow className="ml-1 -mr-1" />} />
        </NavLink>
        {!isOpen ? <MenuIcon
          className=" z-50 text-4xl w-fit md:hidden"
          onClick={() => handleToggle()}
        /> :
          <CloseIcon
            className="text-4xl  md:hidden"
            onClick={() => handleToggle()}
          />}
      </nav>
      <AnimatePresence>
        {isOpen &&
          <motion.div id="side-bar" className={`md:hidden fixed top-0 left-1/2 mt-[5rem] h-fit bg-gradient-to-t from-transparent via-transparent  to-gray-600 to-[200%]  backdrop-blur-[20px] rounded-lg border-2 z-50 `}
            initial={{
              opacity: 0, scale: 0.75, translateX: "-50%", width: "calc(100vw - 2rem)"
            }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="flex flex-col  *:py-4 px-2 font-['var(--font-serif)'] text-xl *:flex *:gap-2 ">
              <NavLink viewTransition  id="nav-link" to="/" 
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
                onClick={()=>handleToggle()}
              >
                <MdHome className="text-2xl mt-[2px]" />
                <h1 id="first">Accueil</h1>
              </NavLink>
              <NavLink viewTransition  onClick={()=>handleToggle()} id="nav-link" to="/formations_diplomantes"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
              
              >
                <PiCertificate className="text-2xl mt-[2px]" />
                <h1 >Formations</h1>
              </NavLink>

              <NavLink viewTransition  id="nav-link" to="/activites" onClick={()=>handleToggle()}
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}>
                <PiPuzzlePiece className="text-2xl" />
                <h1 >Activités</h1>
              </NavLink>
              <NavLink viewTransition to="/about"  id="nav-link"  onClick={()=>handleToggle()}>
                <PiInfo className="text-2xl mt-[2px]" />
                <h1 >À propos</h1>
              </NavLink>
              <a id="nav-link" href="#contact" onClick={()=>handleToggle()}>
                <MdAlternateEmail className="text-2xl mt-[2px]" />
                <h1>Contact</h1>
              </a>
            </div>

          </motion.div>}
      </AnimatePresence>
    </>
  );
}

export default NavBar
