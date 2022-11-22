import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/countryCard.css';

const CountryCard = (props) => {
  const { name, flag } = props;
  return (
    <div className="countryCard">
      <img alt={name} src={flag} />
      <div>{name}</div>
    </div>
  );
};

CountryCard.defaultProps = {
  name: 'Not found ...',
  flag: 'Title',
};

CountryCard.propTypes = {
  name: PropTypes.string,
  flag: PropTypes.string,
};

export default CountryCard;
