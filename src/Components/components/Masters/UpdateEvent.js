import React, { useState } from 'react';
import axios from 'axios';
import './Masters.css';
import base_api_url from './../../components/config';

function UpdateEvent({ isVisible, onClose }) {
    const [formData, setFormData] = useState({
        startdate: '',
        starttime: '',
        enddate: '',
        endtime: '',
        sessionmode: '',
        venue: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpload = async () => {
        try {
            const response = await axios.post(`${base_api_url}/addUpdateEvent`, {
                ...formData,
            });

            alert(response.data.message);
        } catch (error) {
            alert('Error uploading data: ' + (error.response ? error.response.data.message : error.message));
        }

        onClose();
    };

    if (!isVisible) return null;

    return (
        <div className="UploadExcel-overlay">
            <div className="UploadExcel-content">
                <h2 className="UploadExcel-heading">Update Event</h2>
                
                <label>
                    Start Date
                    <input
                        className="reg-input"
                        type="date"
                        name="startdate"
                        value={formData.startdate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Start Time
                    <input
                        className="reg-input"
                        type="time"
                        name="starttime"
                        value={formData.starttime}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    End Date
                    <input
                        className="reg-input"
                        type="date"
                        name="enddate"
                        value={formData.enddate}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    End Time
                    <input
                        className="reg-input"
                        type="time"
                        name="endtime"
                        value={formData.endtime}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Session Mode
                    <input
                        className="reg-input"
                        type="text"
                        name="sessionmode"
                        value={formData.sessionmode}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Venue
                    <input
                        className="reg-input"
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <button className="UploadExcel-btn" onClick={handleUpload}>Update</button>
                <button className="UploadExcel-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default UpdateEvent;
