import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice";
const store = configureStore({
    reducer: {
        login:LoginSlice
    }
})

export default store;