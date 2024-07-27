import { configureStore } from "@reduxjs/toolkit";

const rootReducer = (state = initialState, action) => {
    return state;
} 

export const store = configureStore({
    reducer: rootReducer,
});