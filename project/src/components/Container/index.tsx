import { ContainerProps } from '../../types/interface'

export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="container">
      {children}
    </div>
  )
}