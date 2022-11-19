//all about the movie data!
import { RECEIVE_MOVIES } from '../actions/addBoard'
const initialRequestState = []
//getting list of movie data from external api and assign to state
const movies = (state = initialRequestState, action) => {
  const { type, payload } = action
  // console.log(typeof payload)
  //this is showing the received data
  // console.log(typeof type)
  // console.log(typeof RECEIVE_MOVIES)
  switch (type) {
    case RECEIVE_MOVIES:
      // console.log('my case works')
      // console.log(payload)
      return [...state, payload]
    default:
      return state
  }
}

export default movies
