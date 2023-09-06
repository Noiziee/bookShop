import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hook'
import { setFavoritesCount } from '../../redux/favoriteSlice'
import { setCartItems } from '../../redux/cartSlice'
import { SearchForm } from '../SearchForm'

import logo from '../../images/logo.svg'
import favorite from '../../images/favorite.svg'
import cart from '../../images/cart.svg'
import user from '../../images/user.svg'


export function Header() {
  const dispatch = useAppDispatch()
  const { favoritesCount } = useAppSelector(state => state.favorite)
  const cartItemCount = useAppSelector(state => state.cart.cartItemCount)

  useEffect(() => {
    const favoritesCountData = localStorage.getItem('favoritesCount')
    if (favoritesCountData) {
      dispatch(setFavoritesCount(parseInt(favoritesCountData, 10)))
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
            <span className="header__counter">{favoritesCount}</span>
          </NavLink>
          <NavLink className="header__link" to="./cart"><img className="header__icon" src={cart} alt="cart" />
            <span className="header__counter">{cartItemCount}</span>
          </NavLink>
          <NavLink className="header__link" to="./user"><img className="header__icon" src={user} alt="user" /></NavLink>
        </div>
      </div>
    </header>
  )
}

