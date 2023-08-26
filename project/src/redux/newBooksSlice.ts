import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestNewBooks, requestBook } from '../services/books'
import { Book } from '../types/type'

interface NewBooksState {
  newBooks: Book[]
  loading: boolean
  error: boolean
  searchQuery: string
}

export const fetchNewBooks = createAsyncThunk('newBooks/fetchNewBooks', async (searchQuery?: string) => {
  const { books } = await requestNewBooks(searchQuery)
  const listByIsbn13 = books.map((book) => book.isbn13)
  const bookDetailsPromises = listByIsbn13.map((isbn13) => requestBook(isbn13))
  const newBooks = await Promise.all(bookDetailsPromises)
  return newBooks
})

const newBooksSlice = createSlice({
  name: 'newBooks',
  initialState: {
    newBooks: [],
    loading: false,
    error: false,
    searchQuery: ''
  } as NewBooksState,

  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.newBooks = []
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchNewBooks.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchNewBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
      state.loading = false
      state.newBooks = action.payload
    })
    builder.addCase(fetchNewBooks.rejected, state => {
      state.loading = false
      state.error = true
    })
  }
})

export const { setSearchQuery } = newBooksSlice.actions
export const newBooksReducer = newBooksSlice.reducer