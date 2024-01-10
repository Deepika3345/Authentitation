import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user: userExist ? userExist : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true

            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.user = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError = true,
                    state.isSuccess = false,
                    state.message = action.payload
            })


            // logout
            .addCase(logoOutUser.fulfilled, (state, action) => {
                state.isError = false,

                    state.user = null
            })

            // login
            .addCase(logInUser.pending, (state) => {
                state.isLoading = true

            })
            .addCase(logInUser.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isSuccess = true,
                    state.isError=false,
                    state.message=""
                    state.user = action.payload
            })
            .addCase(logInUser.rejected, (state, action) => {
                state.isError = true,
                    state.isSuccess = false,
                    state.message = action.payload
            })


    }
})
export default authSlice.reducer


// Register

export const registerUser = createAsyncThunk("REGISTER/USER", async (formData, thunkAPI) => {
    try {
        return await authService.register(formData)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message)

    }
})

// Logout


export const logoOutUser = createAsyncThunk("LOGOUT/USER", async () => {
    localStorage.removeItem('user')
})

// login

export const logInUser = createAsyncThunk("LOGIN/USER", async (formData, thunkAPI) => {
    try {
        return await authService.login(formData)
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message)

    }
})


