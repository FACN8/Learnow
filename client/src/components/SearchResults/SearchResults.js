import './SearchResults.css';
import React from 'react';


const SearchResults = ({courses}) => {
  if (!courses || !courses.length) {
    return (
      <div className='no-results-container'>
        <h3>Sorry . . . We could not find anything</h3>
      </div>
    );
  }

  const results = courses.map(course => (
    <li key={course.id}>
      <img src={course.image_240x135} />
      <div className='description'>
        <a href={course.url}>
          <h2>{course.title}</h2>
        </a>
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
      <ul className='results-list'>{results}</ul>
    </div>
  );
};

export default SearchResults;
