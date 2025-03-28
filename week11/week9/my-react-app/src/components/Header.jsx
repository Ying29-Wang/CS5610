import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ myAppName }) {
    console.log(myAppName);
    return (
        <div>
            <header className="headerContainer">
                <h1>Welcome to {myAppName}</h1>
                <Link to="/add">
                    <button>Add a Task</button>
                </Link>
            </header>
        </div>
    );
}