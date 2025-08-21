import React ,{useEffect}from 'react'

import MySwiper from '../components/Swiperbanner/Swiper'
import CategoriesSection from '../components/Categories/CategoriesSection'
// import { getAllProducts, selectProducts } from '../Store/Products/ProductSlice'
import { useDispatch,useSelector } from 'react-redux'
import HomeProductSkeleton from '../components/HomeProductSkeleton'
import BannerSkeleton from '../BannerSkeleton'
// import { DelayedSection } from '../components/Categories/DelaySection'
import {fetchAllCategories,selectCategoryStatus,selectAllCategories} from '../Store/categories/CategoriesSlice'
import LazyLoader from '../components/Categories/LazyLoading'
import Searchresult from '../components/Search/Searchresult'

 function Home() {
  const { query } = useSelector((state) => state.search);

  const dispatch= useDispatch();
  const categories = useSelector(selectAllCategories)
  const status = useSelector(selectCategoryStatus)
  useEffect(() => {
   if(status === 'idle'){
    dispatch(fetchAllCategories())
   }
  }, [status, dispatch]);

  if (status === 'failed') return <p>Failed to load categories</p>;

 return (

    <div className={query ?'bg-white' : "bg-[#F1F2F4]"}>
    {query ? (
        <div className="px-4 py-4">
          <Searchresult />
        </div>
      ) : (
        <>
          <MySwiper />
          {categories.map((categoryObj, ref) => (
            <LazyLoader key={ref}>
              <CategoriesSection
                key={categoryObj.slug}
                category={categoryObj.slug}
                title={categoryObj.name}
              />
            </LazyLoader>
          ))}
        </>
      )}
  </div>

 )

}



export default Home















  










//  <div className="px-15 py-3  ">
//   //       <BannerSkeleton />
//   //       <div className="  ">  

//   //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 ">
         
//   //     {Array.from({length: 20}).map((_,i)=>{ 
//          return <HomeProductSkeleton key={i} />
//       })}
//       </div>
//       </div>
//       </div>