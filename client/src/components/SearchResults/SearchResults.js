import './SearchResults.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const SearchResults = ({ time, data }) => {
  const [state, setState] = useState({ courses: data.results, selectedCourse: null, error: false });
  const { courses } = state;

  useEffect(() => { setState(prevState => ({ ...prevState, courses: data.results })); }, [data]);
  useEffect(() => { console.log(state.selectedCourse); }, [state.selectedCourse]);
  if (!courses || !courses.length) {
    setState(prevState => ({ ...prevState, error: true }));
  }
  if (state.error) {
    return (
    <div className='no-results-container'>
      <h3>Sorry . . . We could not find anything</h3>
    </div>
    );
  }

  const results = courses.map(course => (
    <li key={course.id}>
        <img onClick={() => setState(prevState => ({ ...prevState, selectedCourse: course.id }))} src={course.image_240x135} />
      <div className='description'>
          <h2 >{course.title}</h2>
        <h3>{course.headline}</h3>
        <span className='statistics'>
          Lectures: {course.num_lectures} ·· Students: {course.num_subscribers}
        </span>
        <a href={course.url}>
          <span className='udemy-link'>View on udemy</span>
        </a>
      </div>
    </li>
  ));


  return (
    <div className='results-container'>
      <span className='results-count'>{`${data.count} results found in ${time / 1000} Seconds`}</span>
      <ul className='results-list'>{results}</ul>
    </div>
  );
};

export default SearchResults;
