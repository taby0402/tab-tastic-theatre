// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import AddMovie from './components/AddMovie';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }, []);

    const addMovie = (newMovie) => {
        fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
        })
            .then((response) => response.json())
            .then((data) => setMovies([...movies, data]));
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<MovieList movies={movies} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add-movie" element={<AddMovie addMovie={addMovie} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
