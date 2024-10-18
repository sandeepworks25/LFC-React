import React, { useState } from 'react';
import axios from 'axios';
import './Masters.css';
import base_api_url from './../../components/config';

function AddTemplate({ isVisible, onClose }) {
    const [formData, setFormData] = useState({
        shortname: '',
        partner_id: '',
        fromname: '',
        fromemail: '',
        subject: '',
        template: '',
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
            const response = await axios.post(`${base_api_url}/addUpdateEmailTemplate`, {
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
                <h2 className="UploadExcel-heading">Add Template</h2>
                
                <label>
                    Short Name
                    <input
                        className="reg-input"
                        type="text"
                        name="shortname"
                        value={formData.shortname}
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
                    From Name
                    <input
                        className="reg-input"
                        type="text"
                        name="fromname"
                        value={formData.fromname}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    From Email
                    <input
                        className="reg-input"
                        type="text"
                        name="fromemail"
                        value={formData.fromemail}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Subject
                    <input
                        className="reg-input"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                
                <label>
                    Template
                    <input
                        className="reg-input"
                        type="text"
                        name="template"
                        value={formData.template}
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

export default AddTemplate;
