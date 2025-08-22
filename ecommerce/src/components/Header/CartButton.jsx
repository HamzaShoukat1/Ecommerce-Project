import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function CartButton({ MdShoppingCart}) {
    const cartCount = useSelector((state) => state.Cart?.totalQuantity || null );


  return (
    <NavLink to="/cart" className="relative">
      <MdShoppingCart className="text-2xl block" /> 
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </NavLink>
  );
}
export default CartButton;