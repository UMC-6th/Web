// src/features/cart/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 초기 상태
const initialState = {
  playlists: [],
  totalItems: 0,
  totalPrice: 0,
  status: 'idle', // 비동기 작업 상태를 관리할 필드 추가
  error: null,
};

// 비동기 액션 생성자 정의
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8080/musics');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // axios에서 발생한 error 객체 전달
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, action) => {
      const item = state.playlists.find(playlist => playlist.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += Number(item.price);
      }
    },
    decrease: (state, action) => {
      const item = state.playlists.find(playlist => playlist.id === action.payload);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= Number(item.price);
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.playlists = action.payload.map(item => ({ ...item, quantity: 1 }));
        state.totalItems = action.payload.length;
        state.totalPrice = action.payload.reduce((acc, item) => acc + (item.price * 1), 0);
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message || 'Failed to fetch cart items'; // axios 에러 메시지 사용 또는 기본 메시지
        alert(action.payload.message || 'Failed to fetch cart items'); // alert으로 에러 메시지 표시
      });
  },
});

export const { increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
