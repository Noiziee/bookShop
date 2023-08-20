import { useAppDispatch, useAppSelector } from '../../hook'
import { useEffect } from 'react'
import { fetchNewBooks } from '../../redux/newBooksSlice'

import { Container } from '../../components/Container'
import { Title } from '../../components/Title'
import { Book } from '../../components/Book'
import { Loading } from '../../components/Loading'

export function Books() {
  const dispatch = useAppDispatch()
  const { newBooks, loading, error } = useAppSelector(state => state.newBooks)
  useEffect(() => {
    dispatch(fetchNewBooks())
  }, [dispatch])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <div>Error</div>
  }
  function renderBooks() {
    return newBooks.map((book) => <Book key={book.isbn13} data={book} />)
  }
  return (
    <div>
      <Title>New Releases Books</Title>
      <Container className="container-flex">
        {newBooks.length && renderBooks()}
      </Container>
    </div>
  );
}