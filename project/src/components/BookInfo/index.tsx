import { BooksState } from '../../types/interface'
import { Title } from '../Title'
import { Rating } from '../Rating'
import { Button } from '../Button'
import { NavBookInfo } from '../NavBookInfo'



export function BookInfo({ data }: { data: BooksState }): JSX.Element {
  return (
    <div className="book-info">
      <Title>{data.title}</Title>
      <div className="book-info__inner">
        <div className="book-info__col">
          <div className="book-info__image">
            <img className="book-info__img" src={data.image} alt="Book" />
          </div>
        </div>
        <div className="book-info__col book-info__col_border">
          <div className="book-info__top">
            <div className="book-info__price">{data.price}</div>
            <div className="book-info__rating"><Rating rating={data.rating} /></div>
          </div>
          <div className="book-info__item">
            <span className="book-info__author">Authors</span>
            <span>{data.authors}</span>
          </div>
          <div className="book-info__item">
            <span className="book-info__publisher">Publisher</span>
            <span>{data.publisher}</span>
          </div>
          <div className="book-info__item">
            <span className="book-info__language">Language</span>
            <span>{data.language}</span>
          </div>
          <div className="book-info__item">
            <span className="book-info__format">Format</span>
            <span>Paper book / ebook (PDF)</span>
          </div>
          <Button type="button">Add to cart</Button>
          <div className="book-info__preview">
            <a className="book-info__preview-link" href="#">Preview book</a>
          </div>
        </div>
      </div>
      <NavBookInfo data={data} />
    </div>
  )
}
