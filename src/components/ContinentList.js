import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Styles/continentList.css';

const ContinentList = () => {
  const continents = useSelector((state) => state.countriesReducer);

  return (
    <section id="continentList">
      <h2>Start by continent</h2>
      <ul>
        {
          Object.keys(continents).map((continent) => (
            <li key={continent}>
              <NavLink to={`./continent/${continent}`}>
                <h3>
                  {continent}
                </h3>
                <div>
                  <span>Countries: </span>
                  {continents[continent].length}
                </div>
                <img src={`${continent}.png`} alt={continent} />
              </NavLink>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default ContinentList;
