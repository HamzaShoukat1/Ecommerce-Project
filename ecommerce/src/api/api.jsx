
import axios from 'axios'



const api = axios.create({
  baseURL: 'https://dummyjson.com'

})

//http get method
export const getProducts = (limit = 190, skip = 0)=>{
  return api.get('/products',{
    params: {limit,skip}
    
  })
}

export const  ProductsDetails = (id)=>{
  return api.get(`/products/${id}`);
}

export const productsCategorized = (category)=>{
  return api.get(`/products/category/${encodeURIComponent(category)}`);
}
export const getAllCategories = ()=>{
  return api.get('/products/categories');
}
export const searchProducts =   async (query) => {
  const res =  await api.get(`/products/search?q=${query}`);
  return  res.data.products
  
}

//This function safely encodes a string for use in a URL. It ensures that special characters (like spaces, &, #, /, ?, etc.) don't break the URL or change its meaning.(encodeURIComponent) 

