import React from "react";
import './SelectedCoursePage.css';

import {
  Link
} from "react-router-dom";

function SelectedCoursePage({id, title, headline, url, image,
 num_lectures, num_subscribers}){
  return (
    <div>
      <div className="greyBackGround">
        <h2 className="courseTitle">{title}</h2>
        <h3 className="courseDesc">{headline}</h3>
        <h4 className="courseLects">{num_lectures} lectures for this course</h4>
        <h4 className="courseSubs">{num_subscribers} students enrolled in this course</h4>
        <img className="courseImage" src={image}></img>
      </div>
      
    </div>
  );
}

export default SelectedCoursePage;
