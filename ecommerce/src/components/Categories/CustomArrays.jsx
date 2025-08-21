// src/components/CustomArrows.jsx
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
      onClick={onClick}
    >
      <FaChevronLeft size={10} />
    </div>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <div
      className=" right-2 absolute  top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
      onClick={onClick}
    >
      <FaChevronRight size={10} />
    </div>
  );
};



