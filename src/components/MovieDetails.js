// src/components/Movie.js
import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
