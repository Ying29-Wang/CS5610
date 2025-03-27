import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function submitHanlder(e) {
        e.preventDefault();
        setError(null);
        
        const newTask = {
            id: Date.now(),
            title: title,
            date: date,
        };
        console.log(newTask);
        setDate("");
        setTitle("");
        // send a post request to the server
        try {
            // First check if server is available
            const checkResponse = await fetch("http://localhost:5001/tasks");
            if (!checkResponse.ok) {
                throw new Error("Server is not available");
            }

            // Then add the new task
            const response = await fetch("http://localhost:5001/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });

            if (!response.ok) {
                throw new Error(`Failed to add task: ${response.status}`);
            }

            console.log("Task added successfully");
            setDate("");
            setTitle("");
            
            // Refresh the task list before navigating
            if (onTaskAdded) {
                await onTaskAdded();
            }
            navigate("/tasks");
        } catch (error) {
            console.error("Error adding task:", error);
            setError(error.message);
            alert(`Failed to add task: ${error.message}`);
        }
    }

    return (
        <form onSubmit={submitHanlder}>
            <div className="form-control">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={function (e) {
                        setTitle(e.target.value);
                    }}
                />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input 
                    type="text"
                    value={date}
                    onChange={function (e) {
                        setDate(e.target.value);
                    }}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Save</button>
        </form>
    );
}