// PaymentForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for the payment form
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* Form wrapper styles */
`;

const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* Input field styles */
`;

const PaymentButton = styled.button`
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* Payment button styles */
`;

const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentResponse, setPaymentResponse] = useState(null);

    // Function to fetch payment data on component mount (GET request)
    useEffect(() => {
        fetch('http://localhost:3001/payments/1') // Replace with your endpoint
            .then((response) => response.json())
            .then((data) => {
                setPaymentResponse(data);
            })
            .catch((error) => {
                console.error('Error fetching payment data:', error);
            });
    }, []);

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    const handleCvvChange = (e) => {
        setCvv(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const paymentData = {
            cardNumber,
            expiryDate,
            cvv,
        };

        // Send POST request to the json-server API
        fetch('http://localhost:3001/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Payment successful:', data);
                setPaymentResponse(data);
            })
            .catch((error) => {
                console.error('Error making payment:', error);
            });
    };

    return (
        <div>
            <h2>Make Payment</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Card Number:
                    <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
                </label>
                <label>
                    Expiry Date:
                    <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
                </label>
                <label>
                    CVV:
                    <input type="text" value={cvv} onChange={handleCvvChange} />
                </label>
                <button type="submit">Pay Now</button>
            </form>

            {/* Display payment response */}
            {paymentResponse && (
                <div>
                    <h3>Payment Response:</h3>
                    <pre>{JSON.stringify(paymentResponse, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
