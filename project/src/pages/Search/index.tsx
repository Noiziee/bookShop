import { useAppDispatch, useAppSelector } from '../../hook'
import { useEffect } from 'react'
import { fetchNewBooks } from '../../redux/newBooksSlice'

import { Title } from '../../components/Title'
import { Book } from '../../components/Book'
import { Container } from '../../components/Container'
import { Loading } from '../../components/Loading'
export function Search(): JSX.Element {
  const allBooks = useAppSelector(state => state.newBooks.newBooks)
  const loading = useAppSelector(state => state.newBooks.loading)
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector(state => state.newBooks.searchQuery)
  const filteredBooks = allBooks.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    dispatch(fetchNewBooks(searchQuery))
  }, [dispatch, searchQuery])

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <Title>‘{searchQuery}’ SEARCH RESULTS</Title>
      <p>Found {filteredBooks.length} books</p>
      <Container className="container-flex">
        {filteredBooks.map((book) => <Book key={book.isbn13} data={book} />)}
      </Container>
    </div>
  )
}