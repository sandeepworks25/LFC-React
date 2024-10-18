import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './../components/Menu';
import Header from "./../components/Header";
import base_api_url from './../components/config';

function User() {

    return (
        <div className="User-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="User-data right-div">
                <Header />
                <h1 className="heading">Manage User</h1>
            </div>
        </div>
    );
}

export default User;