import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="page-header">
            <h3 className="header-text">Welcome Kshitij</h3>
            <Link to={"/Profile"} className="profile-btn">Profile</Link>
        </div>
    );
}

export default Header;