import { configureStore } from '@reduxjs/toolkit'
import { newBooksReducer } from './newBooksSlice'
import { bookReducer } from './bookSlice'

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookDetails: bookReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch