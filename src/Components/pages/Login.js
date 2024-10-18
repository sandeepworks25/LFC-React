import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "./../../Images/IDI-removebg-preview.png";
import base_api_url from './../components/config';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${base_api_url}/lfclogin?username=${username}&pwd=${password}`);
      const res = response.data.response.data;
      if (res[0].status === 1) {
        navigate('/home');
      } else {
        setErrorMsg(res[0].errorMsg);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMsg('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className="container">
        <img className="logo" src={logo} alt = "logo"/>
        <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
      </div>
      <div className="right" />
    </div>
  );
}

export default Login;
