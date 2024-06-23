import { configureStore } from "@reduxjs/toolkit";
import todos from "./todoSlice";

export default configureStore({
    reducer: {
        todos,
    },
});