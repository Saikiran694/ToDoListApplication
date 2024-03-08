import React from "react";
function ListToDOItems(props) {
    return(
        <ul>
            {props.tasks.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            
        </ul>
    );
}

export default ListToDOItems; 