import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    dolist: [],
};

export const fetchTodoList = createAsyncThunk(
    "/fetchTodoList",
    async (id, thunkAPI) => {
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`
            );
            const data = res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

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
    extraReducers: (builder) => {
        builder.addCase(fetchTodoList.fulfilled, (state, action) => {
            state.dolist.push(action.payload);
        });
    },
});

export const { increment, decrement, incrementByLoad } = countReducer.actions;
export default countReducer.reducer;
