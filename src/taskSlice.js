import { createSlice } from "@reduxjs/toolkit";
var taskItems = ["task1", "task2", "task3"];
const initialState = {
    tasks: taskItems
}; 

export const taskSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            //state.tasks = [...state.tasks, action.payload]
            state.tasks.push(action.payload);
        },

        deleteTasks: (state, action) => {
            console.log("Payload", action.payload);
            //state.tasks = state.tasks.filter(item => item !== action.payload);
            state.tasks.splice(action.payload, 1);
        }

    }
})

export const {setTasks, deleteTasks} = taskSlice.actions;

export const taskReducer = taskSlice.reducer; 