import { configureStore } from "@reduxjs/toolkit";
import carts from "./cartSlice";

export default configureStore({
    reducer: {
        carts,
    },
});