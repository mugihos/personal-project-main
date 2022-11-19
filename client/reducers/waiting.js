import { SHOW_ERROR, REQUEST_MOVIES, RECEIVE_MOVIES } from '../actions/addBoard'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_MOVIES:
      return true
    case RECEIVE_MOVIES:
      return false
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
