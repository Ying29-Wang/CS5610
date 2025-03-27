import React, { useState } from "react";
import Task from "./Task";

export default function TasksList({ tasks }) {
    // const [tasks, setTasks] = useState([]);

    async function deleteTask(deletedId) {
        // setTasks(tasks.filter((task) => task.id !== taskId));
        // console.log("delete pressed", deletedId);
        // const newArray = tasks.filter((task) => task.id !== deletedId);
        // setTasks(newArray);
        try {
            // 1. delete from the server
            await fetch(`http://localhost:5001/tasks/${deletedId}`, {
                method: "DELETE",
            })
        } catch (error) {
            console.log(error);
        }
        console.log("task deleted");
    }

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) :
                tasks.length === 0 ? (
                    <p>No tasks to show</p>
                ) : (
                    // <> Tasks List
                    <ul>
                        {tasks.map((task) => {
                            return <Task key={task.id} taskObj={task} onDelete={deleteTask} />;
                        })}
                    </ul>

                    // </>
                )}
                < Outlet />        
        </>
    )