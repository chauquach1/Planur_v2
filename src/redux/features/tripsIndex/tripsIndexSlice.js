import { createSlice } from '@reduxjs/toolkit'

const tripsIndexSlice = createSlice({
  name: 'tripsIndex',
  initialState: [],
  reducers: {
    initializeTripsIndex: (state, action) => {
      return action.payload
    }
  },
})

export const { initializeTripsIndex, logTripsIndex } = tripsIndexSlice.actions

export default tripsIndexSlice.reducer