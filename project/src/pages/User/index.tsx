import { Outlet } from 'react-router-dom'

import { Container } from '../../components/Container'

export function User(): JSX.Element {
  return (
    <Container className="form__content">
      <Outlet />
    </Container>
  )
}