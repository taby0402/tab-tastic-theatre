// src/components/MoviesList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    console.log(MovieList)

    useEffect(() => {
        axios.get('http://localhost:5000/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
