import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import TodoService from "../services/Todo";

export const fetchTodos = createAsyncThunk("fetchTodos",async() => {
    return await TodoService.list();
});
export const createTodo = createAsyncThunk("createTodo",async(payload) => {
    return await TodoService.create(payload)
});
export const deleteTodo = createAsyncThunk("deleteTodo",async(payload) => {
    return await TodoService.delete(payload);
});
export const updateTodo = createAsyncThunk("updateTodo",async(payload) => {
    return await TodoService.update(payload);
});

const initialState = {
    data: [],
    error:true
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        createError: (state,action) => {
            state.error = !state.error
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.fulfilled, (state,action) => {
            state.data = action.payload;
        });
        builder.addCase(createTodo.fulfilled, (state,action) => {
            state.data = action.payload;
        });
        builder.addCase(deleteTodo.fulfilled, (state,action) => {
            state.data = action.payload;
        } );
        builder.addCase(updateTodo.fulfilled, (state,action) => {
            state.data = action.payload
        })
    }
})
export const { createError } = todoSlice.actions

export default todoSlice.reducer