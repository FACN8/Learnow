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
  const [page, setPage] = useState(+props.match.params.page);
  const reqTime = React.useRef(0);
  const apiBase = 'https://www.udemy.com/api-2.0';
  useEffect(() => {
    setSearchResult(null);
    setLoading(true);
    setTerm(props.match.params.term);
    setPage(+props.match.params.page);
  }, [props.match.params.term, props.match.params.page]);

  useEffect(() => {
    reqTime.current = new Date();
    // let URL = `https://cors-anywhere.herokuapp.com/${apiBase}/courses/?search=${term}&page=${page}&page_size=50`;
    let URL = `https://learnow-be.herokuapp.com/getcourses/?search=${term}&page=${page}&page_size=50`;

    if (window.location.hostname.includes('localhost')) {
      URL = `http://localhost:5000/getcourses/?search=${term}&page=${page}&page_size=50`;
    }

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
  }, [term, page]);

  if (error) return <h2>Unexpected error happened..</h2>;

  if (loading) return Spinner();
  if (searchResult) {
    return (
      <SearchResults
        time={reqTime.current}
        data={searchResult.data}
        setPage={setPage}
        page={page}
      />
    );
  }
  return Spinner();
};

export default Search;
