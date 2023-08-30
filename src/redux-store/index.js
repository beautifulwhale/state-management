import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/count";
import animalReducer from "./reducer/animal";

export const store = configureStore({
    reducer: {
        counter: countReducer,
        animal: animalReducer,
    },
});
