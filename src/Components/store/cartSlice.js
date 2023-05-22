import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartData: null
};

const cartSlice = createSlice(
    {
        name: "cart",
        initialState,
        reducers: {
            add(state, action){
                state.cartData=action.payload;
            },
            // ,
            // remove(state, action){
            //     return state.filter(item=>item.id !== action.payload);
            // }
        }
    }

);
export const {add} = cartSlice.actions;
export default cartSlice.reducer;