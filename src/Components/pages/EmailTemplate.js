import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import UpdateTemplate from '../components/Masters/UpdateTemplate';
import AddTemplate from '../components/Masters/AddTemplate';
import base_api_url from './../components/config';
function EmailTemplate() {
    const [isUpdateTemplateModalVisible, setUpdateTemplateModalVisible] = useState(false);
    const [isAddTemplateModalVisible, setAddTemplateModalVisible] = useState(false);

    const handleUpdateTemplateClick = () => {
        setUpdateTemplateModalVisible(true);
    };

    const handleAddTemplateClick = () => {
        setAddTemplateModalVisible(true);
    };

    const handleCloseUpdateTemplateModal = () => {
        setUpdateTemplateModalVisible(false);
    };

    const handleCloseAddTemplateModal = () => {
        setAddTemplateModalVisible(false);
    };

    return (
        <div className="EmailTemplate-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="EmailTemplate-data right-div">
                <Header />
                <h1 className="heading">Email Templates</h1>

                <div className="data-btn-grp">
                    <button className="data-btn" onClick={handleAddTemplateClick}>Add Template</button>
                    <button className="data-btn" onClick={handleUpdateTemplateClick}>Update Template</button>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th style={{ width: "030px", maxWidth: "030px" }}>Id</th>
                            <th style={{ width: "120px", maxWidth: "120px" }}>Short Name</th>
                            <th style={{ width: "150px", maxWidth: "150px" }}>From Name</th>
                            <th style={{ width: "200px", maxWidth: "200px" }}>From Email</th>
                            <th style={{ width: "230px", maxWidth: "230px" }}>Subject</th>
                            <th style={{ width: "310px", maxWidth: "310px" }}>Template</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Add rows dynamically here */}
                    </tbody>
                </table>
            </div>

            <UpdateTemplate isVisible={isUpdateTemplateModalVisible} onClose={handleCloseUpdateTemplateModal} />
            <AddTemplate isVisible={isAddTemplateModalVisible} onClose={handleCloseAddTemplateModal} />
        </div>
    );
}

export default EmailTemplate;
