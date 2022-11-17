import { getMovieData } from '../apis/apiClient'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'

//error for everyone
export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

//search movies
export function requestMovieList() {
  return {
    type: REQUEST_POSTS,
  }
}

export function receiveMovieList(movies) {
  return {
    type: RECEIVE_POSTS,
    payload: movies,
  }
}

export function fetchMovies(movie) {
  return (dispatch) => {
    dispatch(requestMovieList())
    return getMovieData(movie)
      .then((movieData) => {
        // console.log(movieData)
        dispatch(receiveMovieList(movieData))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
