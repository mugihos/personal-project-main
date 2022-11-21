// get board related info
import {
  RECEIVE_BOARD,
  DELETE_BOARD,
  ADD_BOARD,
  UPDATE_BOARD,
} from '../actions'
const initialState = []

const boards = (state = initialState, action) => {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case RECEIVE_BOARD:
      return [...payload]

    case ADD_BOARD:
      return payload

    case DELETE_BOARD:
      return state.filter((board) => {
        return board.id !== payload
      })

    case UPDATE_BOARD:
      return state.map((board) => {
        if (board.id !== payload.id) {
          return board
        } else {
          return payload
        }
      })

    default:
      return state
  }
}

export default boards
