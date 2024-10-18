import React, { useState } from 'react';
import axios from 'axios';
import './Masters.css';
import base_api_url from './../../components/config';

function AddEvent({ isVisible, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        startdate: '',
        starttime: '',
        enddate: '',
        endtime: '',
        sessionmode: '',
        partner_id: '',
        venue: '',
        eventgroup_id: '',
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
                <h2 className="UploadExcel-heading">Add Event</h2>
                
                <label>
                    Event Name
                    <input
                        className="reg-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
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
                    Partner ID
                    <input
                        className="reg-input"
                        type="number"
                        name="partner_id"
                        value={formData.partner_id}
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
                
                <label>
                    Event Group ID
                    <input
                        className="reg-input"
                        type="number"
                        name="eventgroup_id"
                        value={formData.eventgroup_id}
                        onChange={handleChange}
                        required
                    />
                </label>
                
                <br />
                <button className="UploadExcel-btn" onClick={handleUpload}>Add</button>
                <button className="UploadExcel-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default AddEvent;
