import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>
      Api Pollution Metrics
    </h1>
    <label htmlFor="countrySearch">
      <span>Search</span>
      <input id="countrySearch" type="text" />
    </label>
    <nav>
      <ul>
        <li>
          <Link to="/">List</Link>
        </li>
        <li>
          <Link to="/country">Country</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
