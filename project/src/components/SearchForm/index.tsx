import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hook'
import { setSearchQuery } from '../../redux/newBooksSlice'
import search from '../../images/search.svg'

export function SearchForm(): JSX.Element {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    setQuery(e.target.value)
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    dispatch(setSearchQuery(query))
    navigate(`/search/${query}`)
    setQuery('')
  }
  return (
    <div className="search input-group w-50 ">
      <form className="w-75" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleSearch} className="form-control" placeholder="Search" />
      </form>
      <div className="input-group-text">
        <img src={search} alt="search" />
      </div>
    </div>
  )
}