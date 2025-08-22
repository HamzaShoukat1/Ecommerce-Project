import { createSlice } from "@reduxjs/toolkit";


const  calculateTotals = (state)=>{ 
      let amount = 0
      let qty = 0
      state.cartItems.forEach((item)=>{
        amount  +=   item.price *  item.quantity
        qty += item.quantity
      })
      state.totalAmount = amount
      state.totalQuantity = qty
    
    };

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers:{
    addToCart: (state,action)=> {
      if(!state){
        return 

      }
       const item = action.payload
        const existingData = state.cartItems.find((i)=> i.id === item.id)
        if(existingData){
          existingData.quantity += 1
        } else{
          state.cartItems.push({...item, quantity: 1});
        }
      calculateTotals(state);
    },
    removeFromCart:(state, action)=>{
       const id = action.payload
       state.cartItems = state.cartItems.filter((item)=> item.id !== id)
      calculateTotals(state);
    },
    
    clearCart:(state)=>{
      state.cartItems = []
      calculateTotals(state);
    },
   
    increaseQ:(state,action)=>{
      const item = state.cartItems.find((item)=> item.id === action.payload)
      if(item && item.quantity >= 1){
        item.quantity +=1
      }
      calculateTotals(state);
      

    },
    decreaseQ:(state,action)=>{
      const item = state.cartItems.find((item)=> item.id === action.payload)
      if(item && item.quantity > 1){
        item.quantity -= 1
      }
      calculateTotals(state);
    
    },

    
  }
})








export const {addToCart,removeFromCart,clearCart,increaseQ,decreaseQ} = CartSlice.actions
export default CartSlice.reducer




