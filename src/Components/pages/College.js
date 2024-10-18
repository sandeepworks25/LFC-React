import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import base_api_url from './../components/config';

function College() {

    return (
        <div className="College-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="College-data right-div">
                <Header />
                <h1 className="heading">Manage College</h1>
            </div>
        </div>
    );
}

export default College;