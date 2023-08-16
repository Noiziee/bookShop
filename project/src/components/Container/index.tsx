import { ReactNode } from 'react'

type ContainerProps = {
  className: string
  children: ReactNode
}

export function Container({ className, children }: ContainerProps): JSX.Element {
  return (
    <div className={className}>
      {children}
    </div>
  )
}