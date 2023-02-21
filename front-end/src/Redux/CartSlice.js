import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, action) => {
            // state.cart.push(action.payload);
        },
        incQuantity: (state, action) => {
            // let incQuantity = action.payload;
            // console.log(state.cart[incQuantity.quantity]);
            // state.cart[incQuantity].quantity = state.cart[incQuantity].quantity + 1;
        },
        decQuantity: (state, action) => {
            // let decQuantity = action.payload;
            // state.cart[decQuantity].quantity = state.cart[decQuantity].quantity - 1;
        },
        delBook: (state, action) => {
            // let book = state.cart.filter((item) => item.id !== action.payload);
            // state.cart = book;
        },
    },
});

export const { addToCart, incQuantity, decQuantity, delBook } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
