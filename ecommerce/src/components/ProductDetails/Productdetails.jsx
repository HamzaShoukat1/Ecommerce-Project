import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { getProductDetails,clearProductDetails } from "../../Store/ProductDetails/ProductDetailsSlice";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Store/CartSlice/CartSlice";
import toast from "react-hot-toast";




const Productdetails = ()=>{


    const [isbouncing, setisbouncing] = useState(true)
    useEffect(() => {
      const timer = setTimeout(()=>{
        setisbouncing(false)



      },3000)
      return ()=> clearTimeout(timer)
     
    }, [])
    

  const {id} = useParams()
  const dispatch = useDispatch()
  const {product, status, error} = useSelector((state)=>  state.ProductDetails)


  useEffect(() => {
    dispatch(getProductDetails(id))
     return ()=>{
    dispatch(clearProductDetails()) // clean up on mount
  }
  }, [dispatch, id])
  
 

  if(status === 'loading') return <p></p>
  if(status === 'failed') return <p className="flex justify-center">Error: {error}</p>

  if(!product) return null;


const handleAddtoCart = ()=>{
  
  
  
  dispatch(addToCart(product)) //product has data
  toast.success('Product added to cart',{
    id:product.id, //avoid duplicate toasts on rapid clicks
    
  })

}

if(status === 'succeeded') return (

  <div className=" min-h-screen">


    <div className="max-w-[2500px] mx-auto  p-0  lg:p-3 flex flex-col lg:flex-row  ipad:flex-col  ">
      
      {/* Left: side */}
      <div className="   ipad:w-full ipad:items-center  ">

       <div className="w-full sticky flex-col text-center top-20  flex justify-center">
         <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full   md:border sm:ml-5   border-gray-200 p-1   object-contain h-[400px]"
        />
        <div className=" mb-4 md:mt-5">
         <button 
          onClick={handleAddtoCart }
          
          className={`cursor-pointer ${isbouncing ? "animate-bounce" : ""}  bg-gradient-to-r bg-red-500 text-white text-center  px-4 py-2 md:px-20 md:py-4 rounded-md transition duration-200 `}
        >
    
          Add to Cart
        </button>
      </div>
       </div>


      </div>
      {/* //--- */}
     
      



      {/* Rightside: Product Info */}
    <div className=" px-10  ipad:w-full ipad:items-center">
  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{product.title}</h1>

    <div className="flex flex-wrap gap-2 mb-3">
      {product.tags.map(tag => (
        <span
          key={tag}
          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold uppercase"
        >
          {tag}
        </span>
      ))}
    </div>

    <p className="text-sm text-gray-500 mb-2 capitalize">
      <span className="font-semibold">Category:</span> {product.category}
    </p>

    <p className="text-sm text-gray-500 mb-2">
      <span className="font-semibold">Brand:</span> {product.brand}
    </p>

    <p className="text-2xl text-green-600 font-semibold mb-4">${product.price.toFixed(2)}</p>

    <p className="text-yellow-600 font-semibold mb-4">
      Rating: {product.rating} <span className="text-xs">⭐</span>
    </p>

    <p className="text-gray-700 mb-4 m   leading-5"> <h1 className="font-bold leading-6">discription</h1><br />{product.description}</p>

    <div className="mb-6">
      <p className="mb-1">
        <span className="font-semibold">Stock:</span> {product.stock} ({product.availabilityStatus})
      </p>
      <p className="mb-1">
        <span className="font-semibold">Discount:</span> {product.discountPercentage}%
      </p>
      <p className="mb-1">
        <span className="font-semibold">Weight:</span> {product.weight}g
      </p>
      <p>
        <span className="font-semibold">Dimensions:</span> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} mm
      </p>
    </div>

    <p className="text-gray-600 mb-4">
      <span className="font-bold">Warranty:</span> {product.warrantyInformation}
    </p>

    <p className="text-gray-600 mb-6">
      <span className="font-bold">Shipping Info:</span> {product.shippingInformation}
    </p>

    <p className="text-gray-600 mb-6">
      <span className="font-bold">Return Policy:</span> {product.returnPolicy}
    </p>

    <p className="text-gray-600 mb-6">
      <span className="font-bold">Minimum Order Quantity:</span> {product.minimumOrderQuantity}
    </p>
  </div>

  <div className="">
    <h3 className="text-xl text-left font-semibold mb-2">Reviews</h3>
    <div className="space-y-3 max-h-60 px-1 rounded-md overflow-scroll">
      {product.reviews.map(({ rating, comment, reviewerName, date }, index) => (
        <div key={index} className="border px-12 text-center w-full h-30 bg-gray-50">
          <p className="font-semibold text-yellow-600">Rating: {rating} ⭐</p>
          <p className="italic mb-2">"{comment}"</p>
          <p className="text-sm text-gray-500">
            - {reviewerName}, {new Date(date).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>



  </div>
);

}

export default Productdetails
