import { createReducer, createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = [
    { id: 1, name: "优优", age: 2, sex: "boy" },
    { id: 2, name: "猪猪", age: 5, sex: "boy" },
];

export const append = createAction("APPEND_ANIMAL", function prepare(animal) {
    return {
        payload: {
            ...animal,
            id: uuid(),
        },
    };
});

export const decrement = createAction("DECREMENT_ANIMAL");

const animalReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(append, (state, action) => {
            state.push(action.payload);
        })
        .addCase(decrement, (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        });
});

export default animalReducer;
