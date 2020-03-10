import React from 'react';
import SelectedCourse from '../components/SelectedCourse/SelectedCourse';


function CoursePage() {
  return (
    <div>
    <SelectedCourse id = {1} title = "Algebra I"
      headline = "The entry course to learn algebra"
      url =  "https://www.udemy.com/course/algebra-i-beginning-algebra/"
      image = "https://i.udemycdn.com/course/240x135/34267_f952_15.jpg"
      num_lectures = {14} num_subscribers = {566}
    />
    </div>
  );
}

export default CoursePage;
