import { NavLink, useLocation } from 'react-router-dom';

const BreadCrumb = ({ links, styles }) => {
    const {pathname } = useLocation()
    return (
        <div className={` px-4 ${styles}`} >
            {links.map((link, index) => (
                <span key={index}>
                    <NavLink viewTransition  
                    className={(index == links.length -1 ? "text-blue-600 " : 'text-neutral-600') + "capitalize text-lg "} to={index === links.length - 1 ? "" : link.path } 
                    >
                        {link.label}</NavLink>
                    {index < links.length - 1 && <span className='font-black text-lg'> / </span>}
                </span>

            ))}
        </div>
    );
};

export default BreadCrumb;
