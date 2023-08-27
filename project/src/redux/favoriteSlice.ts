import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BooksFavorite } from '../types/interface'
import { FavoriteState } from '../types/interface'

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesBooks: [],
    favoritesCount: 0,
  } as FavoriteState,

  reducers: {
    setFavorites: (state, action: PayloadAction<BooksFavorite[]>) => {
      const updatedBooks = Array.from(action.payload)
      updatedBooks.forEach((book) => {
        const index = state.favoritesBooks.findIndex((favBook) => favBook.isbn13 === book.isbn13)

        if (index !== -1) {
          state.favoritesBooks[index] = { ...state.favoritesBooks[index], ...book }
        } else {
          state.favoritesBooks.push(book)
        }
      })
      localStorage.setItem('favoritesBooks', JSON.stringify(state.favoritesBooks))
    },
    incrementFavoritesCount: (state) => {
      state.favoritesCount += 1;
      localStorage.setItem('favoritesCount', state.favoritesCount.toString())
    },
    decrementFavoritesCount: (state) => {
      state.favoritesCount -= 1;
      localStorage.setItem('favoritesCount', state.favoritesCount.toString())
    },
  }
})

export const { setFavorites, incrementFavoritesCount, decrementFavoritesCount } = favoriteSlice.actions
export const favoriteReducer = favoriteSlice.reducer