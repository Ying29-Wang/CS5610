import React from "react";
import { IoTrashSharp } from "react-icons/io5";

export default function Task({ taskObj, onDelete }) {
    function deletePressed() {
        // console.log("delete pressed");
        onDelete(taskObj.id)
    }
    return (
        <li>
            <div className="taskContainer">
                <div className="taskTitleStatus">
                    <NavLink to='/tasks/${taskObj.title}'> </NavLink>
                    <IoTrashSharp onClick={deletePressed}/>
                </div>
                <p>{taskObj.date}</p>
            </div>
        </li>
    );
}