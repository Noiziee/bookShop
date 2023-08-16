type BookProps = {
  book: {
    error: string
    title: string
    subtitle: string
    authors: string
    publisher: string
    isbn10: string
    isbn13: string
    pages: string
    year: string
    rating: string
    desc: string
    price: string
    image: string
    url: string
    pdf: object
  }

}

export function Book({ book }: BookProps): JSX.Element {
  return (
    <div className="book" style={{ width: "18rem" }}>
      <img className="book__img-top" src={book.image} alt="" />
      <h3 className="book__title">{book.title}</h3>
      <div className="book__info">
        <span className="book__author">{`by ${book.authors}, ${book.publisher} ${book.year}`}</span>
      </div>
    </div>
  )
}