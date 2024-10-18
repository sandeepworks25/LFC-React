import React from 'react';
import './../../../Components/pages/Regdump.css';
const EventgroupSelect = ({ events, onSelect }) => {
  return (
    <div className="eventSelect">
      <label className="label" htmlFor="eventgroup">Event Series</label>
      <select id="eventgroup" className="form-select" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select Event Series</option>
        {events.map(event => (
          <option key={event.id} value={event.id}>{event.name}</option>
        ))}
      </select>
    </div>
  );
};

export default EventgroupSelect;

// Not Complete Yet