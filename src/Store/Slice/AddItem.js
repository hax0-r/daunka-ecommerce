import { createSlice } from "@reduxjs/toolkit";

const addToCart = createSlice({
    name: "addToCart",
    initialState: {
        quantity: 0,
        products: [],
        cart: []
    },
    reducers: {
        increament: (state, action) => {
            state.quantity = state.quantity + 1
        },
        decrement: (state, action) => {
            state.quantity = state.quantity - 1
        },
        addItem: (state, action) => {
            // const productsItem = state.products.find((_, idx) => idx === action.payload)
            state.cart.push(action.payload)
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
    }
})

export const addTocartReducer = addToCart.reducer

export const { increament, addItem, removeItem, decrement } = addToCart.actions 