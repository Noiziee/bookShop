import { Outlet } from 'react-router-dom'
import { ToggleAuth } from '../../components/ToggleAuth'

export function AuthSwitcher() {
  return (
    <div className="auth-switcher">
      <ToggleAuth />
      <Outlet />
    </div>
  )
}