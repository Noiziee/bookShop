import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BooksFavorite } from '../types/interface'

interface CartState {
  cartItems: BooksFavorite[]
  cartItemCount: number
}

const initialState: CartState = {
  cartItems: [],
  cartItemCount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<BooksFavorite[]>) => {
      state.cartItems = action.payload
      state.cartItemCount = action.payload.length
    },
    setCartItemCount: (state, action: PayloadAction<number>) => {
      state.cartItemCount = action.payload
    },
    addToCart: (state, action: PayloadAction<BooksFavorite>) => {
      state.cartItems.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<BooksFavorite>) => {
      state.cartItems = state.cartItems.filter(item => item.isbn13 !== action.payload.isbn13)
    },
  },
})

export const { addToCart, removeFromCart, setCartItems, setCartItemCount } = cartSlice.actions
export const cartReducer = cartSlice.reducer
