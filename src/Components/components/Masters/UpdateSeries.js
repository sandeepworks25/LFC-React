import React, { useState } from 'react';
import axios from 'axios';
import './Masters.css';
import base_api_url from './../../components/config';

function UpdateSeries({ isVisible, onClose }) {
    const [formData, setFormData] = useState({
        notes: '',
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
            const response = await axios.post(`${base_api_url}/addUpdateSeries`, {
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
                <h2 className="UploadExcel-heading">Update Event Series</h2>
                
                <label>
                    Notes
                    <input
                        className="reg-input"
                        type="text"
                        name="notes"
                        value={formData.notes}
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

export default UpdateSeries;
