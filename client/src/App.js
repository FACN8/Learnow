import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';

import WebDescription from './components/WebDescription/WebDescription';
import OurServices from './components/OurServices/OurServices';
import SearchResults from './components/SearchResults/SearchResults';
import Search from './components/Search/Search';
import CoursePage from './pages/CoursePage'


function App() {
  return (
    <div>
    <Router>
    <Header/>
          <Switch>
            <Route path="/coursePage">
              <CoursePage />
            </Route>
            <Route path="/">
              <WebDescription/>
              <OurServices/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
