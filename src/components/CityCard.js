/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCityData } from '../redux/countries/cities';
import '../Styles/cityCard.css';

const CityCard = (props) => {
  const dispatch = useDispatch();
  const { countryName, cityName } = props;
  useEffect(() => {
    dispatch(getCityData({
      countryName,
      cityName,
    }));
  }, [countryName, cityName, dispatch]);

  const countries = useSelector((state) => state.citiesReducer);
  const country = countries.filter((item) => (item.country === countryName))[0];
  const city = country.cities.filter((item) => (item.name === cityName))[0];
  let cityHasData;
  let cityDataIsOk;
  if (city.data) {
    cityHasData = (!!city.data);
    cityDataIsOk = (city.data.status === 'ok');
  }

  let statusClass;
  if (cityHasData && cityDataIsOk) {
    statusClass = (
      (city.data.data.aqi >= 100) ? 'bad'
        : (city.data.data.aqi >= 75 && city.data.data.aqi < 100) ? 'high'
          : (city.data.data.aqi >= 50 && city.data.data.aqi < 75) ? 'med'
            : (city.data.data.aqi >= 25 && city.data.data.aqi < 50) ? 'low'
              : (city.data.data.aqi < 25) ? 'good' : 'unkown'
    );
  }
  return (
    <li className="city">
      <h3>
        {cityName}
      </h3>
      {!cityHasData && (
        <div className="badge loading">
          Loading data...
        </div>
      )}
      {cityHasData && cityDataIsOk && (
        <div className={`badge ${statusClass}`}>
          Aqi:
          {' '}
          {city.data.data.aqi}
        </div>
      )}
      {cityHasData && !cityDataIsOk && (
        <div className="badge">
          No data is available
        </div>
      )}
    </li>
  );
};

CityCard.defaultProps = {
  countryName: 'Not found ...',
  cityName: 'Title',
};

CityCard.propTypes = {
  countryName: PropTypes.string,
  cityName: PropTypes.string,
};

export default CityCard;
