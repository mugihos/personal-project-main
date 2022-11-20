//all about the user profile!
import { RECEIVE_USER } from '../actions'
const initialState = []

const user = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_USER:
      return [...state, ...payload]
    default:
      return state
  }
}

export default user
