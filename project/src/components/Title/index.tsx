import { TitleProps } from '../../types/interface'

export function Title(props: TitleProps): JSX.Element {
  return (
    <h1 className="title">{props.children}</h1>
  )
}