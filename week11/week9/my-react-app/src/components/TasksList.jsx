import React, { useState } from "react";
import Task from "./Task";
import { Outlet } from "react-router-dom";

export default function TasksList({ tasks, onTaskDeleted }) {
    const [isLoading, setIsLoading] = useState(false);
    // const [tasks, setTasks] = useState([]);

    async function deleteTask(deletedId) {
        // setTasks(tasks.filter((task) => task.id !== taskId));
        // console.log("delete pressed", deletedId);
        // const newArray = tasks.filter((task) => task.id !== deletedId);
        // setTasks(newArray);
        try {
            setIsLoading(true);
            // First check if the task exists
            const checkResponse = await fetch(`http://localhost:5001/tasks/${deletedId}`);
            if (!checkResponse.ok) {
                throw new Error(`Task not found: ${checkResponse.status}`);
            }

            // Then delete the task
            const deleteResponse = await fetch(`http://localhost:5001/tasks/${deletedId}`, {
                method: "DELETE"
            });
            
            if (!deleteResponse.ok) {
                throw new Error(`Failed to delete task: ${deleteResponse.status}`);
            }
            
            // Call the parent's refresh function
            if (onTaskDeleted) {
                onTaskDeleted();
            }
        } catch (error) {
            console.error("Error deleting task:", error);
            alert(`Failed to delete task: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
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