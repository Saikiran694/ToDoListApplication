import {configureStore} from "@reduxjs/toolkit"
import { taskReducer } from "./taskSlice";

const tasksStore = configureStore({
    reducer: {
        tasks: taskReducer
    }
});

export default tasksStore; 