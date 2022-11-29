import {
  getAllBoards,
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

// -- update board detail --
export function updateBoard(updateData) {
  return {
    type: UPDATE_BOARD,
    payload: updateData,
  }
}

export function receiveBoardDataById(id) {
  return {
    type: RECEIVE_BOARD_ID,
    payload: id,
  }
}

export function deleteBoardData(id) {
  return {
    type: DELETE_BOARD,
    payload: id,
  }
}

// -- GET all board data --
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

// -- POST new board data to db --
export function submitBoard(newBoardData, token) {
  return (dispatch) => {
    return addBoard(newBoardData, token)
      .then((board) => {
        dispatch(addBoardData(board))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

// UPDATE board detail
export function editBoardData(id, editData) {
  return (dispatch) => {
    return editBoard(id, editData)
      .then((board) => {
        dispatch(updateBoard(board))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

// -- DELETE board by id --
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
