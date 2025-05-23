const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Event = require('./models/Event');
const Registration = require('./models/Registration');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/eventsystem');

// Add Event
app.post('/api/events', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

// Get All Events
app.get('/api/events', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Register for Event
app.post('/api/register', async (req, res) => {
  const registration = new Registration(req.body);
  await registration.save();

  await Event.findByIdAndUpdate(req.body.eventId, {
    $inc: { ticketsAvailable: -req.body.numberOfTickets },
  });

  res.json({ message: 'Registered Successfully' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
app.delete('/api/events/:id', async (req, res) => {
  constapp.delete('/api/events/:id', async (req, res) => {
  const eventId = req.params.id;
  try {
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
}); eventId = req.params.id;
  try {
    await Event.findByIdAndDelete(eventId);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error });
  }
});