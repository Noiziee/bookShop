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
          <NavLink to="./my-favorites"><img className="header__icon" src={favorite} alt="favorite" /></NavLink>
          <NavLink to="./cart"><img className="header__icon" src={basket} alt="basket" /></NavLink>
          <NavLink to="./user"><img className="header__icon" src={user} alt="user" /></NavLink>
        </div>
      </div>
    </header>
  )
}

