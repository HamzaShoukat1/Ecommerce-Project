import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import Swiper from './components/Swiperbanner/Swiper';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import {Toaster} from 'react-hot-toast'
// import { useLocation } from 'react-router'; //gives you current URL paths
import CursorFollower from './components/Customcursor';
import ScrollToTopButton from './components/Scrolltotop';

export default function App() {

  const status = useSelector((state) => state.products?.status);
  const Status = useSelector((state)=> state.ProductsDetails?.status)




  return (
    <>
    <ScrollToTopButton />
    <CursorFollower />
      <Header />
      {/* {showSwiper && <Swiper />} */}
    
      <Outlet />
      {status && Status === 'succeeded' && <Footer />}
      {/* //toaster for show notifici */}
     <Toaster
  position="top-center"
  toastOptions={{
    duration: 3000,
    style:{
          padding: '1px 1px',
          color: '#333',
    },
    success:{
      iconTheme:{
          primary: '#4caf50',
            secondary: '#fff',
      },
    },

  }}
/>


    </>
  );
}
