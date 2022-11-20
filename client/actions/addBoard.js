import { getMovieData } from '../apis/apiClient'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'

//error for everyone
export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

// --- search movies and receive data ---
export function requestMovieList() {
  return {
    type: REQUEST_MOVIES,
  }
}

export function receiveMovieList(movies) {
  return {
    type: RECEIVE_MOVIES,
    payload: movies,
    // payload: movies.map((movie) => movie)
  }
}

export function fetchMovies(movie) {
  return (dispatch) => {
    dispatch(requestMovieList())
    return getMovieData(movie)
      .then((movieData) => {
        dispatch(receiveMovieList(movieData))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

// export function fetchMovies(movie) {
//   return (dispatch) => {
//     dispatch(requestMovieList())
//     return getMovieData(movie)
//       .then((movieData) => {
//         // console.log(movieData)
//         dispatch(receiveMovieList(movieData))
//       })
//       .catch((err) => {
//         dispatch(showError(err.message))
//       })
//   }
// }
