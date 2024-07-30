import { configureStore } from "@reduxjs/toolkit";
import { addTocartReducer } from "./Slice/AddItem";

export const store = configureStore({
    reducer: {
        addToCartItem: addTocartReducer
    }
}) 