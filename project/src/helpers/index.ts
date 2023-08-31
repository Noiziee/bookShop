import { Dispatch, SetStateAction } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../redux/store'
import { AnyAction } from 'redux'
import { BooksFavorite } from '../types/interface'
import { setFavorites, setFavoritesCount } from '../redux/favoriteSlice'
import { addToCart, setCartItems } from '../redux/cartSlice'
export function toggleFavorite(
  data: BooksFavorite,
  isFavorite: boolean,
  favoritesCount: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
  setIsFavorite: Dispatch<SetStateAction<boolean>>,
) {
  const updatedFavorites = isFavorite ? [] : [data]
  const newFavoritesCount = isFavorite ? favoritesCount -= 1 : favoritesCount += 1

  dispatch(setFavorites(updatedFavorites))
  localStorage.setItem('favoritesBooks', JSON.stringify(updatedFavorites))

  dispatch(setFavoritesCount(newFavoritesCount))
  localStorage.setItem('favoritesCount', String(newFavoritesCount))

  setIsFavorite(!isFavorite)
  localStorage.setItem('isFavorite', String(!isFavorite))
}


export function handleAddToCart(
  data: BooksFavorite,
  cartItems: BooksFavorite[],
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) {
  const isBookAlreadyAdded = cartItems.some(item => item.isbn13 === data.isbn13)

  if (!isBookAlreadyAdded) {
    const updatedCartItems = [...cartItems, data]
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    localStorage.setItem('cartItemCount', String(updatedCartItems.length))
    dispatch(setCartItems(updatedCartItems))
    dispatch(addToCart(data))
  } else {
    alert('Book already added to cart')
  }
}
