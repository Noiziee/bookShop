import { NavLink } from 'react-router-dom'

import { BookProps } from '../../types/interface'
import { useEffect } from 'react'
interface PaginationProps {
  books: BookProps[]
  limit: number
  pageNumber: number
}

export function Pagination({ books, limit }: PaginationProps): JSX.Element {
  function buildPaginationScheme() {
    const totalPages = Math.ceil(books.length / limit)
    const scheme: (number | string)[] = []
    for (let i = 1; i <= totalPages; i++) {
      scheme.push(i)
    }
    return scheme
  }

  const paginationLinks = document.querySelectorAll('.pagination__link')
  paginationLinks.forEach(link => {
    link.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })

  function renderPagination() {
    const pages = buildPaginationScheme()

    return pages.map((page, index) => {
      return (
        <li key={index} className="pagination__item">
          <NavLink
            to={`/new_books/pages/${page}`}
            data-page={page}
            data-role="getPage"
            className={({ isActive }) => (isActive ? "pagination__link active" : "pagination__link")}>
            {page}
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {renderPagination()}
      </ul>
    </div>
  )
}
