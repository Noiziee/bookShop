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

export type BookResponse = {
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

export const requestNewBooks = async (): Promise<Books> => {
  const { data } = await client.get(newBooksEndPoint);
  return data as Books
}

export const requestBookByIsbn13 = async (isbn13: string): Promise<BookResponse> => {
  const { data } = await client.get(`${bookEndPoint}/${isbn13}`)
  return data as BookResponse
}