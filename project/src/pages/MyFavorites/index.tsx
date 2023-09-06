import { useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '../../hook'
import { Title } from '../../components/Title'
import { BackHome } from '../../components/BackHome'
import { FavoriteBook } from '../../components/FavoriteBook'
import { setFavorites } from '../../redux/favoriteSlice'
export function MyFavorites(): JSX.Element {
  const dispatch = useAppDispatch()
  const { favoritesBooks } = useAppSelector(state => state.favorite)
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)

  useEffect(() => {
    const favoritesBooks = JSON.parse(localStorage.getItem('favoritesBooks') || '[]')
    dispatch(setFavorites(favoritesBooks))
  }, [])

  function renderFavorites() {
    return favoritesBooks.map((book) => (
      <FavoriteBook key={book.isbn13} data={book} />
    ))
  }

  return (
    <>
      <BackHome />
      <Title>Favorites</Title>
      <div className="favorites">
        {favoritesCount > 0 && renderFavorites()}
      </div>
    </>
  )
}