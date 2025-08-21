import { useSelector } from 'react-redux';
import Productcard from "../Categories/ProductCard";
import { FaSearch } from "react-icons/fa";




const Searchresult = () => {

  const { query, results, status, error } = useSelector((state) => state.search);
  if(!query) return null;

  if(status === 'loading') return <p className="text-xl">loading search result...</p>
  if(status === 'failed') return <p className="text-red-600">{error}</p>
  if(status === 'succeeded' && results.length === 0)
    return <div className="flex items-center justify-center h-[70vh] text-center ">

      <FaSearch className="text-5xl mb-8" /> <p className=" text-5xl font-bold "> 
     No products found for 
      <br className="" />
      "{query}"</p>
   </div>
    return(
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((product)=>(
          <li key={product.id}>
            <Productcard product={product} />

          </li>
        ))}

      </ul>
    )
   
  

      
};

export default Searchresult;

