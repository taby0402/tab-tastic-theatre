import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as needed
import About from './components/About';
import Home from './components/Home'; // Adjust the path as needed
import MovieList from './components/MovieList'; // Adjust the path as needed
import AddMovie from './components/AddMovie'; // Adjust the path as needed

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<MovieList />} />
                    <Route path="/add-movie" element={<AddMovie />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
