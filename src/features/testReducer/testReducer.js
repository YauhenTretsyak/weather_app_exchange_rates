import {createSlice} from '@reduxjs/toolkit'
import {useEffect} from 'react'

const testReducer = createSlice({
    name: 'testing',
    initialState: {
        value: 0
    },

    reducers: {
        increment: (state, action) => {
            state.value += 1
        },

        decrement: (state) => {
            state.value -= 1
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = testReducer.actions

export default testReducer.reducer