import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

import {apiUrl, apiKey} from '../getUserLocationWeather/getUserLocationWeather'

export const setUserSearch = createAsyncThunk(
    'newLocation/setUserSearch',
    async function(newCity) {
        const response = await fetch(`${ apiUrl }/data/2.5/weather?q=${ newCity }&appid=${apiKey}`)
        const data = await response.json()
        return data
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
        removeErrorName: (state) => {
            state.error = null
        }
    },

    extraReducers: {
        [setUserSearch.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [setUserSearch.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.newLocationWeather = action.payload
            if (action.payload.cod !== 200) {
                state.error = true
            }
        },
        [setUserSearch.rejected]: (state, action) => {
            state.status = 'error'
            state.error = true
        },
    
    }
})

export const {removeErrorName} = newCityWeatherSlice.actions
export default newCityWeatherSlice.reducer