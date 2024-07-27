import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        name: "",
        userNumber: 0
    }
};

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case "userData/add":
            return {
                userData: {
                    name: state.userData.name + action.payload,
                    userNumber: state.userData.userNumber + action.payload
                },
            };

        default:
            return state;
    }

};



export const store = configureStore({
    reducer: rootReducer,
});