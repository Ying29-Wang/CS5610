import React from "react";
import { Link } from "react-router-dom";

export default function Task({ taskObj, onDelete }) {
    function deletePressed() {
        console.log("Delete pressed for task:", taskObj);
        console.log("Task ID:", taskObj._id);
        onDelete(taskObj._id);
    }

    return (
        <li>
            <Link to={`/tasks/${taskObj._id}`}>{taskObj.title}</Link>
            <span> - {taskObj.date}</span>
            <button onClick={deletePressed}>Delete</button>
        </li>
    );
} 