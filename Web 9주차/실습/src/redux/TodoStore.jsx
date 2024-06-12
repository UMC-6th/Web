import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../components/TodosReducer";

const store = configureStore({
    reducer: {
        todos: todoSlice,
    },
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import todoSlice from '../components/TodosReducer';

// const store = configureStore({
//     reducer: {
//         todos: todoSlice,
//     },
// });

// export default store;