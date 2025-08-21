import React from 'react'
import Shippingform from '../Checkout/Shippingform'
import CheckoutSummary from '../Checkout/CheckoutSummary'
function Checkoutpage() {
  return (
    <div className='bg-gray-50 flex justify-around flex-col md:flex-row border-gray-300 border-y-3 border-b border-x-3 p-6   gap-20 lg:gap-40 '>
      <div className='' >
          <h1 className='lg:mt-6 font-bold text-2xl '>Checkout</h1>
        <h2 className='mt-6 font-semibold'>Shipping Information</h2>
        <Shippingform />
      </div>
      

      <div className='md:w-1/3'>
        <CheckoutSummary />
      </div>


    </div>
  )
}

export default Checkoutpage
