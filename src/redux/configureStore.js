import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countries';

const store = configureStore({
  reducer: {
    countriesReducer,
  },
  middleware: [thunk],
});

export default store;
