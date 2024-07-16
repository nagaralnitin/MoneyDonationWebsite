import React, { useEffect, useState } from 'react';
import './NGODonations.css';

function NGODonations({ ngo, onClose }) {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, [ngo]);

  const fetchDonations = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/ngos/${ngo.id}/donations`);
      if (response.ok) {
        const data = await response.json();
        setDonations(data);
      } else {
        console.error('Failed to fetch donations');
      }
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  return (
    <div className="ngo-donations">
      <h2>Donations for {ngo.name}</h2>
      <ul>
        {donations.map(donation => (
          <li key={donation.id}>
            <p><strong>Name:</strong> {donation.name}</p>
            <p><strong>Amount:</strong> ₹{donation.amount}</p>
            <p><strong>Message:</strong> {donation.message}</p>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default NGODonations;
