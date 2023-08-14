import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { requestNewBooks, Book } from "../services/books"

interface NewBooksState {
  newBooks: Book[]
  loading: boolean
  error: boolean
}

export const fetchNewBooks = createAsyncThunk('newBooks/fetchNewBooks', async () => {
  const { books } = await requestNewBooks()
  return books as Book[]
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