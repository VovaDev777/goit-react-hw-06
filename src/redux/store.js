import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'userData',
    initialState: [],
    reducers: {
        addUserData: (state, action) => {
            state.push(action.payload);
        },
        deleteUserData: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        }
    }
});

export const { addUserData, deleteUserData } = userDataSlice.actions;

export const store = configureStore({
    reducer: {
        userData: userDataSlice.reducer
    }
});

export default store;
