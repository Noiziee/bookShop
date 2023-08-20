import { client } from '../utils/clients'
import { newBooksEndPoint, bookEndPoint } from '../api'

export type Book = {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export type Books = {
  error: string
  total: string
  books: Book[]
}

export type BooksState = {
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

export const requestNewBooks = async (searchQuery: string): Promise<Books> => {
  const { data } = await client.get(newBooksEndPoint, {
    params: {
      searchQuery: searchQuery
    }
  })
  return data as Books
}

export const requestBook = async (isbn13: string): Promise<BooksState> => {
  const { data } = await client.get<BooksState>(`${bookEndPoint}/${isbn13}`)
  return data as BooksState
}