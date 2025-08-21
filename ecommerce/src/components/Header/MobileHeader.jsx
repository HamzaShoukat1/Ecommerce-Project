import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

 export function MobileHeader({menuOpen,closeMenu,NAV_LINKS}){
   

  
  return (
    <div
        className={` bg-gradient-to-r from-gray-200 to-gray-400 fixed top-0 right-30 h-full w-full  text-white z-50 transform  duration-600 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b  border-gray-700">
          <h2 className="text-base  text-center ml-30 font-bold ">Menu</h2>
          <button onClick={closeMenu} aria-label="Close sidebar">
            <RxCross2 className="w-6 h-6 text-white" />
          </button>
        </div>

        <ul className="flex flex-col text-center mr-8 space-y-9 p-4 text-xl    ">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

  )

 }
