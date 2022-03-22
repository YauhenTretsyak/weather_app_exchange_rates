import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../features/testReducer/testReducer'
// import getExchangeRates from '../features/getExhangeRates/getExhangeRates'
import ratesSlice from '../features/getExhangeRates/getExhangeRates';
import locationSlice from '../features/getUserLocationWeather/getUserLocationWeather';
import dailyWeatherDataSlice from '../features/setDailyWeather/setDailyWeather';
import newCityWeatherSlice from '../features/setUserSearch/setUserSearch';
import zipSearchWeatherSlice from '../features/setZipSearch/setZipSearch';

export default configureStore({
  reducer: {
    testing: testReducer,
    // getCurrency: getExchangeRates,
    ratesData: ratesSlice,
    locationData: locationSlice,
    dailyWeatherData: dailyWeatherDataSlice,
    searchCityWeather: newCityWeatherSlice,
    searchZipWeather: zipSearchWeatherSlice,
  }
})