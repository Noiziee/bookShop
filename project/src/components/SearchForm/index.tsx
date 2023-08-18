import { useState } from 'react'

import search from '../../images/search.svg'

export function SearchForm(): JSX.Element {
  const [value, setValue] = useState('')

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }
  return (
    <div className="search input-group w-50 ">
      <form className="w-75">
        <input type="text" onChange={handleSubmit} value={value} className="form-control" placeholder="Search" />
      </form>
      <div className="input-group-text">
        <img src={search} alt="search" />
      </div>
    </div>
  )
}