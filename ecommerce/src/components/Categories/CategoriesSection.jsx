import { useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from "react-redux";
import ProductCard from '../Categories/ProductCard';
import { PrevArrow, NextArrow } from "./CustomArrays";
import {
  fetchProductsCategory,
  selectProductsByCategory,
  selectcategoryStatus,
} from '../../Store/categories/CategoriesSlice';
import HomeProductSkeleton from '../HomeProductSkeleton';

const CategoriesSection = ({ category, title }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) =>
    selectProductsByCategory(state,category)
  );
  const status = useSelector((state) =>
    selectcategoryStatus(state, category)
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsCategory(category));
    }
  }, [dispatch, category, status]);

   if (status === "failed") {
    return <p className="text-red-500  text-2xl text-center flex justify-center items-center px-4">Failed to load</p>;
  }
  const settings = {  
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

 
  return (
    <section className="mt-2 px-4 overflow-x-hidden pb-2 bg-white">
        <h2 className="text-2xl font-semibold font-sans p-2 mb-4">{title }</h2>

      {status === 'loading' ? (
        <div className="space-y-4">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="px-2">
        <HomeProductSkeleton />
      </div>
    ))}
  </div>
        </div>
      ) : (
        <>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </>
      )}
    </section>
  );

  
};

export default CategoriesSection;
