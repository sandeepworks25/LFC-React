import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import EventSelect from '../components/Regdump/EventSelect';
import UploadExcel from '../components/Registration/UploadExcel';
import UploadRegForm from '../components/Registration/UploadRegForm';
import base_api_url from './../components/config';

function Registration() {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState('');
    const [isExcelModalVisible, setExcelModalVisible] = useState(false);
    const [isRegFormModalVisible, setRegFormModalVisible] = useState(false);

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

    const handleExcelUploadClick = () => {
        setExcelModalVisible(true);
    };

    const handleRegFormClick = () => {
        setRegFormModalVisible(true);
    };

    const handleCloseExcelModal = () => {
        setExcelModalVisible(false);
    };

    const handleCloseRegFormModal = () => {
        setRegFormModalVisible(false);
    };

    const handleEventSelect = (eventId) => {
        setSelectedEvent(eventId);
    };

    return (
        <div className="Registration-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="Registration-data right-div">
                <Header />
                <h1 className="heading">Manage Registration</h1>
                <div className="RegistrationEventSelect">
                    <EventSelect events={events} onSelect={handleEventSelect} />
                </div>
                <div className="data-btn-grp">
                    <button className="data-btn" onClick={handleRegFormClick}>Add</button>
                    <button className="data-btn">Edit</button>
                    <button className="data-btn" onClick={handleExcelUploadClick}>Upload File</button>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: "130px" }}>Registration First Name</th>
                            <th style={{ width: "130px" }}>Registration Last Name</th>
                            <th style={{ width: "230px" }}>Registration Email</th>
                            <th style={{ width: "100px" }}>Phone</th>
                            <th style={{ width: "210px" }}>University/Organization</th>
                            <th style={{ width: "70px" }}>Course</th>
                            <th style={{ width: "170px" }}>Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add rows dynamically here */}
                    </tbody>
                </table>
            </div>

            <UploadExcel isVisible={isExcelModalVisible} onClose={handleCloseExcelModal} event_id={selectedEvent} />
            <UploadRegForm isVisible={isRegFormModalVisible} onClose={handleCloseRegFormModal} event_id={selectedEvent} />
        </div>
    );
}

export default Registration;
