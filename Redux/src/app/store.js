//Redux-Store which we configure and store 
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer,
});
