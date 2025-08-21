// ScrollToTopButton.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // icon for up arrow

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      {window.scrollY > 300 ? setVisible(true) : setVisible(false)}
    };
  window.addEventListener("scroll",toggleVisibility)
  return ()=> window.removeEventListener("scroll",toggleVisibility)},[visible,setVisible])

  const scrollToTop = () => {
    window.scrollTo({top:0,behavior:"smooth"})
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-3 right-2 z-50 cursor-pointer bg-red-400 hover:bg-red-600 text-white p-4 rounded-full  transition duration-300"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
