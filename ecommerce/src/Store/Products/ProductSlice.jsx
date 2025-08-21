import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import { Data } from "../../Data/Data"
import { getProducts } from "../../api/api"


const initialState = { //tracking things....
   items:[],
  status: 'idle',
  error:null
}


export const getAllProducts = createAsyncThunk(
  '/products',
  async ()=>{
    //for shimmer loader delay
    await new Promise((resolve)=> setTimeout(resolve,400))
    const res = await getProducts()
    return res.data.products
   
  }

  

)


 const ProductSlice = createSlice({
  name:'products',
  initialState,
  reducers:{},
  extraReducers: (builder)=>{
    builder
    //fetch all products
    .addCase(getAllProducts.pending, (state)=>{
      state.status = 'loading';
    })
    .addCase(getAllProducts.fulfilled,(state,action)=>{
      state.status = 'succeeded';
      state.items = action.payload;
    })
    .addCase(getAllProducts.rejected,(state, action)=>{
      state.status = 'failed';
      state.error = action.error.message
    })
  }

});




export default ProductSlice.reducer
