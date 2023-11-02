import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { httpRequest } from '../../apiservices';
import axios from 'axios';

export const userLogin = createAsyncThunk("userLogin", async (data, { rejectWithValue }) => {
    try {
        console.log('data', data)
        console.log(httpRequest)
        const response = await axios.post("https://freedomthroughschool-qa.nimapinfotech.com/api/auth/send-otp", {
            // username: data.username,
            // password: data.password
            emailId: data.email
        });
        const userData = response.data;
        console.log(userData)
        // localStorage.setItem('userData', JSON.stringify(userData))
        toast.success('OTP send successfully')
        return userData;
    }
    catch (err) {
        console.log('error')
        toast.error('User Not Found')
    }
});

export const verifyLoginOtp = createAsyncThunk("verify/otp", async (data, { rejectWithValue }) => {
    try {
        console.log('data', data)
        console.log(httpRequest)
        const response = await axios.post("https://freedomthroughschool-qa.nimapinfotech.com/api/auth/verify-otp", {
            otp: data
        });
        const userData = response.data;
        // localStorage.setItem('userData', JSON.stringify(userData))
        return userData;
    }
    catch (err) {
        toast.error('OTP is invalid')
    }

});


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