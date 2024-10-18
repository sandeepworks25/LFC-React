import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import EventSelect from '../components/Regdump/EventSelect';
import base_api_url from './../components/config';

function UploadAtt() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.post(`${base_api_url}/getPartnerEventList?partner_id=0`);
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
        <div className="UploadAtt-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="UploadAtt-data right-div">
                <Header />
                <h1 className="heading">Upload Attendance Data</h1>
                <div className="EventSelect">
                    <EventSelect events={events} onSelect={handleEventSelect} />
                </div>
            </div>
        </div>
    );
}

export default UploadAtt;