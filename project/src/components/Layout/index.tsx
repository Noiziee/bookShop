import { ReactElement } from 'react'

import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Main } from '../Main'
import { Footer } from '../Footer'


export function Layout(): ReactElement {
  return (
    <div className="layout">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}