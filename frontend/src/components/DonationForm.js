import React, { useState, useEffect } from 'react';
import './Form.css';

function DonationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    amount: '',
    message: '',
    ngoId: '',
    age: '' // Added age field
  });

  const [ngos, setNgos] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [showTotalDonations, setShowTotalDonations] = useState(false);
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    phone: null,
    address: null,
    amount: null,
    age: null // Added age field
  });

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

  const fetchTotalDonations = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/donations/total');
      if (response.ok) {
        const data = await response.json();
        setTotalDonations(data.totalAmount);
      } else {
        console.error('Failed to fetch total donations');
      }
    } catch (error) {
      console.error('Error fetching total donations:', error);
    }
  };

  const validateName = () => {
    if (!formData.name.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: 'Name is required.'
      }));
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: 'Name can only contain letters and spaces.'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: null
      }));
    }
  };

  const validateEmail = () => {
    if (!formData.email.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Email is required.'
      }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Invalid email address.'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: null
      }));
    }
  };

  const validatePhone = () => {
    if (!formData.phone.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        phone: 'Phone number is required.'
      }));
    } else if (!/^\d{10}$/.test(formData.phone)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        phone: 'Phone number must be exactly 10 digits.'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        phone: null
      }));
    }
  };

  const validateAddress = () => {
    if (!formData.address.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        address: 'Address is required.'
      }));
    } else if (!/^[a-zA-Z0-9\s,.-]+$/.test(formData.address)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        address: 'Address can contain letters, numbers, and basic punctuation.'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        address: null
      }));
    }
  };

  const validateAmount = () => {
    if (!formData.amount.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        amount: 'Donation amount is required.'
      }));
    } else if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        amount: 'Donation amount must be greater than 0.'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        amount: null
      }));
    }
  };

  const validateAge = () => {
    if (!formData.age.trim()) {
      setErrors(prevErrors => ({
        ...prevErrors,
        age: 'Age is required.'
      }));
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        age: 'Age must be a positive number.'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        age: null
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Perform validation on change
    switch (name) {
      case 'name':
        validateName();
        break;
      case 'email':
        validateEmail();
        break;
      case 'phone':
        validatePhone();
        break;
      case 'address':
        validateAddress();
        break;
      case 'amount':
        validateAmount();
        break;
      case 'age':
        validateAge();
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form before submitting
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:8080/api/donations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message); // Display the success message from the server
        } else {
          alert('Failed to submit donation.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please fill in all required fields correctly.');
    }
  };

  const validateForm = () => {
    validateName();
    validateEmail();
    validatePhone();
    validateAddress();
    validateAmount();
    validateAge();

    // Check if there are any errors in the form
    return !Object.values(errors).some(error => error !== null);
  };

  const handleShowTotalDonations = () => {
    setShowTotalDonations(true);
    fetchTotalDonations();
  };

  return (
    <div id="donate" className="form-section">
      <h2>Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={validateName} required />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={validateEmail} required />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={validatePhone} required />
        {errors.phone && <p className="error">{errors.phone}</p>}
        
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} onBlur={validateAddress} required />
        {errors.address && <p className="error">{errors.address}</p>}
        
        <label htmlFor="amount">Donation Amount</label>
        <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} onBlur={validateAmount} required />
        {errors.amount && <p className="error">{errors.amount}</p>}
        
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} onBlur={validateAge} required />
        {errors.age && <p className="error">{errors.age}</p>}
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
        
        <label htmlFor="ngoId">Select NGO</label>
        <select id="ngoId" name="ngoId" value={formData.ngoId} onChange={handleChange} required>
          <option value="">Select an NGO</option>
          {ngos.map(ngo => (
            <option key={ngo.id} value={ngo.id}>{ngo.name}</option>
          ))}
        </select>
        
        
        <button type="submit">Submit</button>
      </form>

      <div className="total-donations-section">
        <button onClick={handleShowTotalDonations}>Show Total Donations</button>
        {showTotalDonations && <p>Total Donations: Rs{totalDonations}</p>}
      </div>
    </div>
  );
}

export default DonationForm;
