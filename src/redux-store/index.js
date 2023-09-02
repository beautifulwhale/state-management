import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/count";
import animalReducer from "./reducer/animal";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        counter: countReducer,
        animal: animalReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    otherValue: 12,
                },
            },
        }).concat(thunk);
    },
    devTools: process.env.NODE_ENV !== "production"
});
