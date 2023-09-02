import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { setCartItems, setCartItemCount } from '../../redux/cartSlice'
import { Title } from '../../components/Title'
import { BackHome } from '../../components/BackHome'
import { CartBook } from '../../components/CartBook'
export function Cart(): JSX.Element {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.cartItems)

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    const storedCartItemCount = Number(localStorage.getItem('cartItemCount') || '0')
    dispatch(setCartItems(storedCartItems))
    dispatch(setCartItemCount(storedCartItemCount))
  }, [])

  return (
    <div>
      <BackHome />
      <Title>Cart</Title>
      {cartItems.map((item, index) => (
        <CartBook key={index} data={item} />
      ))}

    </div>
  )
}