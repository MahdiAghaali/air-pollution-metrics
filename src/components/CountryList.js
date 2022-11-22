import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';
import '../Styles/countryList.css';

const CountryList = () => {
  const { continent } = useParams();
  const countries = useSelector((state) => state.countriesReducer[continent]);
  return (
    <section>
      <ul id="countryList">
        {
          countries.map((country) => {
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
  );
};

export default CountryList;
