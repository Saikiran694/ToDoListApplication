import React from "react";
import { setTasks } from "../taskSlice";
import { useSelector, useDispatch } from "react-redux";
import DeleteToDOItem from "./DeleteToDOItem";

function ListToDOItems() {
    
    const tasks = useSelector((state) => state.tasks);
    console.log(JSON.stringify(tasks));
    return(
        <ol>
            {tasks.tasks.map((item, index) => (
                
                    <li key={index} className="task-item"> 
                        <div className="item-name">
                            {item} 
                        </div>
                        <DeleteToDOItem index={index}/>
                    </li>
                
                
            ))}
            
        </ol>
    );
}

export default ListToDOItems; 