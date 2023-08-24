import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import { useParams } from 'react-router-dom'
import { fetchBook } from '../../redux/bookSlice'

import { BackHome } from '../../components/BackHome'
import { Loading } from '../../components/Loading'
import { BookInfo } from '../../components/BookInfo'
import { Book } from '../../components/Book'
export function SingleBook(): JSX.Element {
  const dispatch = useAppDispatch()
  const isbn13 = useParams()
  const id: string = isbn13.isbn13 !== undefined ? isbn13.isbn13 : ''
  const { bookDetails, loadingDetails, errorDetails } = useAppSelector(state => state.bookDetails)
  const { newBooks } = useAppSelector(state => state.newBooks)

  useEffect(() => {
    if (id) {
      dispatch(fetchBook(id))
    }
  }, [dispatch, id])
  if (loadingDetails) {
    return <Loading />
  }
  if (errorDetails) {
    return <div>Error</div>
  }

  function renderSimulatedBooks() {
    const thresHoldRating: string = '3'
    const recommendedBooks = newBooks.filter((book) => book.rating > thresHoldRating)
    if (recommendedBooks.length === 3) {
      return recommendedBooks.map((book) => <Book key={book.isbn13} data={book} />)
    }
  }

  return (
    <div className="book">
      <BackHome />
      <BookInfo data={bookDetails} />


      {/* контент */}



      <div className="book__simulated">
        {renderSimulatedBooks()}
      </div>
    </div>
  )
}
