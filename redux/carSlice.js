import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products = state.products.push(action.payload);
            state.quantity += action.payload.quantity;
        }
    }

});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
