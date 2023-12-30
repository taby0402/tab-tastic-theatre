//Displays a summary of selected seats and total price before checkout.
// TicketSummary.js
import React from 'react';
import styled from 'styled-components';

// Styled components for the ticket summary
const SummaryWrapper = styled.div`
  /* Ticket summary wrapper styles */
`;

const SummaryInfo = styled.div`
  /* Summary information styles */
`;

const Total = styled.div`
  /* Total styles */
`;

const TicketSummary = ({ selectedSeats }) => {
    const ticketPrice = 10; // Replace with actual ticket price
    const totalAmount = selectedSeats.length * ticketPrice;

    return (
        <SummaryWrapper>
            <h3>Ticket Summary</h3>
            <SummaryInfo>
                <p>Selected Seats: {selectedSeats.join(', ')}</p>
                <p>Price per ticket: ${ticketPrice}</p>
            </SummaryInfo>
            <Total>Total Amount: ${totalAmount}</Total>
        </SummaryWrapper>
    );
}

export default TicketSummary;
