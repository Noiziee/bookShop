import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { setFavorites } from '../../redux/favoriteSlice'

import { Title } from '../../components/Title'
import { BackHome } from '../../components/BackHome'
import { FavoriteBook } from '../../components/FavoriteBook'

export function MyFavorites(): JSX.Element {
  const dispatch = useAppDispatch()
  const { favoritesBooks } = useAppSelector(state => state.favorite)
  const favoritesCount = useAppSelector(state => state.favorite.favoritesCount)

  useEffect(() => {
    const favoritesData = localStorage.getItem('favoritesBooks')
    if (favoritesData && favoritesData !== '[]') {
      dispatch(setFavorites(JSON.parse(favoritesData)))
    }
  }, [dispatch])

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