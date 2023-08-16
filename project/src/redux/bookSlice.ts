import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { requestBook, BooksState } from "../services/books";

interface BookState {
  bookWithDetails: BooksState
  loadingDetails: boolean
  errorDetails: boolean
}

export const fetchBook = createAsyncThunk('bookWithDetails/fetchBook', async (isbn13: string) => {
  const bookWithDetails = await requestBook(isbn13)
  return bookWithDetails as BooksState
})

const bookSlice = createSlice({
  name: 'bookWithDetails',
  initialState: {
    bookWithDetails: {},
    loadingDetails: false,
    errorDetails: false
  } as BookState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchBook.pending, state => {
      state.loadingDetails = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action: PayloadAction<BooksState>) => {
      state.loadingDetails = false
      state.bookWithDetails = action.payload
    })
    builder.addCase(fetchBook.rejected, state => {
      state.loadingDetails = false
      state.errorDetails = true
    })
  }
})

export const bookReducer = bookSlice.reducer