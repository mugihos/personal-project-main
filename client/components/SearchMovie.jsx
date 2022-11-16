import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/addBoard'

function SearchBoard() {
  const dispatch = useDispatch()
  //local useState to handle input
  const [input, setInput] = useState('')

  //display option retrived from the api call and list them

  function handleChange(event) {
    setInput(event.target.value)
    // console.log(input)
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
    </>
  )
}

export default SearchBoard
