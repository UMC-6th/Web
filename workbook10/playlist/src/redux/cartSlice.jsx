import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  totalAmount: 0,
  totalPrice: 0,
  status: 'idle',
  error: null
};

export const fetchMusicData = createAsyncThunk(
  'cart/fetchMusicData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8080/muscs');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('에러가 발생했습니다. 데이터 요청 경로를 확인해주세요!');
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusicData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMusicData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cart = action.payload;
      })
      .addCase(fetchMusicData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        alert(action.payload);
      });
  }
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
