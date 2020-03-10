import './Search.css';
import React, { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Spinner from '../Spinner/Spinner';
import get from '../../utils/axiosGet';

// import dontenv from 'dotenv';

// dontenv.config('../../../.env');
const Search = props => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState(null);
  const { term } = props.match.params;
  const apiBase = 'https://www.udemy.com/api-2.0';
  useEffect(() => {
    const URL = `${apiBase}/courses/?search=${term}`;
    setLoading(true);
    get(URL)
      .then(res => {
        setLoading(false);
        setError(null);
        setSearchResult(res);
      })
      .catch(err => {
        console.log(error);
        setError(err);
      });
  }, []);

  if (error) return <h2>Unexpected error happened..</h2>;

  if (loading) return Spinner();
  if (searchResult) return <searchResult courses={searchResult.results} />;
};

export default Search;
