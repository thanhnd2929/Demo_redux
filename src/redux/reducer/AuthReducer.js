import { createSlice } from "@reduxjs/toolkit";
import { login } from "../action/AuthAction";

const initialState = {
    authToken: null,
    refreshToken: null,
    status: false,
    message: null,
    statusCode: null,
    userData: null // test
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.status = true;
                state.message = null;
                state.statusCode = null;
            })

            .addCase(login.fulfilled, (state, action) => {
                state.status = false;
                state.authToken = action.payload.authToken;
                state.refreshToken = action.payload.refreshToken;
                state.message = action.payload.message;
                state.statusCode = action.payload.statusCode;
                state.userData = action.payload // test
            })

            .addCase(login.rejected, (state, action) => {
                state.status= false;
                state.message = action.payload.message
                state.statusCode = action.payload.statusCode

            })
    }
})

export default authSlice.reducer;