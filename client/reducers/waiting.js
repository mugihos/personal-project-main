import { SHOW_ERROR, REQUEST_DATA, RECEIVE_MOVIES } from '../actions'

function waiting(state = false, action) {
  const { type } = action

  switch (type) {
    case REQUEST_DATA:
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
