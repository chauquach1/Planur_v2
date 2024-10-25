import { createSlice } from '@reduxjs/toolkit'

const tripsIndexSlice = createSlice({
  name: 'tripsIndex',
  initialState: [],
  reducers: {
    initializeTripsIndex: (state, action) => {
      console.log('initializeTripsIndex state', state);
      console.log('initializeTripsIndex action', action);
      console.log('initializeTripsIndex action.payload', action.payload);
      return action.payload
    }
  },
})

export const { initializeTripsIndex } = tripsIndexSlice.actions

export default tripsIndexSlice.reducer