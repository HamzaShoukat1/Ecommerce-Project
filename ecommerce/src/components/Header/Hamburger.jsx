function Hamburger({ toggleMenu,GiHamburgerMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden  "
    >
      <GiHamburgerMenu className="text-2xl text-black" />
    </button>
  );
}
export default Hamburger;