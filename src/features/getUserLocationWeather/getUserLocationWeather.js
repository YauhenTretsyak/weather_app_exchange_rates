import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const apiUrl = 'https://api.openweathermap.org/'
export const apiKey = '9980f38164f1b2cf7d9081d38f49a7fe';

export const getUserLocation = createAsyncThunk(
  'location/getUserLocation',
  async (coords) => {
    const { latitude, longitude } = coords;
    const response = await fetch(`${ apiUrl }geo/1.0/reverse?lat=${ latitude }&lon=${ longitude }&limit=5&appid=${apiKey}`);
    const data = await response.json();
    const cityName = data[0].name
    const responseSecondary = await fetch(`${ apiUrl }/data/2.5/weather?q=${ cityName }&appid=${apiKey}`);
    const dataSecondary = await responseSecondary.json()
    return dataSecondary;
  }
)

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    locationWeather: {
      name: '--',
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
    isDataLoaded: false,
  },

  reducers: {
    setIsDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    }
  },

  extraReducers: {
    [getUserLocation.pending]: (state) => {
      state.status = 'loading';
      state.error = null
    },
    [getUserLocation.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.locationWeather = action.payload;
    },
    [getUserLocation.rejected]: (state, action) => {}
  }
})

export const { setIsDataLoaded } = locationSlice.actions;
export default locationSlice.reducer;
