import { Rating } from '../Rating'
import { Price } from '../Price'
import { NavLink } from 'react-router-dom'

import { BookProps } from '../../types/type'

export function Book({ data }: BookProps): JSX.Element {
  return (
    <div className="book" style={{ width: "18rem" }}>
      <img className="book__img" src={data.image} alt="" />
      <NavLink to={`/${data.isbn13}`} className="book__title">{data.title}</NavLink>
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