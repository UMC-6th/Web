import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpened: false,
  };

export const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        modalOpen: (state)=>{
            state.isOpened = true;
        },
        modalClose:(state)=>{
            state.isOpened = false;
        },
    }

})

export const { modalClose, modalOpen } = ModalSlice.actions;

export default ModalSlice.reducer;
