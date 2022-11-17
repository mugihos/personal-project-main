//all about the movie data!
import { RECEIVE_POSTS } from '../actions'

//getting list of movie data from external api and assign to state
function movies(state = [], action) {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case RECEIVE_POSTS:
      return payload

    default:
      return state
  }
}

export default movies
