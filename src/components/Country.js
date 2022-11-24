import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/countryCard.css';
import { useDispatch, useSelector } from 'react-redux';
import CityCard from './CityCard';
import { getAllCities } from '../redux/countries/cities';
import { getCountries } from '../redux/countries/countries';

const Country = () => {
  const dispatch = useDispatch();
  const { continent, country } = useParams();
  const allCities = useSelector((state) => state.citiesReducer);
  const selectedCities = allCities.length !== 0
    ? allCities.filter((item) => (item.country === country))[0].cities.filter((city, i) => (i < 10))
    : dispatch(getAllCities());

  const continentCountries = useSelector((state) => state.countriesReducer[continent]);
  const selectedCountry = continentCountries
    ? continentCountries.filter((item) => (item.name === country))[0]
    : dispatch(getCountries());
  const { name, flag } = selectedCountry;
  return (
    <>
      {!allCities.length === 0 && <h1>...loading</h1>}
      {allCities.length !== 0 && (
        <div className="countrySection">
          <img alt={name} src={flag} />
          <div>{name}</div>
          <ul>
            {selectedCities.map((city) => (
              <CityCard key={city.name} countryName={country} cityName={city.name} />
            ))}
          </ul>
        </div>
      )}
    </>

  );
};

export default Country;
