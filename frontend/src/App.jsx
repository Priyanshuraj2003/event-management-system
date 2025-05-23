import React from 'react';
import EventList from './components/EventList';
import AddEvent from './components/AddEvent';
import Register from './components/Register';

function App() {
  return (
    <div>
      <h1>Event Management System</h1>
      <AddEvent />
      <Register />
      <EventList />
    </div>
  );
}

export default App;
