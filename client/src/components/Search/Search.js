import './Search.css';
import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Spinner from '../Spinner/Spinner';
import get from '../../../src/utils/axiosGet';
const Search = () => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  if (loading) {
    return Spinner();
  }
};

export default Search;
