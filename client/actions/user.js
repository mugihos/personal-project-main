import { getUserInfo } from '../apis/apiClient'
import { showError } from './general'

export const RECEIVE_USER = 'RECEIVE_USER'
export const DELETE_USER = 'DELETE_USER'
export const UPDATE_USER = 'UPDATE_USER'

// -- user data ---
export function receiveUserData(user) {
  return {
    type: RECEIVE_USER,
    payload: user,
  }
}

// -- get user data by id --
export function fetchUserData(id) {
  return (dispatch) => {
    return getUserInfo(id)
      .then((userInfo) => {
        dispatch(receiveUserData(userInfo))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
