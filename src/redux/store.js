import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice.js";
import { modalsReducer } from "./modals/slice.js";



export const store = configureStore({
    reducer: {
        modals: modalsReducer,
        auth: authReducer,
    },
});

