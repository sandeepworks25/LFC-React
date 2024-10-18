import React from "react";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Eventgroup from "./pages/Eventgroup";
import Registration from "./pages/Registration";
import UploadReg from "./pages/UploadReg";
import Regdump from "./pages/Regdump";
import Attendance from "./pages/Attendance";
import UploadAtt from "./pages/UploadAtt";
import Student from "./pages/Student";
import College from "./pages/College";
import User from "./pages/User";
import EventSeriesMaster from "./pages/EventSeriesMaster";
import EventMaster from "./pages/EventMaster";
import EmailTemplate from "./pages/EmailTemplate";
import StudCertificte from "./pages/StudCertificte";
import SpeakerCert from "./pages/SpeakerCert";
import Feedback from "./pages/feedback";
import UploadFeed from "./pages/UploadFeed";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Events" element={<Events />} />
        <Route exact path="/Eventgroup" element={<Eventgroup />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/UploadReg" element={<UploadReg />} />
        <Route exact path="/downloadReg" element={<Regdump />} />
        <Route exact path="/Attendance" element={<Attendance />} />
        <Route exact path="/UploadAtt" element={<UploadAtt />} />
        <Route exact path="/Student" element={<Student />} />
        <Route exact path="/College" element={<College />} />
        <Route exact path="/User" element={<User />} />
        <Route exact path="/EventSeriesMaster" element={<EventSeriesMaster />} />
        <Route exact path="/EventMaster" element={<EventMaster />} />
        <Route exact path="/EmailTemplate" element={<EmailTemplate />} />
        <Route exact path="/StudCertificte" element={<StudCertificte />} />
        <Route exact path="/SpeakerCert" element={<SpeakerCert />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/UploadFeed" element={<UploadFeed />} />
        <Route exact path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
