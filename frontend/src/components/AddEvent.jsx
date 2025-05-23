import React, { useState } from 'react';
import axios from 'axios';

export default function AddEvent() {
  const [formData, setFormData] = useState({
    title: '', description: '', date: '', location: '', ticketsAvailable: 0, price: 0
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/events', formData)
      .then(() => alert("Event Created"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} /><br />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea><br />
      <input name="date" type="date" onChange={handleChange} /><br />
      <input name="location" placeholder="Location" onChange={handleChange} /><br />
      <input name="ticketsAvailable" type="number" placeholder="Tickets" onChange={handleChange} /><br />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} /><br />
      <button type="submit">Add Event</button>
    </form>
  );
}
