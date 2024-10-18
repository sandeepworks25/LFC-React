import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import UpdateSeries from "./../components/Masters/UpdateSeries";
import AddSeries from './../components/Masters/AddSeries';
import base_api_url from './../components/config';

function EventSeriesMaster() {
    const [isUpdateSeriesModalVisible, setUpdateSeriesModalVisible] = useState(false);
    const [isAddSeriesModalVisible, setAddSeriesModalVisible] = useState(false);

    const handleUpdateSeriesClick = () => {
        setUpdateSeriesModalVisible(true);
    };

    const handleAddSeriesClick = () => {
        setAddSeriesModalVisible(true);
    };

    const handleCloseUpdateSeriesModal = () => {
        setUpdateSeriesModalVisible(false);
    };

    const handleCloseAddSeriesModal = () => {
        setAddSeriesModalVisible(false);
    };

    return (
        <div className="EventSeriesMaster-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="EventSeriesMaster-data right-div">
                <Header />
                <h1 className="heading">Event Series Master</h1>
                
                <div className="data-btn-grp">
                    <button className="data-btn" onClick={handleAddSeriesClick}>Add Series</button>
                    <button className="data-btn" onClick={handleUpdateSeriesClick}>Update Series</button>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: "50px", maxWidth: "50px" }}>Id</th>
                            <th style={{ width: "300px", maxWidth: "300px" }}>Event Series Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add rows dynamically here */}
                    </tbody>
                </table>
            </div>

            <UpdateSeries isVisible={isUpdateSeriesModalVisible} onClose={handleCloseUpdateSeriesModal} />
            <AddSeries isVisible={isAddSeriesModalVisible} onClose={handleCloseAddSeriesModal} />
        </div>
    );
}

export default EventSeriesMaster;
