import { getMovieData } from '../apis/apiClient'

export const SET_MOVIES = 'SET_MOVIES'

export function setMovies(movies) {
  return { type: SET_MOVIES, payload: movies }
}

export function fetchMovies(movie) {
  return (dispatch) => {
    return getMovieData(movie).then((movieData) => {
      console.log(movieData)
      dispatch(setMovies(movieData))
    })
  }
}
