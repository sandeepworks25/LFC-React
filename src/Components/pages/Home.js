import React from "react";
import Menu from './../components/Menu';
import Header from "./../components/Header";

function Home() {
  return (
    <div className="home-page">
      <div id="menu" className="menu">
        <Menu />
      </div>
      <div className="home-data right-div">
        <Header />
        <h1 className="heading">Welcome Name</h1>
      </div>
    </div>
  );
}

export default Home;
