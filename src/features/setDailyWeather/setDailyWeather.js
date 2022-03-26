import { createSlice } from "@reduxjs/toolkit";

const setDailyWeatherSlice = createSlice({
  name: 'dailyWeather',
  initialState: {
    dailyWeatherData: {
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
    }
  },

  reducers: {
    setDailyWeatherData: (state, action) => {
      state.dailyWeatherData = action.payload;
      
      state.dailyWeatherData = {
        temperature: action.payload.main.temp,
        pressure: action.payload.main.pressure,
        city: action.payload.name,
        windSpeed: action.payload.wind.speed,
        icon: action.payload.weather[0].icon,
      }

      // dailyWeather = state.dailyWeatherData
      // console.log(dailyWeather)
    }
  }
})

export const { setDailyWeatherData } = setDailyWeatherSlice.actions;
export default setDailyWeatherSlice.reducer;