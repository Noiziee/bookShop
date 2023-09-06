import { useState } from 'react'

import { Rating } from '../Rating'
import { Price } from '../Price'
import { NavLink } from 'react-router-dom'

import { BookProps } from '../../types/interface'

export function Book({ data }: BookProps): JSX.Element {
  const [randomColor] = useState<string>(getRandomColor())
  function getRandomColor(): string {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <div className="book" style={{ width: "18rem" }}>
      <div className="book__color" style={{ backgroundColor: randomColor }} >
        <img className="book__img" src={data.image} alt="book" />
      </div>
      <div className="book__title">
        <NavLink className="book__title-link" to={`/${data.isbn13}`}>{data.title}</NavLink>
      </div>
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