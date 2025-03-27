import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import { Routes, Route, Link, Outlet } from 'react-router';

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  // getting data from server
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:5001/tasks");
      if (!response.ok) {
        throw new Error("fetch failed");
      } else {
        const data = await response.json();
        setTasksFromServer(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }
    , []);
  const appName = "My Awesome App"

  return (
    <div className="appContainer">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Header myAppName={appName} />} />
        <Route
          path="/tasks"
          element={<TasksList tasks={tasksFromServer} isLoading={isLoading}/>}
        >
          <Route path="/tasks/:taskId" element={<h1>Task Details</h1>} />
        </Route>
        <Route path="/add" element={<AddTask />} />       
        <Route
          path="*"
          element={<h1>404 Not Found</h1>}
        />
      </Routes>
    </div>
  )
}
