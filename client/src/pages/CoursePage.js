import React from 'react';

import SelectedCourse from '../components/SelectedCourse/SelectedCourse';


function CoursePage({ state, setState }) {
  const course = state.selectedCourse;
  return (
    <div>
    <SelectedCourse id = {1} title = {course.title}
      headline = {course.headline}
      url = {course.url}
      image = {course.image_240x135}

      num_lectures = {14} num_subscribers = {566}
      state={state}
      setState={setState}
    />
    </div>
  );
}

export default CoursePage;
