import { useAppDispatch, useAppSelector } from '../../hook'
import { removeFromCart, setCartItemCount } from '../../redux/cartSlice'
import { Price } from '../Price'
import { setCartItems } from '../../redux/cartSlice'
import { BooksData } from '../../types/interface'
import cross from '../../images/cross.svg'

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

  return (
    <div className="cart-book">
      <div className="cart-book__inner">
        <div className="cart-book__images">
          <img className="cart-book__img" src={data.image} alt="book" />
        </div>
        <div className="cart-book__info">
          <div className="cart-book__title">{data.title}</div>
          <div className="cart-book__authors">
            <span className="cart-book__author">{`by ${data.authors}, ${data.publisher} ${data.year}`}</span>
          </div>
          <div className="cart-book__counter">
            {/* counter */}
          </div>
        </div>
        <Price price={data.price} />
        <div className="cart-book__remove">
          <img onClick={() => handleRemoveFromCart(data)} className="cart-book__icon" src={cross} alt="cross" />
        </div>
      </div>
    </div>
  )
}