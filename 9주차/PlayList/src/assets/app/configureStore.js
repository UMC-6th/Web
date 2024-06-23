// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './playlistSlice';
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';



const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
