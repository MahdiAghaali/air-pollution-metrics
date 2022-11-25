import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import '../Styles/countryList.css';

const CountryList = () => {
  const { continent } = useParams();
  const countries = useSelector((state) => state.countriesReducer[continent]);
  const [countryArray, setCountryArray] = useState(countries);
  const searchCountry = () => {
    const inputValue = document.getElementById('searchElement').value.toUpperCase();
    setCountryArray(countries.filter(
      (country) => (country.name.toUpperCase().indexOf(inputValue) > -1),
    ));
  };
  return (
    <>
      {!countries && <h1>Loading...</h1>}
      {countries
        && (
          <section id="countryList">
            <input type="text" id="searchElement" placeholder="Find a Country" onInput={() => searchCountry()} />
            <ul>
              {
                countryArray.map((country) => {
                  const { id, name, flag } = country;
                  return (
                    <li key={id}>
                      <NavLink to={`/continent/${continent}/country/${name}`}>
                        <CountryCard
                          name={name}
                          flag={flag}
                        />
                      </NavLink>
                    </li>
                  );
                })
              }
            </ul>
          </section>
        )}
    </>
  );
};

export default CountryList;
