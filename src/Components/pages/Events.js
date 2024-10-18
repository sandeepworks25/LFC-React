import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import EventSelect from "../components/Regdump/EventSelect";
import base_api_url from './../components/config';


function Events() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.post(`${base_api_url}/getEventList`);
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

    return(
        <div className="events-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="events-data right-div">
                <Header />
                <h1 className="heading">Events Data</h1>
                <div className="EventSelect">
                    <EventSelect events={events} onSelect={handleEventSelect} />
                </div>
                <table>
                    <tr>
                        
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Events;