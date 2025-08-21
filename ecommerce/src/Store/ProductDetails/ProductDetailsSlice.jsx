import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsDetails } from "../../api/api";


const initialState = {
  product: null,
  status: 'idle',
  error: null
}

export const getProductDetails = createAsyncThunk(
  'ProductsDetails',
  async (id)=>{
    try {
   const res = await ProductsDetails(id);
   return res.data;
      
    } catch (error) { 
      throw new Error 
      
    }

 
  }
);


const ProductDetailsSlice = createSlice({
  name: 'ProductDetails',
  initialState,
  reducers:{
    clearProductDetails: (state)=>{
      state.product = null;
      state.status = 'idle';
      state.error = null;

    },
  },

  extraReducers: (builder)=>{
    builder
    .addCase(getProductDetails.pending, (state)=>{
      state.status = 'loading';
    })
    .addCase(getProductDetails.fulfilled, (state, action)=>{
      state.status = 'succeeded';
      state.product = action.payload;
    })
    .addCase(getProductDetails.rejected, (state, action)=>{
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})
export const {clearProductDetails} = ProductDetailsSlice.actions;
export default ProductDetailsSlice.reducer
