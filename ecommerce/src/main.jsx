import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Errorpage from './Pages/Errorpage.jsx'
import Home from './Pages/Home.jsx'
import {Provider} from 'react-redux'
import store from './Store/Store.js'
import ProductsDetails from './Pages/ProductsDetails.jsx'
import AllProducts from './Pages/AllProducts.jsx'
import CartDetail from './Pages/CartDetail.jsx'
import CheckoutPage from './Pages/Checkoutpage.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}
    errorElement={<Errorpage />}
    >

    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='products' element={<AllProducts />} />
    <Route path='contact' element={<Contact />} />
    <Route path='/product/:id' element={<ProductsDetails />} />
    <Route path='cart' element={<CartDetail />} />
    <Route path='/checkout' element={<CheckoutPage />} />


    </Route>
  )

)



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
