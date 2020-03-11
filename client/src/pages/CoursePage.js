import React from 'react';
// import './coursePage.css';
import SelectedCoursePage from '../components/SelectedCoursePage/SelectedCoursePage';


function CoursePage({ course }) {
  console.log(this.course);
  return (
    <div>
    <SelectedCoursePage id = {1} title = {course.title}
      headline = {course.headline}
      url = {course.url}
      image = {course.image_240x135}
      num_lectures = {14} num_subscribers = {566}
    />
    </div>
  );
}

export default CoursePage;
