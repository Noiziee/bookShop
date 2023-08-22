import { BooksState } from '../../services/books'
interface BookInfoProps {
  data: BooksState
}
export function BookInfo({ data }: BookInfoProps): JSX.Element {
  return (
    <div className="book-info">
      <div>{data.price}</div>
    </div>
  )
}