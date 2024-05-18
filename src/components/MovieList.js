// src/components/MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
    return (
        <main>
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </main>
    );
};

export default MovieList;
