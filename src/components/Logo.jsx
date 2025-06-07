import { NavLink } from 'react-router-dom';
import {FaPowerOff} from 'react-icons/fa';
const Logo = ({styles}) => {
    return (
        <NavLink   to="./">
        <div id="logo" className={`flex  items-center text-[2.5rem] font-bold ${styles}`}>
            <span className=" ">
                EC
            </span>
            <FaPowerOff 
                className="text-[2.1rem] mb-1 text-blue-600 spin-flicker  hover:text-red-600 transition-all duration-500 ease-in-out" 
            />
            <span className="  ">SIG</span>
        </div>
        </NavLink>
    )
}

export default Logo
