  import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
  import { productsCategorized,getAllCategories } from "../../api/api";
  import { createSelector } from "@reduxjs/toolkit";



  export const fetchProductsCategory = createAsyncThunk(
    'categorizedProducts/fetchByCategory',
    async (category)=>{
      const res = await productsCategorized(category)
      return {category,data: res.data.products}

    },

  );


  export const fetchAllCategories = createAsyncThunk(
    'categoriedProduct',
    async ()=>{
      const res = await getAllCategories()
      return res.data
    }
  )


  const initialState = {
    categories: {}, //product lists by category
    categoryList : [], //all lists in homepage
    categoryStatus: 'idle', //status of fetching categories
    categoryError: null, 
  
  }
  const CategoriesSlice = createSlice({
    name: 'categorizedProducts',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
      builder
      .addCase(fetchProductsCategory.pending, (state,action)=>{
        const category = action.meta.arg //It is the original argument you passed to the thunk when you dispatched it.
        state.categories[category] = {
          items: [],
          status: 'loading',
          error: null,
        }
      

      })
      .addCase(fetchProductsCategory.fulfilled, (state,action)=>{
        const {category,data} = action.payload
        state.categories[category] = {
          items: data,
          status: 'succeeded',
          error: null,
        }
        
      })
      .addCase(fetchProductsCategory.rejected,(state,action)=>{
        const category  = action.meta.arg
        state.categories[category] = {
          items: [],
          status: 'failed',
          error: action.error.message,
        }
    
      })
          .addCase( fetchAllCategories.pending, (state)=>{
          state.categoryStatus = 'loading';
        })
        .addCase(fetchAllCategories.fulfilled, (state,action)=>{
          state.categoryList = action.payload;
          state.categoryStatus = 'succeeded';
        })
        .addCase(fetchAllCategories.rejected, (state,action)=>{
          state.categoryStatus = 'failed';
          state.categoryError = action.error.message;
        })

    }

  });

  // export const selectProductsByCategory = (state,category)=>
  //   state.categorizedProducts.categories[category]?.items || []
 export const selectProductsByCategory = createSelector(
  [(state) => state.categorizedProducts.categories, //input
     (_, category) => category
    ],
  (categories, category) => { //output
    return categories[category]?.items || [];
  }
);



export const selectcategoryStatus = createSelector(
[
  (state)=> state.categorizedProducts.categories,
  (_,category)=> (category)
],
  (categories, category) => {
    return categories[category]?.status || 'idle';
  }
);


  export const selectAllCategories = (state)=>
    state.categorizedProducts.categoryList

  export const selectCategoryStatus = (state)=>
    state.categorizedProducts.categoryStatus



  export default CategoriesSlice.reducer; 