import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function submitHanlder(e) {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title: title,
            date: date
        };
        console.log(newTask);

        try {
            // First check if server is available
            const serverCheck = await fetch("http://localhost:3000/api/tasks");
            if (!serverCheck.ok) {
                throw new Error("Server is not available");
            }

            const response = await fetch("http://localhost:3000/api/tasks", {
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
            setTitle("");
            setDate("");
            if (onTaskAdded) {
                onTaskAdded();
            }
            navigate("/tasks");
        } catch (error) {
            console.error("Error adding task:", error);
            setError(error.message);
            alert(`Failed to add task: ${error.message}`);
        }
    }

    return (
        <div>
            <h2>Add Task</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={submitHanlder}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}