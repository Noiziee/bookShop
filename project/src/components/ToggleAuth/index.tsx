import { NavLink } from 'react-router-dom'

export function ToggleAuth(): JSX.Element {
  return (
    <div className="toggle">
      <NavLink className="toggle__link" to="/user/authswitcher/sign-in">Sign In</NavLink>
      <NavLink className="toggle__link" to="/user/authswitcher/sign-up">Sign Up</NavLink>
    </div>
  )
}
