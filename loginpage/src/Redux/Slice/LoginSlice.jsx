import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const userLogin = createAsyncThunk("userLogin", async (data, { rejectWithValue }) => {
    console.log('data', data)
    const response = await axios.post("https://dummyjson.com/auth/login", {
        username: data.username,
        password: data.password
    });
    console.log('response', response)
    const userData = response.data;
    console.log('userData', userData)
    localStorage.setItem('userData', JSON.stringify(userData))
    return userData;
}
);

const loginReducer = createSlice({
    name: 'login',
    initialState: {
        loginUser: [],
        loading: false,
        error: null,
    },

    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true;
        },
        [userLogin.fulfilled]: (state, action) => {
            console.log('action.payload', action.payload)
            state.loading = false;
            state.loginUser = action.payload;
        },
        [userLogin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default loginReducer.reducer