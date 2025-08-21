import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay } from 'swiper/modules'
import images1 from './BannerImges/banner.png'




export default function MySwiper() {
  return (
   <Swiper
   modules={[Autoplay ]}
   spaceBetween={0}
   slidesPerView={1}
   autoplay={{delay:5000}}
   loop={true}
   className="transition-All duration-1000 ease-in-out h-auto "
    >
      
      <SwiperSlide>
           <img
      src={images1}
      alt="banner-1"
      
      className="w-full h-60  "
    />
      </SwiperSlide>
      <SwiperSlide>
    <img
      src={images1}
      alt="banner-1"
      className="w-full  h-60 "
    />
      </SwiperSlide>
      

     

      
    </Swiper>

   
  )
}

