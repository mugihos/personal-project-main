import {
  getAllBoards,
  getBoardById,
  getBoardByStatus,
  editBoard,
  deleteBoardById,
} from '../apis/apiClient'
import { showError } from './general'

export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const DELETE_BOARD = 'DELETE_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'

// --- board data ---
export function receiveBoardData(boards) {
  return {
    type: RECEIVE_BOARD,
    payload: boards,
  }
}

// -- get all board data --
export function fetchBoards() {
  return (dispatch) => {
    return getAllBoards()
      .then((allBoards) => {
        dispatch(receiveBoardData(allBoards))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
