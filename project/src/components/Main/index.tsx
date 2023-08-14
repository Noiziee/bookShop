import { ReactNode } from 'react'
import './main.css'

interface MainProps {
  children: ReactNode
}
export function Main(props: MainProps): JSX.Element {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}