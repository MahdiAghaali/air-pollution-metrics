import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/countryCard.css';
import { useSelector } from 'react-redux';

const Country = () => {
  const { continent, country } = useParams();
  const selectedCountries = useSelector((state) => state.countriesReducer[continent]);
  const selectedCountry = selectedCountries.filter((item) => (item.name === country))[0];
  const { name, flag } = selectedCountry;
  return (
    <div className="countrySection">
      <img alt={name} src={flag} />
      <div>{name}</div>
    </div>
  );
};

export default Country;
