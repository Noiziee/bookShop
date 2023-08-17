import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { requestNewBooks, Book, requestBook } from "../services/books"

interface NewBooksState {
  newBooks: Book[]
  loading: boolean
  error: boolean
}

export const fetchNewBooks = createAsyncThunk('newBooks/fetchNewBooks', async () => {
  const { books } = await requestNewBooks()
  
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
    error: false
  } as NewBooksState,

  reducers: {},

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

export const newBooksReducer = newBooksSlice.reducer