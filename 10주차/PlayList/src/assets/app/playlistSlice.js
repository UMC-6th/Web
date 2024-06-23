// src/features/playlist/playlistSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 초기 상태
const initialState = {
  playlists: [],
  status: 'idle', // 비동기 작업 상태를 관리할 필드 추가
  error: null,
};

// 비동기 액션 생성자 정의
export const fetchPlaylists = createAsyncThunk(
  'playlist/fetchPlaylists',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8080/musics'); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error); // axios에서 발생한 error 객체 전달
    }
  }
);

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    // 추가적인 reducer 함수가 필요하다면 여기에 정의할 수 있습니다.
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.playlists = action.payload; // API에서 받아온 데이터를 상태에 저장합니다.
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message || 'Failed to fetch playlists'; // axios 에러 메시지 사용 또는 기본 메시지
        alert(action.payload.message || '에러가 발생했습니다. 데이터 요청 경로를 확인해 주세요!'); // alert으로 에러 메시지 표시
      });
  },
});

export default playlistSlice.reducer;
