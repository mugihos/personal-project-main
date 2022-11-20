//all about the movie data!
import { RECEIVE_MOVIES } from '../actions'
const initialState = [{ title: 'Columbus', year: 2018 }]

//getting list of movie data from external api and assign to state
const movies = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_MOVIES:
      return [...state, ...payload]
    default:
      return state
  }
}

export default movies
