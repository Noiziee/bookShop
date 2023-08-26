import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { setFavorites } from '../../redux/favoriteSlice'

import logo from '../../images/logo.svg'
import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

import { SearchForm } from '../SearchForm'

export function Header() {
  const dispatch = useAppDispatch()
  const { favoritesBooks } = useAppSelector(state => state.favorite)
  const [favoritesCount, setFavoritesCount] = useState(favoritesBooks.length)

  useEffect(() => {
    const favoritesData = localStorage.getItem('favoritesBooks')
    if (favoritesData && favoritesData !== '[]') {
      dispatch(setFavorites(JSON.parse(favoritesData)))
    }
  }, [dispatch])

  useEffect(() => {
    setFavoritesCount(favoritesBooks.length)
  }, [favoritesBooks])

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink className="logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <SearchForm />
        <div className="header__images">
          <NavLink to="./my-favorites"><img className="header__icon" src={favorite} alt="favorite" />
            <span className="header__counter">{favoritesCount}</span>
          </NavLink>
          <NavLink to="./cart"><img className="header__icon" src={basket} alt="basket" /></NavLink>
          <NavLink to="./user"><img className="header__icon" src={user} alt="user" /></NavLink>
        </div>
      </div>
    </header>
  )
}

