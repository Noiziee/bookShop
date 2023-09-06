import { useAppDispatch, useAppSelector } from '../../hook'
import { removeFromCart, setCartItemCount } from '../../redux/cartSlice'
import { Price } from '../Price'
import { setCartItems } from '../../redux/cartSlice'
import { BooksData } from '../../types/interface'
import cross from '../../images/cross.svg'
import { Counter } from '../Counter'

export function CartBook({ data }: { data: BooksData }): JSX.Element {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.cartItems)


  function handleRemoveFromCart(item: BooksData) {
    dispatch(removeFromCart(item))
    const updatedCartItems = cartItems.filter(cartItem => cartItem.isbn13 !== item.isbn13)
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    localStorage.setItem('cartItemCount', String(updatedCartItems.length))
    dispatch(setCartItems(updatedCartItems))
    dispatch(setCartItemCount(updatedCartItems.length))
  }

  const handleCounterChange = (value: number) => {
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.isbn13 === data.isbn13) {
        const updatedCartItem = { ...cartItem, quantity: value }
        return updatedCartItem
      }
      return cartItem
    })
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
    dispatch(setCartItems(updatedCartItems))
  }

  return (
    <div className="cart-book">
      <div className="cart-book__inner">
        <div className="cart-book__col">
          <div className="cart-book__images">
            <img className="cart-book__img" src={data.image} alt="book" />
          </div>
          <div className="cart-book__info">
            <div className="cart-book__title">{data.title}</div>
            <div className="cart-book__authors">
              <span className="cart-book__author">{`by ${data.authors}, ${data.publisher} ${data.year}`}</span>
            </div>
            <div className="cart-book__counter">
              <Counter initialValue={data.quantity} onChange={value => handleCounterChange(value)} />
            </div>
          </div>
        </div>

        <Price price={data.price} />
        <div className="cart-book__remove">
          <img className="cart-book__icon" onClick={() => handleRemoveFromCart(data)} src={cross} alt="cross" />
        </div>
      </div>
    </div>
  )
}