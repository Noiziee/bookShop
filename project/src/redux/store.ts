import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'
import { bookReducer } from './bookSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookWithDetails: bookReducer,
  }
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch

// export type RootState = ReturnType<typeof store.getState>