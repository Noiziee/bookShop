import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../redux/store'
import { AnyAction } from 'redux'
import { BooksData } from '../types/interface'
import { setFavorites, setFavoritesCount } from '../redux/favoriteSlice'
import { addToCart, setCartItems } from '../redux/cartSlice'
export function toggleFavorite(
  data: BooksData,
  isFavorite: boolean,
  favoritesCount: number,
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>,
) {
  let updatedFavorites: BooksData[] = [...JSON.parse(localStorage.getItem('favoritesBooks') || '[]')]
  let newFavoritesCount = favoritesCount

  if (isFavorite) {
    updatedFavorites = updatedFavorites.filter(book => book.isbn13 !== data.isbn13)
    newFavoritesCount -= 1
  } else {
    updatedFavorites = [...updatedFavorites, data]
    newFavoritesCount += 1
  }

  dispatch(setFavorites(updatedFavorites))
  localStorage.setItem('favoritesBooks', JSON.stringify(updatedFavorites))

  dispatch(setFavoritesCount(newFavoritesCount))
  localStorage.setItem('favoritesCount', String(newFavoritesCount))
}


export function handleAddToCart(
  data: BooksData,
  cartItems: BooksData[],
  dispatch: ThunkDispatch<RootState, undefined, AnyAction>
) {
  const isBookAlreadyAdded = cartItems.some(item => item.isbn13 === data.isbn13)

  if (!isBookAlreadyAdded) {
    const updatedCartItems = [...cartItems, data]
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    localStorage.setItem('cartItemCount', String(updatedCartItems.length))
    dispatch(setCartItems(updatedCartItems))
    // dispatch(addToCart(data))
  } else {
    alert('Book already added to cart')
  }
}
