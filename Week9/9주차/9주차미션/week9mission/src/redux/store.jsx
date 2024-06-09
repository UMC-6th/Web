import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import modalReducer from './ModalSlice'

const store = configureStore({
    reducer: { //프로퍼티명 무조건 "reducer"로 해줘야함
        cart: cartReducer,
        modal:modalReducer,
    },
});

export default store;