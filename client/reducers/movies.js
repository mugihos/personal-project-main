//all about the movie data!
import { RECEIVE_MOVIES } from '../actions/addBoard'
const initialRequestState = [{ title: 'Columbus', year: 2018 }]

//getting list of movie data from external api and assign to state
const movies = (state = initialRequestState, action) => {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case RECEIVE_MOVIES:
      return [...state, ...payload]
    default:
      return state
  }
}

export default movies
