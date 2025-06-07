import { IoMdReturnLeft } from 'react-icons/io';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center  text-neutral-800 px-4">
            <img
                src="./not-found.svg"
                alt="404 Non Trouvé"
                className="md:aspect-video md:w-[50%]"
            />
            <p className="text-lg sm:text-xl mt-4 text-center md:text-2xl">Page non trouvée</p>
            <NavLink
                to="/"
                className=" active:scale-90 mt-6 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-full flex justify-baseline  font-medium  shadow-md text-xl hover:bg-blue-700  group transition-all duration-300 ease-out"
            >
                Accueil
                <IoMdReturnLeft
                    className="text-xl mx-2 mt-1 group-hover:block group-hover:translate-x-2 transition-transform duration-300"
                />
            </NavLink>
        </div>
    );
};

export default PageNotFound;
