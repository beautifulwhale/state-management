import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const countReducer = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByLoad: (state, action) => {
            state.count += action.payload;
        },
    },
});

export const { increment, decrement, incrementByLoad } = countReducer.actions;
export default countReducer.reducer;
