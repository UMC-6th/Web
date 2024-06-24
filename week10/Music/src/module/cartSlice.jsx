import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCartItems = createAsyncThunk(
    "carts/fetchCartItems",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:8080/musics");
            const data = await response.json();

            if (response.status === 200) {
                return data;
            } else if (response.status === 404) {
                return rejectWithValue({ message: '404 Page Not Found' });
            } else {
                return rejectWithValue({ message: 'An unknown error occurred' });
            }
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);

const initialState = {
    carts: [],
    totalQuantity: 0,
    totalAmount: 0,
    status: "idle",
    error: null,
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
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartItems.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCartItems.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.carts = action.payload;
            })
            .addCase(fetchCartItems.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
