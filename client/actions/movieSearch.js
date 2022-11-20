import { getMovieData } from '../apis/apiClient'
import { showError, requestData } from './general'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

// --- search movies and receive data ---
export function receiveMovieList(movies) {
  return {
    type: RECEIVE_MOVIES,
    payload: movies,
  }
}

export function fetchMovies(movie) {
  return (dispatch) => {
    dispatch(requestData())
    return getMovieData(movie)
      .then((movieData) => {
        dispatch(receiveMovieList(movieData))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
