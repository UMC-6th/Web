// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

// 초기 장바구니에 담긴 품목의 총량과 가격 계산
const initialTotalItems = cartItems.length;
const initialTotalPrice = cartItems.reduce((acc, item) => acc + (item.price * 1), 0);

const initialState = {
  playlists: cartItems.map(item => ({ ...item, quantity: 1 })),
  totalItems: initialTotalItems,
  totalPrice: initialTotalPrice,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.playlists.find(playlist => playlist.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += Number(item.price); // 가격을 숫자로 변환하여 더함
      }
    },
    decrease: (state, action) => {
      const item = state.playlists.find(playlist => playlist.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= Number(item.price); // 가격을 숫자로 변환하여 뺌
        if (item.quantity === 0) {
          state.playlists = state.playlists.filter(playlist => playlist.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.playlists = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    }
  },
});

export const { increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
