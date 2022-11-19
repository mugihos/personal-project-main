import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../actions/addBoard'

// Movie search function

function SearchMovie({ children }) {
  const dispatch = useDispatch()
  // const movieList = useSelector((state) => state.movies)
  //local useState to handle input
  const [input, setInput] = useState('')
  // const [result, setResult] = useState([])

  // useEffect(() => {
  //   setResult(movieList)
  //   return result
  // }, [])

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(fetchMovies(input))
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
      {children}
    </>
  )
}

export default SearchMovie
