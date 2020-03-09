import React from "react";
import './Header.css';
import CoursePage from '../../pages/CoursePage'

import {
  Link
} from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <img className="webLogo" src="/res/logo-1.png"></img>
      <div className="searchBar">
        <input className="searchInput" type="text" 
          placeholder="Search for a course" name="search"/>
          
        <Link to="/coursePage"><button className="searchButton" type="submit">
          <i className="fa fa-search"></i></button>
        </Link>
      </div>
      <span className="loginButton">Login</span>
      <span className="joinNowButton">Join now</span>

    </section>
  );
}

export default Header;
