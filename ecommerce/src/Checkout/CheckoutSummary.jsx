import { useSelector } from 'react-redux';

const CheckoutSummary = () => {
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const totalAmount = useSelector((state) => state.Cart.totalAmount);
  const totalQuantity = useSelector((state) => state.Cart.totalQuantity);

  const shippingCost = 5.99;
  const discount = -7.99
  const TotalAmount = totalAmount + shippingCost + totalQuantity 
  const finalPrice = TotalAmount + discount

  return (
    <div className="w-full  bg-gray-100  p-9 border-x-1 border-y-1 border-gray-400 space-y-6">
      <h2 className="text-xl font-bold  pb-2"> Review Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4  pb-2">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-18 h-18  border cursor-pointer border-gray-300  object-cover rounded-md"
            />
            <div className="flex-1">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-600">
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
          </div>  
        ))}
      </div>

      <div className=" pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className='text-gray-400'>Subtotal</span>
          <span className=''>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className='text-gray-400'>Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-400'>Discount</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg  pt-2">
          <span>Final Amount</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-blue-400 cursor-pointer hover:bg-blue-500 text-white py-2 rounded-md transition duration-200">
        Proceed to Pay
      </button>
    </div>
  );
};

export default CheckoutSummary;
