// src/constants/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const initialState = {
    items: cartItems,
    totalQuantity: cartItems.reduce((total, item) => total + item.amount, 0),
  totalPrice: cartItems.reduce((total, item) => total + item.price * item.amount, 0),
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    increase: (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
        item.amount++;
        state.totalQuantity++;
        state.totalPrice += item.price;
    },
    decrease: (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
        if (item.amount > 1) {
        item.amount--;
        state.totalQuantity--;
        state.totalPrice -= item.price;
        } else {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.totalQuantity--;
        state.totalPrice -= item.price;
        }
    },
    clearCart: state => {
        state.items = [];
        state.totalQuantity = 0;
        state.totalPrice = 0;
    },
    calculateTotals: state => {
        state.totalQuantity = state.items.reduce((total, item) => total + item.amount, 0);
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.amount, 0);
    },
    },
});

export const { increase, decrease, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
