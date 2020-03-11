import React from 'react';

import SelectedCourse from '../components/SelectedCourse/SelectedCourse';



function CoursePage({ course }) {
  return (
    <div>

    <SelectedCourse id = {1} title = {course.title}
      headline = {course.headline}
      url = {course.url}
      image = {course.image_240x135}

      num_lectures = {14} num_subscribers = {566}
    />
    </div>
  );
}

export default CoursePage;
