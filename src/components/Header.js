import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/header.css';

const Header = () => (
  <header>
    <Link to="/"><img alt="logo" src="worldmap-mobile.png" /></Link>
    <h1>
      Api Pollution Metrics
    </h1>
  </header>
);

export default Header;
