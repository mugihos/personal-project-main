import React from 'react'
import { useSelector } from 'react-redux'
// import SearchMovie from './SearchMovie'

function MovieList() {
  const movieList = useSelector((state) => state.movies)
  // console.log(movieList)
  // console.log(typeof movieList)
  // console.log(movieList.keys())
  return (
    <div>
      <ul>
        {movieList?.map((movie, i) => {
          return (
            <>
              <li key={movie.id}>Title: {movie.title}</li>
              <li key={i}>Year: {movie.description}</li>
            </>
          )
        })}
      </ul>
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
