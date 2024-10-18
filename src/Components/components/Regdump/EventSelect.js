import React from 'react';
import './../../../Components/pages/Regdump.css';
const EventSelect = ({ events, onSelect }) => {
  return (
    <div className="eventSelect">
      <label className="label" htmlFor="event">Event</label>
      <select id="event" className="form-select" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select Event</option>
        {events.map(event => (
          <option key={event.id} value={event.id}>{event.name}</option>
        ))}
      </select>
    </div>
  );
};

export default EventSelect;
