import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COUNTRIES = 'air-pollution-metrics/countries/GET_COUNTRIES';

const initialState = {};

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_COUNTRIES}/fulfilled`: {
      const newState = action.payload.map((country) => ({
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.svg,
        continent: country.continents[0],
      }));
      const groups = newState.reduce((groups, item) => ({
        ...groups,
        [item.continent]: [...(groups[item.continent] || []), item],
      }), {});
      return groups;
    }
    default:
      return state;
  }
}

export const getCountries = createAsyncThunk(
  GET_COUNTRIES,
  async () => {
    const response = await fetch('https://restcountries.com/v3.1/all').then((res) => res.json());
    return response;
  },
);
