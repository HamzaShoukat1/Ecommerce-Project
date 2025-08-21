import { NavLink } from "react-router";
function CartButton({ cartCount ,MdShoppingCart}) {
  return (
    <NavLink to="/cart" className="relative">
      <MdShoppingCart className="text-2xl block" /> 
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </NavLink>
  );
}
export default CartButton;