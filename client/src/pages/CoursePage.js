import React from 'react';

import SelectedCourse from '../components/SelectedCourse/SelectedCourse';
import SelectedCourseGroups from '../components/SelectedCourseGroups/SelectedCourseGroups';

function CoursePage({ state, setState }) {
  return (
    <div>
      <SelectedCourse 
      state={state} 
      setState={setState} 
      />
      <SelectedCourseGroups 
      state={state} 
      setState={setState} 
      />
    </div>
  );
}

export default CoursePage;
