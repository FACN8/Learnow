import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
  const [searchTerm, setSearchTerm] = React.useState(null);
  const handleLink = () => {
    if (!searchTerm || !searchTerm.trim()) {
      return;
    }
    return `/search/${searchTerm.trim()}`;
  };
  return (
    <section className='header'>
      <div style={{ display: 'flex' }}>
        <Link className='img-link' to={'/'}>
          <img alt='logo' className='webLogo' src='/res/logo-1.png'></img>
        </Link>

        <div className='searchBar'>
          <input
            onChange={e => setSearchTerm(e.target.value)}
            className='searchInput'
            type='text'
            placeholder='Search for a course'
            name='search'
          />

          <Link to={handleLink}>
            <button className='searchButton' type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Link to={'/'}>
          <span className='loginButton'>Login</span>
        </Link>
        <Link to={'/'}>
          <span className='joinNowButton'>Join now</span>
        </Link>
      </div>
    </section>
  );
}

export default Header;
