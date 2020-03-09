import './SearchResults.css';
import React from 'react';

// const courses = [
//   {
//     "id": 1,
//     "title": "Algebra I",
//     "headline":"The entry course to learn algebra",
//     "url": "https://www.udemy.com/course/algebra-i-beginning-algebra/",
//     "image_240x135":"https://i.udemycdn.com/course/240x135/34267_f952_15.jpg",
//     "num_lectures":14,
//     "num_subscribers":1566
//   },
//   {
//       "id": 2,
//       "title": "How To Make Money Online In 2020 Without Investment",
//       "headline":"Easy ways to Generate a Steady Income from Trusted Websites online",
//       "url": "https://i.udemycdn.com/course/240x135/1687236_bab3.jpg",
//       "image_240x135":"https://i.udemycdn.com/course/240x135/1687236_bab3.jpg",
//       "num_lectures":60,
//       "num_subscribers":1354
//     }
//   ];

const SearchResults = ({courses}) => {
  if (!courses || !courses.length) {
    return (
    <div className='no-results-container'>
      <br></br><br></br>
      <h3>Sorry .. No results found.</h3>
    </div>
    );
  }

  const results = courses.map((course) => (
    <li key={course.id} >
      <img src={course.image_240x135}/>
      <div className='description'>
      <a href={course.url}><h2>{course.title}</h2></a>
  <h3>{course.headline}</h3>
  <span className='statistics'>Lectures: {course.num_lectures}  ··   Students: {course.num_subscribers}</span>
  <br></br>
  <a href={course.url}><span className='udemy-link'>View on udemy</span></a>
  </div>
    </li>
  ));

  return (
  <div className='results-container' >
  <ul className='results-list'>{results}</ul>
  </div>
  );
};


export default SearchResults;
