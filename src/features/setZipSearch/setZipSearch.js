import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, apiKey } from "../getUserLocationWeather/getUserLocationWeather";

export const setZipSearch = createAsyncThunk(
  'zipSearchWeather/setZipSearch',
  async function(zipCode) {
    const response = await fetch(`${ apiUrl }data/2.5/weather?zip=${zipCode.zipNumber},${zipCode.countryCode}&appid=${apiKey}`)
    const data = response.json() 
    return data;
  }
)

const zipSearchWeatherSlice = createSlice({
  name: 'zipSearchWeather',
  initialState: {
    newZipLocation: {
      name: false,
      main: {
        temp: '--',
        pressure: '--'
      },
      weather: [
        {
          icon: '01d'
        }
      ],
      wind: {
        speed: '--'
      },
    },
    status: null,
    error: null,
  },

  reducers: {
    addErrorZip: (state) => {
      state.error = true
    },
    removeErrorZip: (state) => {
      state.error = null
    }
  },

  extraReducers: {
    [setZipSearch.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [setZipSearch.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.newZipLocation = action.payload
    },
    [setZipSearch.rejected]: (state) => {
      state.status = 'error';
      state.error = true;
    }
  }
})

export const { addErrorZip, removeErrorZip } = zipSearchWeatherSlice.actions
export default zipSearchWeatherSlice.reducer;