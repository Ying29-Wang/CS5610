import React, { useState } from "react";
import Task from "./Task";

export default function TasksList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Review week 9 material",
            date: "June 4th at 1 pm",
        },
        {
            id: 2,
            title: "Do quiz 9",
            date: "June 4th at 6 pm",
        },
        {
            id: 3,
            title: "Work on assignment 2",
            date: "June 5th at 8 am",
        },
    ]);

    function deleteTask(deletedId) {
        // setTasks(tasks.filter((task) => task.id !== taskId));
        console.log("delete pressed", deletedId);
        const newArray = tasks.filter((task) => task.id !== deletedId);
        setTasks(newArray);
    }

    return tasks.length === 0 ? (
        <p>No tasks to show</p>
    ) : (
        // <> Tasks List
        <ul>
            {tasks.map((task) => {
                return <Task key={task.id} taskObj={task} onDelete={deleteTask} />;
            })}
        </ul>

        // </>
    )
}