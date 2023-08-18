import { NavLink } from 'react-router-dom'

import logo from '../../images/logo.svg'
import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

import { SearchForm } from '../SearchForm'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        <SearchForm />
        <div className="header__images">
          <img className="header__icon" src={favorite} alt="favorite" />
          <img className="header__icon" src={basket} alt="basket" />
          <NavLink to="./user"><img className="header__icon" src={user} alt="user" /></NavLink>
        </div>
      </div>
    </header>
  )
}

