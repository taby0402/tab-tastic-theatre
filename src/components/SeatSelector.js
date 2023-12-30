//Allows users to select seats for a movie show.
// SeatSelector.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the seat selector
const SeatSelectorWrapper = styled.div`
  /* Seat selector wrapper styles */
`;

const Seat = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  margin: 5px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#333' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
`;

const SeatSelector = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    return (
        <SeatSelectorWrapper>
            {Array.from({ length: 20 }, (_, index) => (
                <Seat
                    key={index}
                    selected={selectedSeats.includes(index)}
                    onClick={() => handleSeatClick(index)}
                >
                    {index + 1}
                </Seat>
            ))}
        </SeatSelectorWrapper>
    );
}

export default SeatSelector;
