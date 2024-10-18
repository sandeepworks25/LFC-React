import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import EventgroupSelect from '../components/Regdump/EventgroupSelect';
import base_api_url from './../components/config';

function SpeakerCert() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.post(`${base_api_url}/getEventgroupList?`);
                setEvents(response.data.response.data);
            } catch (error) {
                console.error('Error fetching events', error);
            }
        };

        fetchEvents();
    }, []);

    const handleEventSelect = (eventId) => {
        setSelectedEvent(eventId);
    };

    return (
        <div className="Speaker-Certificate-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="Certificate-data right-div">
                <Header />
                <h1 className="heading">Manage Speaker Certificates</h1>
                <div className="EventSelect">
                    <EventgroupSelect events={events} onSelect={handleEventSelect} />
                </div>
                <button className='task-btn'>Generate Certificate</button>
            </div>
        </div>
    );
}

export default SpeakerCert;