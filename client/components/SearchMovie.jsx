import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../actions/movieSearch'

// Movie search function
function SearchMovie({ selectedMovie }) {
  const dispatch = useDispatch()
  const searchMovieResult = useSelector((state) => state.movies)
  const [searchInput, setSearchInput] = useState('')

  // take search input
  function handleSearchInput(event) {
    setSearchInput(event.target.value)
  }

  // search for movies
  function submitSearchKeyword(event) {
    event.preventDefault()
    dispatch(fetchMovies(searchInput))
  }

  // set the selected movie from list to 'selected'
  function handleSelected(movie) {
    const newMovie = {
      movie_id: movie.imdbID,
      movie_title: movie.Title,
      movie_year: movie.Year,
      movie_image: movie.Poster,
    }
    console.log(newMovie)
    selectedMovie(newMovie)
  }

  return (
    <>
      <h4>Search for movies</h4>
      <input
        type="text"
        onChange={handleSearchInput}
        value={searchInput}
        placeholder="search movies"
      />
      <button onClick={submitSearchKeyword}>Search</button>
      {searchMovieResult?.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <li onClick={() => handleSelected(movie)} value={movie}>
              {movie.Title}, {movie.Year}
            </li>
          </div>
        )
      })}
    </>
  )
}

export default SearchMovie
