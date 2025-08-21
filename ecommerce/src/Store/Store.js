import {configureStore} from '@reduxjs/toolkit'
import ProductReducer from '../Store/Products/ProductSlice'
import productDetailsSliceReducer from '../Store/ProductDetails/ProductDetailsSlice'
import CartReducer from '../Store/CartSlice/CartSlice'
import CategorizedReducer from '../Store/categories/CategoriesSlice'
import { loadState,saveState } from '../localStorage'
import Searchreducer from '../Store/Searchslice/SearchSlice'


const persistedCartState = loadState()

const store = configureStore({
  reducer:{
    products: ProductReducer,
    ProductDetails: productDetailsSliceReducer,
    Cart: CartReducer,
    categorizedProducts: CategorizedReducer,
    search: Searchreducer
    // categories: CategoriesReducer
  },
  preloadedState:{
    Cart: persistedCartState,
  }

});

store.subscribe(()=>{
  saveState(store.getState().Cart)  

});

export default store

