import React, { useState } from "react";
import CreateToDoItem from "./CreateToDOItem";
import ListToDOItems from "./ListToDOItems";
import { useDispatch, useSelector } from "react-redux";

function App()  {

    const tasks = useSelector(state => state.tasks);
    

    return(
        <>
        <div> Welcome, You can create and view your TO DO Items here!!!</div>
        
        <ListToDOItems />
        </>
        
    );
}

export default App;