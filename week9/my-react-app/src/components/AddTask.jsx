import React, { useState } from "react";
import Task from "./Task";

export default function AddTask() {
    const[title, setTitle] = useState("");
    const[date, setDate] = useState("");
    return (
        <form>
            <div className="form-control">
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={function(e) {
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
    )
}