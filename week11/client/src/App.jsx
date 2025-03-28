import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import TaskDetail from './components/TaskDetail';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5001/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setTasksFromServer(data);
      console.log("Fetched tasks:", data);
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
    <div className="appContainer">
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'active' : ''}>Tasks</NavLink>
        <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>Add Task</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Header myAppName={appName} />} />
        <Route
          path="/tasks"
          element={<TasksList tasks={tasksFromServer} isLoading={isLoading} onTaskDeleted={fetchData} />}
        >
          <Route path="/tasks/:taskId" element={<TaskDetail tasks={tasksFromServer} />} />
        </Route>
        <Route path="/add" element={<AddTask onTaskAdded={fetchData} />} />
        <Route
          path="*"
          element={<h1>404 Not Found</h1>}
        />
      </Routes>
    </div>
  )
} 