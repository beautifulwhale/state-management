import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/count";

export const store = configureStore({
    reducer: {
        counter: countReducer,
    },
});
