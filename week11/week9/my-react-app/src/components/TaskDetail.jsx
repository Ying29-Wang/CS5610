import React from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetail({ tasks }) {
    const { taskId } = useParams();
    const task = tasks.find((task) => task.id.toString() === taskId);

    return (
        <div className="task-detail">
            <h2>Task Detail of Task No. {taskId}</h2>
            {task ? (
                <div>
                    <h3>Title: {task.title}</h3>
                    <p>Date: {task.date}</p>
                </div>
            ) : (
                <p>Task not found</p>
            )}
        </div>
    );
}