import React from 'react'
import { useSelector } from 'react-redux'
import SearchMovie from './SearchMovie'

function MovieList() {
  const movieList = useSelector((state) => state.movies)
  return (
    <div>
      {movieList?.map((movie) => {
        ;<SearchMovie
          key={movie.id}
          title={movie.title}
          year={movie.description}
        />
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
