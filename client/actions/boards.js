import {
  getAllBoards,
  getBoardById,
  getBoardByStatus,
  addBoard,
  editBoard,
  deleteBoardById,
} from '../apis/apiClient'
import { showError } from './general'

export const RECEIVE_BOARD = 'RECEIVE_BOARD'
export const RECEIVE_BOARD_ID = 'RECEIVE_BOARD_ID'
export const DELETE_BOARD = 'DELETE_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'

// --- board data ---
export function receiveBoardData(boards) {
  return {
    type: RECEIVE_BOARD,
    payload: boards,
  }
}

// -- add new board --
export function addBoardData(newBoardInfo) {
  return {
    type: ADD_BOARD,
    payload: newBoardInfo,
  }
}

// export function receiveBoardDataById(id) {
//   return {
//     type: RECEIVE_BOARD_ID,
//     payload: id,
//   }
// }

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

// -- add new board data to db --
export function submitBoard(newBoardData) {
  return (dispatch) => {
    return addBoard(newBoardData)
      .then((board) => {
        dispatch(addBoardData(board))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

// -- get board by id ---
// export function fetchBoardById(id) {
//   return (dispatch) => {
//     return getBoardById(id)
//     .then((board) => {
//       dispatch()
//     })
//   }
// }

// -- delete board by id --
export function removeBoard(id) {
  return (dispatch) => {
    return deleteBoardById(id)
      .then(() => {
        dispatch(deleteBoardData(id))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

// -- update board by id --
