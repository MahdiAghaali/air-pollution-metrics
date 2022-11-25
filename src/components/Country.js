import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/country.css';
import { useDispatch, useSelector } from 'react-redux';
import CityCard from './CityCard';
import { getAllCities } from '../redux/countries/cities';
import { getCountries } from '../redux/countries/countries';

const Country = () => {
  const dispatch = useDispatch();
  const { continent, country } = useParams();

  const continentCountries = useSelector((state) => state.countriesReducer[continent]);
  const selectedCountry = continentCountries
    ? continentCountries.filter((item) => (item.name === country))[0]
    : dispatch(getCountries());
  const { name, flag } = selectedCountry;

  const allCities = useSelector((state) => state.citiesReducer);

  const [start, setStart] = useState(0);

  const [selectedCities, setSelectedCities] = useState(
    allCities.length !== 0
      ? allCities.filter((item) => (item.country === country))[0]
        .cities.filter((city, i) => (i >= start && i < start + 10))
      : dispatch(getAllCities()),
  );

  const calcNewRender = () => {
    const inputValue = document.getElementById('filterCities').value.toUpperCase();
    if (inputValue) {
      setSelectedCities(
        allCities.length !== 0
          ? allCities.filter((item) => (item.country === country))[0]
            .cities.filter((city) => (city.name.toUpperCase().indexOf(inputValue) > -1))
            .filter((city, i) => ((i >= start && i < start + 10)))
          : dispatch(getAllCities()),
      );
    } else {
      setSelectedCities(
        allCities.length !== 0
          ? allCities.filter((item) => (item.country === country))[0]
            .cities.filter((city, i) => (i >= start && i < start + 10))
          : dispatch(getAllCities()),
      );
    }
  };

  const nextPage = () => {
    setStart(start + 10);
    calcNewRender();
  };

  const prevPage = () => {
    setStart(start - 10);
    calcNewRender();
  };

  const searchCity = () => {
    calcNewRender();
  };

  return (
    <section id="country">
      <img alt={name} src={flag} />
      <h2>{name}</h2>
      <h3>{`Cities: ${allCities.length}`}</h3>
      <input id="filterCities" onInput={() => searchCity()} type="text" placeholder="Find a city" />
      {!allCities.length === 0 && <h1>loading...</h1>}
      {allCities.length !== 0 && (
        <div className="countrySection">
          <ul>
            {!selectedCities && (<>please wait</>)}
            {selectedCities && selectedCities.map((city) => (
              <CityCard key={city.name} countryName={country} cityName={city.name} />
            ))}
          </ul>
        </div>
      )}
      <nav>
        <button type="button" id="btnPrev" onClick={() => prevPage()}>Prev</button>
        <button type="button" id="btnNext" onClick={() => nextPage()}>Next</button>
      </nav>
    </section>

  );
};

export default Country;
