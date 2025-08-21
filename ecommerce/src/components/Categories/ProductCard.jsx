import React from 'react'
import { Link } from 'react-router-dom'
import { getStars } from '../../Data/Utils.stars'
const  Productcard = ({product})=>{

  
return (
  <Link to={`/product/${product.id}`} className='cursor-pointer'>
  <div className=' p-2 bg-white '>
    <img src={product.thumbnail} alt={product.title}  className='h-60 md:h-45 w-full mx-auto object-contain hover:scale-105' />
    <h3 className='text-sm  font-semibold mt-2 truncate'>{product.title.slice(0,30) + '...'}</h3>
    <p className='text-lg font-bold text-green-600'>${product.price}</p>
    <p className='text-xs  font-bold'>{product.rating} {getStars(product.rating)}</p>
  </div>
  </Link>

)
}
export default Productcard