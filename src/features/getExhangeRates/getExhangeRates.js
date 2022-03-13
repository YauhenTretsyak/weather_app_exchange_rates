import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrlCurrency = 'https://free.currconv.com';
// const keyCurrency = '801b3e3eb2e4db36a239'; 
const keyCurrency = '28d808b7165a042b6b12'; //blocked

const mathFloorFunc = (item) => {
  return(
    Math.floor((item) * 10000) / 10000
  )
}

export const getExchangeRates = createAsyncThunk(
  'rates/getExchangeRates',
  async function() {
    const response = await fetch(`${ apiUrlCurrency }/api/v7/convert?q=USD_PLN,EUR_PLN&compact=ultra&apiKey=${ keyCurrency }`);
    const data = await response.json();
    return data;
  }
)

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    rates: [],
    status: null,
    error: null
  },

  reducers: {
    addRates(state, action) {
      console.log(action.payload)
    }
  },
  extraReducers: {
    [getExchangeRates.pending]: (state) => {
      state.status = 'loading';
      state.error = null
    },
    [getExchangeRates.fulfilled]: (state, action) => {
      state.status = 'resolved';
    
      const newCurrencyData = action.payload;
      let currencyData = [];

      for (let key in newCurrencyData) {
      
        const newKey = key.slice(0, 3);
        const currencyObj = {}
        
        currencyObj['rate'] = newKey
        currencyObj['value'] = mathFloorFunc(newCurrencyData[key])
        
        currencyData = [
          ...currencyData,
          currencyObj
        ]
      }

      state.rates = currencyData;
    },
    [getExchangeRates.rejected]: (state, action) => {},
  }
})

export const { addRates } = ratesSlice.actions;
export default ratesSlice.reducer;



