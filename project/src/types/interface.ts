export interface BooksState {
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
  language: string
}

export interface BooksFavorite extends BooksState {
  favorite: boolean
}

export interface FavoriteState {
  favoritesBooks: BooksFavorite[]
  favoritesCount: number
}