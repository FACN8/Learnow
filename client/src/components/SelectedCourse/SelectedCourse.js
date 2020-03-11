import React from 'react';
import './SelectedCourse.css';

import {
  Link,
} from 'react-router-dom';

function SelectedCourse({
  id, title, headline, url, image,
  num_lectures, num_subscribers, state, setState,
}) {
  window.onbeforeunload = () => {
    console.log('backed');
    setState({ ...state, selectedCourse: null });
  };
  return (
    <div>
      <div className="greyBackGround">
        <h2 className="courseTitle">{title}</h2>
        <h3 className="courseDesc">{headline}</h3>
        <h4 className="courseLects">{num_lectures} lectures for this course</h4>
        <h4 className="courseSubs">{num_subscribers} students enrolled in this course</h4>
        <h4 className="courseURL">Visit course page on udemy <a style={{ color: 'wheat ' }} href={url}>HERE</a>.</h4>
        <img className="courseImage" src={image}/>
        <h3 onClick={() => setState({ ...state, selectedCourse: null })}>Return to result</h3>
      </div>

    </div>
  );
}

export default SelectedCourse;
