import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import UpdateEvent from "./../components/Masters/UpdateEvent";
import AddEvent from './../components/Masters/AddEvent';
import base_api_url from './../components/config';

function EventMaster() {
    const [isUpdateEventModalVisible, setUpdateEventModalVisible] = useState(false);
    const [isAddEventModalVisible, setAddEventModalVisible] = useState(false);

    const handleUpdateEventClick = () => {
        setUpdateEventModalVisible(true);
    };

    const handleAddEventClick = () => {
        setAddEventModalVisible(true);
    };

    const handleCloseUpdateEventModal = () => {
        setUpdateEventModalVisible(false);
    };

    const handleCloseAddEventModal = () => {
        setAddEventModalVisible(false);
    };


    return (
        <div className="EventMaster-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="EventMaster-data right-div">
                <Header />
                <h1 className="heading">Event Master</h1>
                
                <div className="data-btn-grp">
                    <button className="data-btn" onClick={handleAddEventClick}>Add Event</button>
                    <button className="data-btn" onClick={handleUpdateEventClick}>Update Event</button>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: "30px", maxWidth: "30px" }}>Id</th>
                            <th style={{ width: "280px", maxWidth: "280px" }}>Event Name</th>
                            <th style={{ width: "70px", maxWidth: "70px" }}>Start Date</th>
                            <th style={{ width: "100px", maxWidth: "100px" }}>Start Time</th>
                            <th style={{ width: "70px", maxWidth: "70px" }}>End Date</th>
                            <th style={{ width: "100px", maxWidth: "100px" }}>End Time</th>
                            <th style={{ width: "280px", maxWidth: "280px" }}>Series Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add rows dynamically here */}
                    </tbody>
                </table>
            </div>

            <UpdateEvent isVisible={isUpdateEventModalVisible} onClose={handleCloseUpdateEventModal} />
            <AddEvent isVisible={isAddEventModalVisible} onClose={handleCloseAddEventModal} />
        </div>
    );
}

export default EventMaster;
