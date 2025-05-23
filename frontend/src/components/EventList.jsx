import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(res => setEvents(res.data));
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.map(ev => (
        <div key={ev._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
          <p>{new Date(ev.date).toDateString()}</p>
          <p>{ev.location}</p>
          <p>Tickets Left: {ev.ticketsAvailable} | Price: ₹{ev.price}</p>
        </div>
      ))}
    </div>
  );
}
