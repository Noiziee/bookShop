import logo from '../../images/logo.svg'
import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'
import search from '../../images/search.svg'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="logo" href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="header__search input-group w-50 ">
          <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-text">
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="header__images">
          <img className="header__icon" src={favorite} alt="favorite" />
          <img className="header__icon" src={basket} alt="basket" />
          <img className="header__icon" src={user} alt="user" />
        </div>
      </div>
    </header>
  )
}

