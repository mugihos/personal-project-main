import React from 'react'
import { useSelector } from 'react-redux'
// import SearchMovie from './SearchMovie'

function MovieList() {
  const movieList = useSelector((state) => state.movies)
  console.log(movieList)
  return (
    <div>
      {movieList?.map((movie) => {
        ;<>
          <li key={movie.id}>Title: {movie.title}</li>
          <li>Year: {movie.description}</li>
        </>
      })}
    </div>
  )
}

export default MovieList

// {subreddits.map((post, i) => (
//   <Post
//     key={i}
//     title={post.title}
//     summary={post.selftext}
//     date={post.created_utc}
//   />
// ))}
