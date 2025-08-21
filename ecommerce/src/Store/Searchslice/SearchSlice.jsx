import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { searchProducts } from '../../api/api'


export const fetchSearchProducts =  createAsyncThunk(
  'products/fetchSearch',
  async (query,thunkApi)=>{
    try {
      const products = await searchProducts(query)
      return products
      
    } catch (error) {
      return thunkApi.rejectWithValue(error?.message || 'search failed');
      
    }
  }
);

const initialState = {
  query: '',
  results:[],
  status:'idle',
  error:null
}
const SearchSlice = createSlice({
  name:'search',
  initialState,
  reducers:{
    setQuery: (state,action)=>{
      state.query = action.payload
    },
    clearResults: (state)=>{
      state.query = ''
      state.results =[]
      state.error = null
    },
  },

  extraReducers: (builder)=>{
    builder
    .addCase(fetchSearchProducts.pending, (state)=>{
      state.status = 'loading'
      state.error = null

    })
    .addCase(fetchSearchProducts.fulfilled, (state,action)=>{
      state.status = 'succeeded'
      state.results = action.payload

    })
    .addCase(fetchSearchProducts.rejected, (state,action)=>{
      state.status = 'failed'
      state.error = action.payload

    })
  },
})
export  const {setQuery,clearResults} = SearchSlice.actions

export default SearchSlice.reducer
