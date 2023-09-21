import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartSlice";


export const store = configureStore({
    reducer: {
        cart: CartReducer 
    }
})