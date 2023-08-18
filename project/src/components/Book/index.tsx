import { Rating } from '../Rating'
import { Price } from '../Price'

type BookProps = {
  data: {
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

export function Book({ data }: BookProps): JSX.Element {
  return (
    <div className="book" style={{ width: "18rem" }}>
      <img className="book__img" src={data.image} alt="" />
      <h3 className="book__title">{data.title}</h3>
      <div className="book__info">
        <span className="book__author">{`by ${data.authors}, ${data.publisher} ${data.year}`}</span>
      </div>
      <div className="book__rating">
        <Rating rating={data.rating} />
        <Price price={data.price} />
      </div>
    </div>
  )
}