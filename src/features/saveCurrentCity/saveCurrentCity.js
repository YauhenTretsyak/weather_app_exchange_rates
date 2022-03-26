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
    },

    dataLoadFromLocalStorage: (state, action) => {
      state.savedLocationsData = action.payload;
    },

    removeCity: (state, action) => {
      state.savedLocationsData = action.payload
    }
  }
})

export const { saveCity, removeCity, dataLoadFromLocalStorage } = saveCurrentCitySlice.actions
export default saveCurrentCitySlice.reducer