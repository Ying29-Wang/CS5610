import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import TaskDetail from './components/TaskDetail';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
// import LoginButton from './components/LoginButton';
// import LogoutButton from './components/AuthenticationButton';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from './components/AuthenticationButton';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Nav from './components/Nav';

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setIsLoading(true);
      console.log("Fetching tasks from API...");
      const response = await fetch("http://localhost:3000/api/tasks");
      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Failed to fetch tasks: ${response.status} - ${errorText}`);
      }

      const rawText = await response.text();
      console.log("Raw response text:", rawText);

      // Parse the text manually to avoid the JSON parsing error
      try {
        const data = JSON.parse(rawText);
        console.log("Parsed data:", data);

        // Check if data is an array
        if (!Array.isArray(data)) {
          console.error("Expected array but got:", typeof data);
          setTasksFromServer([]);
          return;
        }

        // Log the structure of the first task if available
        if (data.length > 0) {
          console.log("First task structure:", data[0]);
          console.log("Task ID property:", data[0]._id ? "_id" : data[0].id ? "id" : "unknown");
        } else {
          console.log("No tasks returned from server");
        }

        setTasksFromServer(data);
      } catch (parseError) {
        console.error("JSON parsing error:", parseError);
        setError("Invalid response format from server");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const appName = "My Awesome App"

  return (
    isLoading ? <div>Loading...</div> :
    <div className="appContainer">
      <Nav />
      <Header myAppName={appName} />
      <Routes>
        <Route path="/" element={<TasksList tasks={tasksFromServer} isLoading={isLoading} onTaskDeleted={fetchData} />} />
        <Route path="/tasks" element={<TasksList tasks={tasksFromServer} isLoading={isLoading} onTaskDeleted={fetchData} />} />
        <Route path="/add" element={<AddTask onTaskAdded={fetchData} />} />
        <Route path="/tasks/:taskId" element={<TaskDetail tasks={tasksFromServer} />} />
        <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}