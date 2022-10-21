import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const apiUrl = 'https://api.openweathermap.org/'
export const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const getUserLocation = createAsyncThunk(
  'location/getUserLocation',
  async (coords) => {
    const { latitude, longitude } = coords
    const response = await fetch(`${ apiUrl }geo/1.0/reverse?lat=${ latitude }&lon=${ longitude }&limit=5&appid=${apiKey}`)
    const data = await response.json()
    const cityName = data[0].name
    const responseSecondary = await fetch(`${ apiUrl }/data/2.5/weather?q=${ cityName }&appid=${apiKey}`)
    const dataSecondary = await responseSecondary.json()
    return dataSecondary
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
    loading: true,
  },

  reducers: {
    removeErrorLocation: (state) => {
      state.error = null
    },
    addErrorLocation: (state) => {
      state.error = true
      state.loading = false
    },
  },

  extraReducers: {
    [getUserLocation.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [getUserLocation.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.locationWeather = action.payload
      state.loading = false
      
      if(action.payload.cod !== 200) {
        state.error = true
      }
    },
    [getUserLocation.rejected]: (state, action) => {}
  }
})

export const { removeErrorLocation, addErrorLocation } = locationSlice.actions
export default locationSlice.reducer
