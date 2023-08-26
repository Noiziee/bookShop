import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { setFavorites } from '../../redux/favoriteSlice'

import { Title } from '../../components/Title'
import { Book } from '../../components/Book'
import { BackHome } from '../../components/BackHome'

export function MyFavorites(): JSX.Element {
  const dispatch = useAppDispatch()
  const { favoritesBooks } = useAppSelector(state => state.favorite)

  useEffect(() => {
    const favoritesData = localStorage.getItem('favoritesBooks')
    if (favoritesData && favoritesData !== '[]') {
      dispatch(setFavorites(JSON.parse(favoritesData)))
    }
  }, [dispatch])

  function renderFavorites() {
    return favoritesBooks.map(item => <Book key={item.isbn13} data={item} />)
  }
  return (
    <>
      <BackHome />
      <Title>Favorites</Title>
      <div className="favorites">
        {favoritesBooks.length > 0 && renderFavorites()}
      </div>
    </>
  )
}