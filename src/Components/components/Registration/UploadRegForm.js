import React, { useState } from 'react';
import axios from 'axios';
import './UploadExcel.css';
import base_api_url from './../../components/config';

function UploadRegForm({ isVisible, onClose, event_id }) {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        college: '',
        course: '',
        specialization: '',
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
            const response = await axios.post(`${base_api_url}/importRegSingleData`, {
                ...formData,
                event_id,
            });

            alert(response.data.message);
        } catch (error) {
            alert('Error uploading data');
        }

        onClose();
    };

    if (!isVisible) return null;

    return (
        <div className="UploadExcel-overlay">
            <div className="UploadExcel-content">
                <h2 className="UploadExcel-heading">Add Registration</h2>
                <input
                    className="reg-input"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Registration First Name"
                />
                <input
                    className="reg-input"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Registration Last Name"
                />
                <input
                    className="reg-input"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Registration Email"
                />
                <input
                    className="reg-input"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
                <input
                    className="reg-input"
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="College"
                />
                <input
                    className="reg-input"
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="Course"
                />
                <input
                    className="reg-input"
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Specialization"
                />
                <br></br>
                <button className="UploadExcel-btn" onClick={handleUpload}>Add</button>
                <button className="UploadExcel-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default UploadRegForm;
