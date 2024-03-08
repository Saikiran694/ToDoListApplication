import { createSlice } from "@reduxjs/toolkit";
var taskItems = ["task1", "task2", "task3"];
const initialState = {
    tasks: taskItems
}; 

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        }
    }
})

export const {setTasks} = taskSlice.actions;

export const taskReducer = taskSlice.reducer; 