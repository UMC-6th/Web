// src/features/playlist/playlistSlice.js
import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../constants/cartItems';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlists: cartItems,
  },
  reducers: {

  }
});

export default playlistSlice.reducer;
