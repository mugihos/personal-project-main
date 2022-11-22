import React from 'react'
import { useSelector } from 'react-redux'
// import SearchMovie from './SearchMovie'

function MovieList() {
  const movieList = useSelector((state) => state.movies)
  // console.log(movieList)
  // console.log(movieList.keys())
  return (
    <div>
      <ul>
        {movieList?.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <li>
                Title: {movie.Title}, {movie.Year}
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList
