import React from "react";
import { IoTrashSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Task({ taskObj, onDelete }) {
    console.log("Task object in Task component:", taskObj);

    const taskId = taskObj._id || taskObj.id;

    function deletePressed() {
        console.log("Delete pressed for task:", taskObj);
        console.log("Task ID:", taskId);
        onDelete(taskId);
    }
    return (
        <li>
            <div className="taskContainer">
                <div className="taskTitleStatus">
                    <NavLink
                        to={`/tasks/${taskId}`} // Change taskObj.id to taskId
                        className={({ isActive }) => isActive ? 'active-task' : ''}
                    >
                        {taskObj.title}
                    </NavLink>
                    <IoTrashSharp onClick={deletePressed} />
                </div>
                <p>{taskObj.date}</p>
            </div>
        </li>
    );
}