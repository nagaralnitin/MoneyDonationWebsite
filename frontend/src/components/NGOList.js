import React, { useEffect, useState } from 'react';
import './NGOList.css';
import NGODonations from './NGODonations'; // Import the new component

function NGOList() {
  const [ngos, setNgos] = useState([]);
  const [selectedNGO, setSelectedNGO] = useState(null);

  useEffect(() => {
    fetchNGOs();
  }, []);

  const fetchNGOs = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/ngos');
      if (response.ok) {
        const data = await response.json();
        setNgos(data);
      } else {
        console.error('Failed to fetch NGOs');
      }
    } catch (error) {
      console.error('Error fetching NGOs:', error);
    }
  };

  const handleViewDonations = (ngo) => {
    setSelectedNGO(ngo);
  };

  return (
    <div id="ngos" className="ngo-list">
      <h2>Our Partner NGOs</h2>
      <ul>
        {ngos.map(ngo => (
          <li key={ngo.id}>
            <h3>{ngo.name}</h3>
            <p>{ngo.mission}</p>
            <p><strong>Address:</strong> {ngo.address}</p>
            <p><strong>Phone:</strong> {ngo.phone}</p>
            <p><strong>Email:</strong> {ngo.email}</p>
            <button onClick={() => handleViewDonations(ngo)}>View Donations</button>
          </li>
        ))}
      </ul>
      {selectedNGO && (
        <NGODonations ngo={selectedNGO} onClose={() => setSelectedNGO(null)} />
      )}
    </div>
  );
}

export default NGOList;
