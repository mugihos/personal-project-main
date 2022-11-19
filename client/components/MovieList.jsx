import React from 'react'
import { useSelector } from 'react-redux'

function MovieList() {
  const movieList = useSelector((state) => state.movies)

  console.log(movieList)

  return (
    <>
      <h4>List of Movies returned</h4>
      <ul>
        {movieList?.map((movie) => {
          ;<li key={movie.id}>{movie.title}</li>
        })}
      </ul>
    </>
  )
}

export default MovieList
