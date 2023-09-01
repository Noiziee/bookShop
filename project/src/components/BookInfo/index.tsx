import { useState, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hook'
import { BooksData } from '../../types/interface'
import { Title } from '../Title'
import { Rating } from '../Rating'
import { Button } from '../Button'
import { NavBookInfo } from '../NavBookInfo'
import favorites from '../../images/favorites.svg'
import { toggleFavorite } from '../../helpers'
import { handleAddToCart } from '../../helpers'
export function BookInfo({ data }: { data: BooksData }): JSX.Element {
  const dispatch = useAppDispatch()
  const [isFavorite, setIsFavorite] = useState(false)
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)
  const cartItems = useAppSelector(state => state.cart.cartItems)

  function handleAddToCartClick() {
    handleAddToCart(data, cartItems, dispatch)
  }
  function handleAddFavorite() {
    toggleFavorite(data, isFavorite, favoritesCount, dispatch)
    setIsFavorite(!isFavorite)
  }
  useEffect(() => {
    localStorage.setItem('isFavorite', JSON.stringify(isFavorite));
  }, [isFavorite])

  useEffect(() => {
    const storedIsFavorite = localStorage.getItem('isFavorite')
    if (storedIsFavorite) {
      setIsFavorite(JSON.parse(storedIsFavorite))
    }
  }, [dispatch])
  return (
    <div className="book-info">
      <Title>{data.title}</Title>
      <div className="book-info__inner">
        <div className="book-info__col">
          <div className="book-info__image">
            <img className="book-info__img" src={data.image} alt="Book" />
            <img className={`book-info__favorites ${isFavorite ? 'active' : ''}`}
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
          <Button type="button" onClick={handleAddToCartClick}>Add to cart</Button>
          <div className="book-info__preview">
            <a className="book-info__preview-link" href="#">Preview book</a>
          </div>
        </div>
      </div>
      <NavBookInfo data={data} />
    </div>
  )
}
