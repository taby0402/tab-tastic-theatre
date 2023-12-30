//Shows detailed information about a specific movie (title, synopsis, rating, trailer, etc.).
// MovieDetails.js
import React from 'react';
import styled from 'styled-components';

// Styled components for the movie details
const DetailsWrapper = styled.div`
  /* Movie details wrapper styles */
`;

const MovieTitle = styled.h2`
  /* Movie title styles */
`;

const Synopsis = styled.p`
  /* Synopsis styles */
`;

const Rating = styled.div`
  /* Rating styles */
`;

const Trailer = styled.iframe`
  /* Trailer styles */
`;

const MovieDetails = ({ movie }) => {
  return (
    <DetailsWrapper>
      <MovieTitle>{movie.title}</MovieTitle>
      <Synopsis>{movie.synopsis}</Synopsis>
      <Rating>Rating: {movie.rating}/10</Rating>
      <Trailer
        width="560"
        height="315"
        src={movie.trailerUrl}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></Trailer>
    </DetailsWrapper>
  );
}

export default MovieDetails;
