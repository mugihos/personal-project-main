// get board related info
import { RECEIVE_BOARD, DELETE_BOARD } from '../actions'
const initialState = []

const boards = (state = initialState, action) => {
  const { type, payload } = action
  // console.log(payload)
  switch (type) {
    case RECEIVE_BOARD:
      return [...state, ...payload]
    case DELETE_BOARD:
      return state.filter((board) => {
        return board.id !== payload
      })
    default:
      return state
  }
}

export default boards
