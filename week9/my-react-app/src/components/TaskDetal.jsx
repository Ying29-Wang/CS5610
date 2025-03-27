import React from 'react';
import { useParams } from 'react-router';

export default function TaskDetail({ tasks }) {
    const { taskId } = useParams();
    const task = tasks.find((task) => task.id === parseInt(taskId));

    return (
        <div>
            <h2>Task Details</h2>
            {task ? (
                <div>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.date}</p>
                </div>
            ) : (
                <p>Task not found</p>
            )}
        </div>
    );
}