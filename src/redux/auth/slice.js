import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    accessToken: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
})


export const authReducer = authSlice.reducer;