//all about the board!
// const initialBoardState = {}
import { SET_MOVIES } from '../actions/addBoard'

//getting list of movie data from ecternal api > display as an option to user
function movies(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SET_MOVIES:
      return [...state, payload]
    default:
      return state
  }
}

export default movies
