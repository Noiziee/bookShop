import { MainProps } from '../../types/interface'

export function Main(props: MainProps): JSX.Element {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}