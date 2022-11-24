import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import ContinentList from './components/ContinentList';
import CountryList from './components/CountryList';
import Country from './components/Country';
import { getCountries } from './redux/countries/countries';
import { getAllCities } from './redux/countries/cities';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllCities());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContinentList />} />
        <Route path="/continent/:continent" element={<CountryList />} />
        <Route path="/continent/:continent/country/:country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
