import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import WebDescription from './components/WebDescription/WebDescription';
import OurServices from './components/OurServices/OurServices';
import SearchResults from './components/SearchResults/SearchResults';
import Search from './components/Search/Search';

function App() {
  return (
    <div>
    <Header/>
    <Search/>
    </div>
  );
}

export default App;
