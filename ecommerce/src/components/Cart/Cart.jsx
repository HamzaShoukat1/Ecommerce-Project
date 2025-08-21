import React, { use } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus,FaMinus } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart,increaseQ,decreaseQ,clearCart } from "../../Store/CartSlice/CartSlice";

const Cart = ()=>{
  const dispatch = useDispatch()
  const {cartItems,totalAmount,totalQuantity } = useSelector((state)=> state.Cart)
  

  //empty cart condition
if(cartItems.length === 0) {
  return (
    <div className="min-h-screen flex flex-col font-mono items-center justify-center text-3xl font-semibold">
      <span>Your cart is empty </span>
    <Link to='/'>
      <button className="mt-4 px-2 py-2  text-base  cursor-pointer   text-black rounded ">
        Shop Now
      </button>
    </Link>
    </div>
  )
}





return(
  <div className="min-h-screen bg-[#F1F2F4] p-6 ">

    <div className="max-w-6xl mx-auto bg-white p-8 ">
      <h2 className="text-3xl font-bold mb-6   ">Shopping Cart</h2>
      {/* {Cart item list} */}
      {cartItems.map((item)=>(
        <div 
        key={item.id}
        className="flex items-center px-3 justify-between border-x-1 border border-y-1 py-4"
        >
          <div className="flex items-center space-x-1">
            <img 
            className="w-13 md:w-20 h-13 md:h-24 object-contain"
            src={item.thumbnail} alt={item.title} aria-label="product img" />
            <div className="">
               <h3 className="   text-sm leading-tight md:text-lg font-semibold">{item.title.slice() + '...'}</h3>
          <p className="text-gray-600">${item.price}</p>
            </div>
            </div>

      {/* //  { quantity control} */}
      <div className="md:flex text-center items-center space-x-8  md:space-x-4  ">
        <button
        className="     bg-gray-200 p-2 rounded-full  cursor-pointer"
        onClick={()=> dispatch(decreaseQ( item.id))}
        >
       <MdDelete className=" w-4 h-4"  />
        </button>
        <span className=" max-w-6  text-base ">{item.quantity}</span>


        <button
        disabled={item.quantity >=10}
        onClick={()=> dispatch(increaseQ(item.id))}
          className="  mr-8 md:mr-0 bg-gray-200 p-2 rounded-full cursor-pointer "
        >
       <FaPlus className="w-4 h-4 " />

        </button>
      </div>


      {/* {remove button}  */}

      <div className="text-right">
        <p className="font-semibold">
          ${Number(item.price * item.quantity).toFixed()}
        </p>

       <button
  onClick={() => {
    dispatch(removeFromCart(item.id));
    toast.success('successfully removed',{
    id:item.id, //avoid duplicate toasts on rapid clicks
    duration:2000, 
  })
  }}
  className="text-red-500 cursor-pointer text-xl"
>
  <MdDelete />
</button>
      </div>
        </div>
      ))}

      

      
  {/* // {Summary section}  */}

  <div className="mt-8 flex justify-between items-center text-center">
      <div>
        <button 
        className="text-red-600 hover:underline mt-12 text-lg font-light  cursor-pointer"
        onClick={()=> dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
      {/* /---------------------  */}
      <div className="text-right">
        <p className="text-lg">
          Total Items: <span className="font-bold">{totalQuantity}</span>
        </p>
        <p className="text-xl font-bold">
          Total: ${Number(totalAmount).toFixed()}
        </p>
       <Link to={'/checkout'}>
         <button
          className=" rounded-full mt-2 transition-All ease-in-out duration-200 bg-red-600 text-white px-2 md:px-4 py-2 cursor-pointer  hover:bg-red-700">
              Checkout
            </button>
       </Link>
      </div>
  </div>

    </div>

  </div>

  
)




}


export default Cart