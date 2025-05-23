import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    eventId: '', name: '', email: '', numberOfTickets: 1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/register', formData)
      .then(() => alert("Registered Successfully"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="eventId" placeholder="Event ID" onChange={handleChange} /><br />
      <input name="name" placeholder="Your Name" onChange={handleChange} /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="numberOfTickets" type="number" placeholder="Tickets" onChange={handleChange} /><br />
      <button type="submit">Register</button>
    </form>
  );
}
