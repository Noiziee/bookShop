import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { setFavorites } from '../../redux/favoriteSlice'
import { setCartItems } from '../../redux/cartSlice'

import logo from '../../images/logo.svg'
import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

import { SearchForm } from '../SearchForm'

export function Header() {
  const dispatch = useAppDispatch()
  const { favoritesBooks } = useAppSelector(state => state.favorite)
  const cartItemCount = useAppSelector(state => state.cart.cartItemCount)

  useEffect(() => {
    const favoritesData = localStorage.getItem('favoritesBooks')
    if (favoritesData && favoritesData !== '[]') {
      dispatch(setFavorites(JSON.parse(favoritesData)))
    }
  }, [dispatch])

  useEffect(() => {
    const cartData = localStorage.getItem('cartItems')
    if (cartData && cartData !== '[]') {
      dispatch(setCartItems(JSON.parse(cartData)))
    }
  }, [dispatch])

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink className="logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <SearchForm />
        <div className="header__images">
          <NavLink className="header__link" to="./my-favorites"><img className="header__icon" src={favorite} alt="favorite" />
            <span className="header__counter">{favoritesBooks.length}</span>
          </NavLink>
          <NavLink className="header__link" to="./cart"><img className="header__icon" src={basket} alt="cart" />
            <span className="header__counter">{cartItemCount}</span>
          </NavLink>
          <NavLink className="header__link" to="./user"><img className="header__icon" src={user} alt="user" /></NavLink>
        </div>
      </div>
    </header>
  )
}

