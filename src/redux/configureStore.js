import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';
import citiesReducer from './countries/cities';

const store = configureStore({
  reducer: {
    countriesReducer,
    citiesReducer,
  },
  middleware: [thunk],
});

export default store;
