import { ButtonProps } from '../../types/type'

export function Button({ children, type }: ButtonProps): JSX.Element {
  return (
    <button className="button button_lg" type={type}>{children}</button>
  )
}