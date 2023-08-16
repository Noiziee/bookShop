import { useAppDispatch, useAppSelector } from '../../hook'
import { useEffect, useState } from 'react'
import { fetchBook } from '../../redux/bookSlice'
import { fetchNewBooks } from '../../redux/newBooksSlice'

import { Container } from '../../components/Container'
import { Title } from '../../components/Title'
import { Book } from '../../components/Book'

export function Books() {
  const dispatch = useAppDispatch()
  const { bookWithDetails, loadingDetails, errorDetails } = useAppSelector(state => state.book)
  const { newBooks, loading, error } = useAppSelector(state => state.newBooks)
  console.log(bookWithDetails)
  useEffect(() => {
    dispatch(fetchBook('9781617294136'))
  }, [dispatch])

  function renderBooks() {
    if (bookWithDetails) {
      return (
        <Container className="container-flex">
          <Book book={bookWithDetails} />
        </Container>
      )
    }
  }
  return (
    <div>
      <Title>New Releases Books</Title>
      {renderBooks()}
    </div>
  );
}