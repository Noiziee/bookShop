import { BookState } from '../../types/interface'

export function BookInfo({ data }: { data: BookState }): JSX.Element {
  return (
    <div className="book-info">
      <div>{data.price}</div>
    </div>
  )
}
