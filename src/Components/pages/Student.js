import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import base_api_url from './../components/config';

function Student() {

    return (
        <div className="Student-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="Student-data right-div">
                <Header />
                <h1 className="heading">Manage Students</h1>
            </div>
        </div>
    );
}

export default Student;