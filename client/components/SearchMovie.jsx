import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/addBoard'

// Movie search function

function SearchMovie() {
  const dispatch = useDispatch()
  //local useState to handle input
  const [input, setInput] = useState('')

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(fetchMovies(input))
    setInput('')
  }

  //submit this again as a whole form
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieSearch">Choose a movie</label>
        <input
          type="text"
          id="movieSearch"
          name="movie"
          value={input}
          onChange={handleChange}
        />
        <button className="button-52" type="submit">
          search
        </button>
      </form>
    </>
  )
}

export default SearchMovie
