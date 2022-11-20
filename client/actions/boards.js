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

export function deleteBoardData(id) {
  return {
    type: DELETE_BOARD,
    payload: id,
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

// -- delete board by id --
export function removeBoard(id) {
  return (dispatch) => {
    return deleteBoardById(id).then(() => {
      dispatch(deleteBoardData(id))
    })
  }
}

// -- get board data by id --
