import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask({ onTaskAdded }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    async function submitHanlder(e) {
        e.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            date: date,
        };
        console.log(newTask);
        setDate("");
        setTitle("");
        // send a post request to the server
        try {
            await fetch("http://localhost:5001/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });
            // Refresh the task list before navigating
            if (onTaskAdded) {
                await onTaskAdded();
            }
            navigate("/tasks");
        } catch (error) {
            console.log(error);
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
            <button type="submit"> Save </button>
        </form>
    );
}