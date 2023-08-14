import { ReactNode } from 'react'
import './Container.css'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="container">
      {children}
    </div>
  )
}