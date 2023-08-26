import { useState } from 'react'
import { BooksState } from '../../types/interface'

export function NavBookInfo({ data }: { data: BooksState }): JSX.Element {
  const [selectBook, setSelectBook] = useState('description')

  let bookData = selectBook === 'description' ? data.desc :
    selectBook === 'author' ? data.authors :
      selectBook === 'reviews' ? 'Reviews' :
        undefined

  function handleClickSelect(value: string) {
    setSelectBook(value)
  }
  return (
    <>
      <ul className="nav">
        <li className={selectBook === 'description' ? 'nav__item active' : 'nav__item'} onClick={() => handleClickSelect('description')}>Description</li>
        <li className={selectBook === 'author' ? 'nav__item active' : 'nav__item'} onClick={() => handleClickSelect('author')}>Author</li>
        <li className={selectBook === 'reviews' ? 'nav__item active' : 'nav__item'} onClick={() => handleClickSelect('reviews')}>Reviews</li>
      </ul>
      <div className="nav__book">
        {bookData}
      </div>
    </>
  )
}