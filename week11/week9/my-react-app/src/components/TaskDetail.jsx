import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetail({ tasks }) {
    const [taskUsers, setTaskUsers] = useState([]);
    const { taskId } = useParams();
    
    const task = tasks.find((task) => 
        (task._id && task._id.toString() === taskId) || 
        (task.id && task.id.toString() === taskId)
    );

    // Fetch users responsible for this task
    useEffect(() => {
        async function fetchUsers() {
            if (task) {
                try {
                    // Use task.id if available, otherwise use the numeric part of _id or taskId
                    const taskIdForFetch = task.id || taskId;
                    const response = await fetch(`http://localhost:5000/users?task=${taskIdForFetch}`);
                    if (response.ok) {
                        const data = await response.json();
                        setTaskUsers(data);
                    }
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            }
        }
        
        fetchUsers();
    }, [task, taskId]);

    if (!task) {
        return <p>Task not found</p>;
    }

    return (
        <div className="task-detail">
            <h3>TaskDetails of task {taskId}</h3>
            
            {/* Display each user responsible for the task */}
            {taskUsers.map(user => (
                <p key={user.id}>{user.name} is responsible for this task</p>
            ))}
            
            {taskUsers.length === 0 && (
                <p>No users assigned to this task</p>
            )}
        </div>
    );
}