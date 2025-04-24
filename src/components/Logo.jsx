import { NavLink } from 'react-router-dom';
import {FaPowerOff} from 'react-icons/fa';
const Logo = () => {
    return (
        <NavLink viewTransition  to="/">
        <div id="logo" className="  flex  items-center text-[2.5rem]  font-['var(--font-sans)] font-bold">
            <span className=" ">
                EC
            </span>
            <FaPowerOff 
                className="text-[2.2rem] mb-1 text-blue-600 spin-flicker  hover:text-red-600 transition-all duration-500 ease-in-out" 
            />
            <span className="  ">SIG</span>
            <img src="./accredite.png" alt="" className="w-6 " />
        </div>
        </NavLink>
    )
}

export default Logo
