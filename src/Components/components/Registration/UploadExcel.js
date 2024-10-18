import React, { useState } from 'react';
import axios from 'axios';
import './UploadExcel.css';
import base_api_url from './../../components/config';

function UploadExcel({ isVisible, onClose, event_id }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('excelfile', file);
        formData.append('event_id', event_id);

        try {
            const response = await axios.post(`${base_api_url}/importExcelSingleEntityType`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert(response.data.message);
        } catch (error) {
            alert('Error uploading file');
        }

        onClose();
    };

    if (!isVisible) return null;

    return (
        <div className="UploadExcel-overlay">
            <div className="UploadExcel-content">
                <h2 className="UploadExcel-heading">Upload File</h2>
                <input
                    className="UploadExcel-input"
                    type="file"
                    accept=".xls, .xlsx"
                    onChange={handleFileChange}
                    name="excelfile"
                />
                <button className="UploadExcel-btn" onClick={handleUpload}>Upload</button>
                <button className="UploadExcel-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default UploadExcel;
