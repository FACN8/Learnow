import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';

import WebDescription from './components/WebDescription/WebDescription';
import OurServices from './components/OurServices/OurServices';
import SearchResults from './components/SearchResults/SearchResults';
import Search from './components/Search/Search';
import CoursePage from './pages/CoursePage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResetPassword from './components/ResetPassword/ResetPassword';


const courses = [
  {
    id: 1,
    title: 'Algebra I',
    headline: 'The entry course to learn algebra',
    url: 'https://www.udemy.com/course/algebra-i-beginning-algebra/',
    image_240x135: 'https://i.udemycdn.com/course/240x135/34267_f952_15.jpg',
    num_lectures: 14,
    num_subscribers: 1566,
  },
  {
    id: 2,
    title: 'How To Make Money Online In 2020 Without Investment',
    headline:
      'Easy ways to Generate a Steady Income from Trusted Websites online',
    url: 'https://i.udemycdn.com/course/240x135/1687236_bab3.jpg',
    image_240x135: 'https://i.udemycdn.com/course/240x135/1687236_bab3.jpg',
    num_lectures: 60,
    num_subscribers: 1354,
  },
];

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:term/' component={Search} />
          <Route path='/coursePage' component={CoursePage} />
          <Route path='/Login' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/ResetPassword' component={ResetPassword} />
          <Route path='/'>
            <WebDescription />
            <OurServices />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
