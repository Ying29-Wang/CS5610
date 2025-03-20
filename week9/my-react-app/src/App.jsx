import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

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
  
  return <div className="appContainer">
    <Header myAppName={appName} />
    <AddTask />
    <TasksList  tasks={tasksFromServer}/>   
  </div>;
}
