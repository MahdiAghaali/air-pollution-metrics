import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Styles/countryList.css';

const ContinentList = () => {
  const continents = useSelector((state) => state.countriesReducer);

  return (
    <section>
      <ul>
        {
          Object.keys(continents).map((continent) => (
            <li key={continent}>
              <NavLink to={`./continent/${continent}`}>{continent}</NavLink>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default ContinentList;
