import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProducts } from '../../Store/Products/ProductSlice'
import { Link } from 'react-router-dom'
import { getStars } from '../../Data/Utils.stars'
import ProductSkeleton from '../HomeProductSkeleton'

const ProductsList = ()=>{
  
   const dispatch = useDispatch();
   const {items, status, error} = useSelector((state)=> state.products)


  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  if(status === 'loading') 
  return  <>
 
     <div className="px-10  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({length:20}).map((i)=>(
        <ProductSkeleton key={i} />
      ))}
        </div>
      </div>
        </>

  if(status === 'failed')
     return <p className='flex justify-center mt-40 font-semibold items-center text-3xl'>Error: {error}</p>

  

  if(status === 'succeeded')
     return (
    <div className='product-list bg-[#F1F2F4] cursor-pointer  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-3 p-10'>
      {items.map((product)=>(
        <Link to={`/product/${product.id}`} key={product.id}>

        <div className='product-card  border bg-white border-gray-300 rounded-md  h-80   hover:scale-105 transition-all ease-in-out duration-200' key={product.id}>
          <h3 className='text-base p-2 font-semibold mb-2 line-clamp-1'>{product.title} </h3>
          <img className='w-[300px] h-53' src={product.thumbnail} width={100} />
          <p className='font-semibold pl-2  text-base'>${product.price.toFixed()}</p>
          <p className='font-semibold pl-2 space-y-3 text-sm'>{product.rating} {getStars(product.rating)} </p>

        </div>
        </Link>
      ))}

    </div>

  )
  
}
export default ProductsList;