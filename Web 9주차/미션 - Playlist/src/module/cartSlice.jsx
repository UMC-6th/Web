import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItems";

const initialState = {
    carts: cartItems,
    totalQuantity: 0,
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        increase: (state, action) => {
            const item = state.carts.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                item.amount += 1;
            }
        },
        decrease: (state, action) => {
            const item = state.carts.find((cartItem) => cartItem.id === action.payload);
            if (item) {
                if (item.amount > 1) {
                    item.amount -= 1;
                } else {
                    state.carts = state.carts.filter((cartItem) => cartItem.id !== action.payload);
                }
            }
        },
        removeItem: (state, action) => {
            state.carts = state.carts.filter((cartItem) => cartItem.id !== action.payload);
        },
        clearCart: (state) => {
            state.carts = [];
        },
        calculateTotals: (state) => {
            state.totalQuantity = state.carts.reduce((total, item) => {
                return total + item.amount;
            }, 0);
            state.totalAmount = state.carts.reduce((total, item) => {
                return total + item.price * item.amount;
            }, 0);
        }
    },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
