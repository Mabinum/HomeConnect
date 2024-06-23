import React, { useState } from 'react';

function Management() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [carNumber, setCarNumber] = useState('');
    const [reservedSeat, setReservedSeat] = useState('');

    const handleReservation = (selectedSeat) => {
        // Handle reservation logic here (e.g., send to server, update state)
        setReservedSeat(selectedSeat); // Store selected seat information
        console.log('Reservation completed:', { name, phoneNumber, carNumber, selectedSeat });
    };

    return (
        <div>
            <h2>Management Page</h2>
            <p>Selected Seat: {reservedSeat}</p>

            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Phone Number:</label>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <label>Car Number:</label>
            <input
                type="text"
                value={carNumber}
                onChange={(e) => setCarNumber(e.target.value)}
            />
            <br />
        </div>
    );
}

export default Management;