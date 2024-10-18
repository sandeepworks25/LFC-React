import React from "react";
import Menu from './../components/Menu';
import Header from "./../components/Header";


function UploadReg() {
    return(
        <div className="uploadReg-page">
            <div className="menu">
                <Menu />
            </div>
            <div className="uploadReg-data right-div">
                <Header />
                <h1 className="heading">Upload Registration</h1>
            </div>
        </div>
    );
}

export default UploadReg;