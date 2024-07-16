//contactform
import React, { useState } from 'react';
import './Form.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contacts', {
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
        alert('Failed to submit contact message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Full Name</label>
        <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="contact-email">Email</label>
        <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;