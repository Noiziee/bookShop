import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { removeFromCart, setCartItems, setCartItemCount } from '../../redux/cartSlice'
import { Title } from '../../components/Title'
import { Book } from '../../components/Book'
import { BackHome } from '../../components/BackHome'

export function Cart(): JSX.Element {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.cartItems)

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    const storedCartItemCount = Number(localStorage.getItem('cartItemCount') || '0')
    dispatch(setCartItems(storedCartItems))
    dispatch(setCartItemCount(storedCartItemCount))
  }, [])

  // function handleRemoveFromCart(item: BooksFavorite) {
  //   dispatch(removeFromCart(item))
  //   const updatedCartItems = cartItems.filter(cartItem => cartItem.isbn13 !== item.isbn13)
  //   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  //   localStorage.setItem('cartItemCount', String(updatedCartItems.length))
  // }
  return (
    <div>
      <BackHome />
      <Title>Cart</Title>
      {cartItems.map((item, index) => (
        <Book key={index} data={item} />
      ))}
      {/* <div onClick={() => handleRemoveFromCart(cartItems[0])}>delete</div> */}
    </div>
  )
}