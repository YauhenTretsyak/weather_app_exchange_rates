import { configureStore } from '@reduxjs/toolkit'
import testReducer from '../features/testReducer/testReducer'
// import getExchangeRates from '../features/getExhangeRates/getExhangeRates'
import ratesSlice from '../features/getExhangeRates/getExhangeRates';

export default configureStore({
  reducer: {
    testing: testReducer,
    // getCurrency: getExchangeRates,
    ratesData: ratesSlice,
  },
})