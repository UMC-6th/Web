import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
  cart: cartItems,
  totalAmount: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase(state, action) {
      let index = state.cart.findIndex(a => a.id === action.payload);
      if (index !== -1) {
        state.cart[index].amount++;
      }
    },
    decrease(state, action) {
      let index = state.cart.findIndex(a => a.id === action.payload);
      if (index !== -1) {
        state.cart[index].amount--;
        if (state.cart[index].amount < 1) {
          state.cart.splice(index, 1);
        }
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    calculateTotals(state) {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cart.forEach(item => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
      });
      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    }
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
