// Displays a list of movies or showtimes.
import React from 'react';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
    return (
        <div className={styles.movieList}>
            {movies.map(movie => (
                <div key={movie.id} className={styles.movieCard}>
                    {/* Movie card content */}
                </div>
            ))}
        </div>
    );
}

export default MovieList;
