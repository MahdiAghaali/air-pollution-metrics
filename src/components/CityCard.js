import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getCityData } from '../redux/countries/cities';

const CityCard = (props) => {
  const dispatch = useDispatch();
  const { countryName, cityName } = props;
  useEffect(() => {
    dispatch(getCityData({
      countryName,
      cityName,
    }));
  }, [countryName, cityName, dispatch]);

  // const countries = useSelector((state) => state.citiesReducer);
  // const country = countries.filter((item) => (item.country === countryName))[0];
  // const city = country.cities.filter((item) => (item === cityName))[0];

  return (
    <div>
      {cityName}
    </div>
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
