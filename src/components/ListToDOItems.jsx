import React from "react";
import { setTasks } from "../taskSlice";
import { useSelector, useDispatch } from "react-redux";

function ListToDOItems() {
    
    const tasks = useSelector((state) => state.tasks);
    console.log(JSON.stringify(tasks));
    return(
        <ol>
            {tasks.tasks.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            
        </ol>
    );
}

export default ListToDOItems; 