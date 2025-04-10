import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import AuthenticationButton from './AuthenticationButton';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={isMenuOpen ? 'nav-open' : ''}>
            <div className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                </NavLink>
                <NavLink to="/tasks" className={({ isActive }) => isActive ? 'active' : ''}>
                    Tasks
                </NavLink>
                <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>
                    Add Task
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
                    Profile
                </NavLink>
                <AuthenticationButton />
            </div>
        </nav>
    );
} 