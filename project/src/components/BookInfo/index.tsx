import { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hook'
import { setFavorites, incrementFavoritesCount, setFavoritesCount, decrementFavoritesCount } from '../../redux/favoriteSlice'
import { addToCart, setCartItems } from '../../redux/cartSlice'
import { BooksFavorite } from '../../types/interface'
import { Title } from '../Title'
import { Rating } from '../Rating'
// import { Button } from '../Button'
import { NavBookInfo } from '../NavBookInfo'
import favorites from '../../images/favorites.svg'
export function BookInfo({ data }: { data: BooksFavorite }): JSX.Element {
  const dispatch = useAppDispatch()
  const [isFavorite, setIsFavorite] = useState(false)
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)
  const cartItems = useAppSelector(state => state.cart.cartItems)

  function handleAddToCart() {
    const isBookAlreadyAdded = cartItems.some(item => item.isbn13 === data.isbn13)

    if (!isBookAlreadyAdded) {
      const updatedCartItems = [...cartItems, data]
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
      localStorage.setItem('cartItemCount', String(updatedCartItems.length))
      dispatch(setCartItems(updatedCartItems))
      dispatch(addToCart(data))
    } else {
      alert('Book already added to cart')
    }
  }

  function handleAddFavorite() {
    dispatch(setFavorites([data]))
    localStorage.setItem('favoritesBooks', JSON.stringify([data]))
    dispatch(incrementFavoritesCount())
    localStorage.setItem('favoritesCount', (favoritesCount + 1).toString())

    // ----------------------------------------------------------------
    const updatedFavorites = isFavorite ? [] : [data]
    const newFavoritesCount = isFavorite ? favoritesCount - 1 : favoritesCount + 1
    dispatch(setFavorites(updatedFavorites))
    localStorage.setItem('favoritesBooks', JSON.stringify(updatedFavorites))

    dispatch(setFavoritesCount(newFavoritesCount))
    localStorage.setItem('favoritesCount', String(newFavoritesCount))

    setIsFavorite(!isFavorite)
    localStorage.setItem('isFavorite', String(!isFavorite))
  }

  useEffect(() => {
    const storedIsFavorite = localStorage.getItem('isFavorite')
    if (storedIsFavorite) {
      setIsFavorite(JSON.parse(storedIsFavorite))
    }
  }, [])

  return (
    <div className="book-info">
      <Title>{data.title}</Title>
      <div className="book-info__inner">
        <div className="book-info__col">
          <div className="book-info__image">
            <img className="book-info__img" src={data.image} alt="Book" />
            <img className={`book-info__favorites ${isFavorite ? 'favorite' : ''}`}
              src={favorites}
              alt="favorite"
              onClick={handleAddFavorite} />
          </div>
        </div>
        <div className="book-info__col book-info__col_border">
          <div className="book-info__top">
            <div className="book-info__price">{data.price}</div>
            <div className="book-info__rating"><Rating rating={data.rating} /></div>
          </div>
          <div className="book-info__item">
            <span className="book-info__author">Authors</span>
            <span>{data.authors}</span>
          </div>
          <div className="book-info__item">
            <span className="book-info__publisher">Publisher</span>
            <span>{data.publisher}</span>
          </div>
          <div className="book-info__item">
            <span className="book-info__language">Language</span>
            <span>{data.language}</span>
          </div>
          <div className="book-info__item">
            <span className="book-info__format">Format</span>
            <span>Paper book / ebook (PDF)</span>
          </div>
          <button type="button" onClick={handleAddToCart}>Add to cart</button>
          <div className="book-info__preview">
            <a className="book-info__preview-link" href="#">Preview book</a>
          </div>
        </div>
      </div>
      <NavBookInfo data={data} />
    </div>
  )
}
