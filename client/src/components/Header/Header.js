import React from "react";
import './style.css';

function Header() {
  return (
    <section className="header">
      <img className="webLogo" src="/res/logo-1.png"></img>
      <div className="searchBar">
        <input className="searchInput" type="text" placeholder="Search for a course" name="search"/>
        <button className="searchButton" type="submit"><i className="fa fa-search"></i></button>
      </div>
      <span className="loginButton">Login</span>
      <span className="joinNowButton">Join now</span>

    </section>
  );
}

export default Header;
