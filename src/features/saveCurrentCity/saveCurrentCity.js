import { createSlice } from "@reduxjs/toolkit";

export const saveCurrentCitySlice = createSlice({
  name: 'saveSity',
  initialState: {
    savedLocationsData: []
  },

  reducers: {
    saveCity: (state, action) => {
      const id = action.payload.id;
      const cityName = action.payload.cityName;

      state.savedLocationsData = [ 
        ...state.savedLocationsData, 
        {
          id: id,
          cityName: cityName
        }
      ]

      console.log(state.savedLocationsData)
    },

    removeCity: (state, action) => {
      state.savedLocationsData = action.payload
    }
  }
})

export const { saveCity, removeCity } = saveCurrentCitySlice.actions
export default saveCurrentCitySlice.reducer