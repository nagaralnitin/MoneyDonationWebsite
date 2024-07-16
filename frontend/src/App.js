//app.js
import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import DonationForm from './components/DonationForm';
import ContactForm from './components/ContactForm';
import NGOList from './components/NGOList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section title="Zero Hunger" text="Let's work together to end hunger. Your donation can make a difference in the lives of those in need." />
      <Section title="The Impact of Hunger" text="Hunger affects millions of people around the world. It can lead to malnutrition, illness, and stunted growth in children. By donating to our cause, you can help provide nutritious meals to those in need and make a positive impact on their lives." />
      <Section title="How You Can Help" text="There are many ways to support our mission to end hunger. You can donate funds to help us purchase food for those in need, volunteer at a local food bank, or organize a food drive in your community. Together, we can make a difference." />
      <DonationForm />
      <ContactForm />
      <NGOList />
    </div>
  );
}

export default App;
