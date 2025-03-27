import React from "react";
import { IoTrashSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Task({ taskObj, onDelete }) {
    function deletePressed() {
        console.log("Delete pressed for task:", taskObj);
        console.log("Task ID:", taskObj.id);
        onDelete(taskObj.id.toString());
    }
    return (
        <li>
            <div className="taskContainer">
                <div className="taskTitleStatus">
                    <NavLink 
                        to={`/tasks/${taskObj.id}`}
                        className={({ isActive }) => isActive ? 'active-task' : ''}
                    >
                        {taskObj.title}
                    </NavLink>
                    <IoTrashSharp onClick={deletePressed}/>
                </div>
                <p>{taskObj.date}</p>
            </div>
        </li>
    );
}