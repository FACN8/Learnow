import React from 'react';

import SelectedCourse from '../components/SelectedCourse/SelectedCourse';


function CoursePage({ state, setState }) {
  const course = state.selectedCourse;
  console.log(course);
  return (
    <div>
    <SelectedCourse 
      state={state}
      setState={setState}
    />
    </div>
  );
}

export default CoursePage;
