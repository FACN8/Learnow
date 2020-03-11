
import './Search.css';
import React, { useState, useEffect } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Spinner from '../Spinner/Spinner';
import get from '../../utils/axiosGet';

const Search = props => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState(null);
  const [term, setTerm] = useState(props.match.params.term);
  const reqTime = React.useRef(0);
  const apiBase = 'https://www.udemy.com/api-2.0';
  useEffect(() => { setTerm(props.match.params.term); }, [props.match.params]);
  useEffect(() => {
    reqTime.current = new Date();
    const URL = `https://cors-anywhere.herokuapp.com/${apiBase}/courses/?search=${term}`;
    setLoading(true);
    get(URL)
      .then(res => {
        reqTime.current = new Date() - reqTime.current;
        setLoading(false);
        setError(null);
        setSearchResult(res);
      })
      .catch(err => {
        setError(err);
      });
  }, [term]);


  if (error) return <h2>Unexpected error happened..</h2>;

  if (loading) return Spinner();
  if (searchResult) {
    return <SearchResults time={reqTime.current} data={searchResult.data} />;
  }
  return Spinner();
};

export default Search;