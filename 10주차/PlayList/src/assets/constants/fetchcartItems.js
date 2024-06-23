import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace with your server URL
const SERVER_URL = 'http://localhost:8080/musics';

// Async thunk to fetch cart items from server
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    try {
      const response = await axios.get(SERVER_URL);
      return response.data; // Assuming server responds with an array of cart items
    } catch (error) {
      throw Error('Failed to fetch cart items from server');
    }
  }
);
