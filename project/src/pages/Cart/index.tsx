import { BooksState } from '../../types/interface'
import { Title } from '../../components/Title'

export function Cart({ cartItems }: { cartItems: BooksState[] }): JSX.Element {
  return (
    <div>
      <Title>Cart</Title>
    </div>
  )
}