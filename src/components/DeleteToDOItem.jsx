import React from "react";
import { deleteTasks } from "../taskSlice";
import { useDispatch } from "react-redux";
function DeleteToDOItem(props) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        console.log("Coming here!!", props.index);
        dispatch(deleteTasks(props.index));
    }
    return(
        <button
            className="delete-task"
            name="Delete"
            onClick={handleDelete}
        >
            Delete
        </button>
    );
}

export default DeleteToDOItem; 