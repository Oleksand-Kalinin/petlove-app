import { modalsReducer } from "./modals/slice.js";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer: {
        modals: modalsReducer,
    },
});

