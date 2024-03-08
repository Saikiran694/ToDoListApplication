import React, { useState } from "react";
function CreateToDoItem({onUpdateData}) {
    const [inputText, setInputText] = useState('');
    const handleOnChange = (event) => {
        setInputText(event.target.value);
    }

    const handleOnSubmit = () => {
        onUpdateData(inputText);
        setInputText('');
    }

    return(
        <div>
            <input 
                type="text" 
                value={inputText}
                onChange={handleOnChange}
                placeholder="Enter a Task...."
                className="taskInput"
                />

            
            <button 
                name="Create"  
                className="createToDOItem"
                onClick={handleOnSubmit}>
                    Create
            </button>
        </div>
        
    );
}

export default CreateToDoItem; 