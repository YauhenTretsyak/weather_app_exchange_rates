import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {apiUrl, apiKey} from '../getUserLocationWeather/getUserLocationWeather'

export const getFiveDaysWeather = createAsyncThunk(
    'fiveDaysWeather/getFiveDaysWeather',
    async function(cityName) {
        const response = await fetch(`${ apiUrl }data/2.5/forecast?q=${ cityName }&appid=${ apiKey }`) // cityName from Weather.js
        const data = response.json()
        return data
    }
)

const fiveDaysWeatherSlice = createSlice({
    name: 'fiveDaysWeather',
    initialState: {
        fiveDaysWeatherData: {
            night: [],
            day: []
        },
        country: '--',
        status: null,
        error: null
    },
    reducers: {
        addWeatherData(){}
    },

    extraReducers: {
        [getFiveDaysWeather.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getFiveDaysWeather.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.error = null
            state.country = action.payload.city.country ? action.payload.city.country : '--'
     
            let nightData = action.payload.list.filter(item => item.dt_txt.slice(11) === '03:00:00')
            let dayData = action.payload.list.filter(item => item.dt_txt.slice(11) === '15:00:00')

            state.fiveDaysWeatherData.night = nightData
            state.fiveDaysWeatherData.day = dayData
        },
        [getFiveDaysWeather.rejected]: (state) => {
            state.status = 'rejected'
            state.error = true
        }
    }
})

export const {addWeatherData} = fiveDaysWeatherSlice.actions
export default fiveDaysWeatherSlice.reducer