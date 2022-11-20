import React from 'react'
import { useSelector } from 'react-redux'
// import SearchMovie from './SearchMovie'

function MovieList() {
  const movieList = useSelector((state) => state.movies)
  console.log(movieList)
  // console.log(movieList.keys())
  return (
    <div>
      <ul>
        {movieList.map((movie, i) => {
          console.log('here')
          ;<>
            <li key={movie.id}>Title: {movie.title}</li>
            <li key={i}>Year: {movie.description}</li>
          </>
        })}
      </ul>
    </div>
  )
}

export default MovieList
