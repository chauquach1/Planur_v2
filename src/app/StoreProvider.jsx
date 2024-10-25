'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from "../app/GlobalRedux/store";
import { initializeTripsIndex } from '../app/GlobalRedux/features/tripsIndex/tripsIndexSlice';

export default function StoreProvider({ tripsIndex, children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeTripsIndex(tripsIndex))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}