import React, { useState } from "react";
import Task from "./Task";
import { Outlet } from "react-router-dom";

export default function TasksList({ tasks }) {
    const [isLoading, setIsLoading] = useState(false);
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
            });
            // Refresh the page to update the task list
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        console.log("task deleted");
    }

    return (
        <div>
            <h2>Tasks List</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : tasks.length === 0 ? (
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
            <Outlet />
        </div>
    );
}