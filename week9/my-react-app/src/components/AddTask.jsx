import React, { useState } from "react";
import Task from "./Task";

export default function AddTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
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
            })
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
                    <input type="text"></input>
                </div>
                <button type="submit"> Save </button>
            </form>
        );
    }