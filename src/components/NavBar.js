// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/add-movie">Add Movie</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
