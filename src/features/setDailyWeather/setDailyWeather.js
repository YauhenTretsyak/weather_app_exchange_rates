import { createSlice } from "@reduxjs/toolkit";



const setDailyWeatherSlice = createSlice({
  name: 'dailyWeather',
  initialState: {
    dailyWeatherData: {}
  },

  reducers: {
    setDailyWeatherData: (state, action) => {
      state.dailyWeatherData = action.payload
      console.log(action.payload)
    }
  }
})

export const { setDailyWeatherData } = setDailyWeatherSlice.actions;
export default setDailyWeatherSlice.reducer;