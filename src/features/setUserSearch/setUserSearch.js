import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { apiUrl, apiKey } from "../getUserLocationWeather/getUserLocationWeather";

export const setUserSearch = createAsyncThunk(
  'newLocation/setUserSearch',
  async function(newCity) {
    const response = await fetch(`${ apiUrl }/data/2.5/weather?q=${ newCity }&appid=${apiKey}`);
    const data = await response.json();
    return data;
  }
)

const newCityWeatherSlice = createSlice({
  name: 'newLocation',
  initialState: {
    newLocationWeather: {
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
    addNewLocation(){}
  },

  extraReducers: {
    [setUserSearch.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [setUserSearch.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.newLocationWeather = action.payload

    },
    [setUserSearch.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },

  }
})

export const { addNewLocation } = newCityWeatherSlice.actions;
export default newCityWeatherSlice.reducer;