import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
        state.todos.push({ text: action.payload, done: false });
        },
        removeTodos: (state, action) => {
        state.todos.splice(action.payload, 1);
        },
        toggleTodos: (state, action) => {
        state.todos[action.payload].done = !state.todos[action.payload].done;
        },
    },
});

export const { addTodos, removeTodos, toggleTodos } = todoSlice.actions;
export default todoSlice.reducer;