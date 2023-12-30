//Displays available showtimes for a particular movie.
// Showtime.js
import React from 'react';
import styled from 'styled-components';

// Styled components for the showtime
const ShowtimeWrapper = styled.div`
  /* Showtime wrapper styles */
`;

const ShowtimeItem = styled.div`
  margin-bottom: 10px;
  /* Showtime item styles */
`;

const Showtime = () => {
    const showtimes = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM']; // Replace with actual showtimes

    return (
        <ShowtimeWrapper>
            <h3>Showtimes</h3>
            {showtimes.map((time, index) => (
                <ShowtimeItem key={index}>
                    <input type="radio" id={`showtime-${index}`} name="showtime" value={time} />
                    <label htmlFor={`showtime-${index}`}>{time}</label>
                </ShowtimeItem>
            ))}
        </ShowtimeWrapper>
    );
}

export default Showtime;
