// src/components/AddMovie.js
import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = { title, poster, description };
        addMovie(newMovie);
        setTitle('');
        setPoster('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Poster URL:</label>
                <input
                    type="text"
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;
