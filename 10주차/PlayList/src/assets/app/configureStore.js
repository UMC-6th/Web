// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './playlistSlice';
import cartReducer, { fetchCartItems }  from './cartSlice'; // 경로 수정
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
store.dispatch(fetchCartItems());
export default store;
