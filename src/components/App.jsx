import React, { useState } from "react";
import CreateToDoItem from "./CreateToDOItem";
import ListToDOItems from "./ListToDOItems";
function App()  {
    var taskItems = ["task1", "task2", "task3"];
    const [tasks, setTasks] = useState(taskItems);
    
    const updateTasks = (task) => {
        setTasks([...tasks, task]);
    }

    return(
        <>
        <div> Welcome, You can create and view your TO DO Items here!!!</div>
        <CreateToDoItem onUpdateData={updateTasks}/>
        <ListToDOItems tasks={tasks} />
        </>
        
    );
}

export default App;