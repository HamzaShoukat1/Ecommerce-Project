import  { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import HeaderLayout from "./HeaderLayout";
import { MdShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { MobileHeader } from "./MobileHeader";
import CartButton from "./CartButton";
import Hamburger from "./Hamburger";
import SearchInput from '../Search/SearchInput'
import { useLocation } from "react-router-dom";



const NAV_LINKS = [
  { path: "/", label: "Home" },
  // { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  // { path: "/contact", label: "Contact" },
];

function Header() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false);
        const closeMenu = () => setMenuOpen(false);
  const cartCount = useSelector((state) => state.Cart?.totalQuantity || 0);
  // const toggleMenu = () => setMenuOpen(!menuOpen)  
  const toggleMenu = () => setMenuOpen((prev)=> !prev);

  return (
    <HeaderLayout>
      <div className="flex items-center h-20 justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <h1>
          <Logo />
        </h1>
       { location.pathname === '/' && <SearchInput />}

        {/* Desktop Nav */}
        <nav className="hidden   md:flex items-center ">
          <ul className="flex  mr-12 space-x-8 text-[20px]   font-bold text-black">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>  
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-gray-400 ${
                      isActive ? "text-black/70" : "text-black"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Cart Icon for Desktop */}
         <div className="flex gap-1 ">
           <CartButton cartCount={cartCount} MdShoppingCart={MdShoppingCart} /> 
          <NavLink to='/cart'>
          <h1 className="cursor-pointer
           text-base">Cart</h1>
          </NavLink>
         </div>
        </nav>

        {/* Cart and hamburger  Button for mobile*/}
       <div className="md:hidden flex items-center space-x-2">


                       
        <Hamburger toggleMenu={toggleMenu} GiHamburgerMenu={GiHamburgerMenu} />
                               </div>
        
       
      </div>




      {/* Mobile Sidebar */}
      <MobileHeader menuOpen={menuOpen}closeMenu={closeMenu} NAV_LINKS={NAV_LINKS} />
      
    </HeaderLayout>
  );
}

export default Header;
