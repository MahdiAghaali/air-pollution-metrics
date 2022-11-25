import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ALL_CITIES = 'air-pollution-metrics/cities/GET_ALL_CITIES';
const GET_CITY_DATA = 'air-pollution-metrics/cities/GET_CITY_DATA';

const initialState = [];

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_CITIES}/fulfilled`: return action.payload.data.map((el) => ({ ...el, cities: [...el.cities.map((el) => ({ name: el }))] }));
    case `${GET_CITY_DATA}/fulfilled`: {
      const newState = [
        ...state.filter((cntry) => cntry.country !== action.payload.countryName),
        ...state.filter((cntry) => cntry.country === action.payload.countryName).map((cntry) => ({
          ...cntry,
          cities: cntry.cities.map((cty) => {
            if (cty.name === action.payload.cityName) {
              return { ...cty, data: action.payload.data };
            }
            return cty;
          }),
        }))];
      return newState;
    }
    default:
      return state;
  }
}

export const getAllCities = createAsyncThunk(
  GET_ALL_CITIES,
  async () => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries')
      .then((res) => res.json())
      .catch((error) => (error));
    return response;
  },
);

export const getCityData = createAsyncThunk(
  GET_CITY_DATA,
  async (params) => {
    const { countryName, cityName } = params;
    const response = await fetch(`https://api.waqi.info/feed/${cityName}/?token=ab719cc738417c9be8b8fee1211e5c876c2b5ad5`)
      .then((response) => response.json())
      .catch((error) => `Adding Failed. ${error}`);
    return {
      countryName,
      cityName,
      data: response,
    };
  },
);
