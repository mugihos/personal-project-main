export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_DATA = 'REQUEST_DATA'

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function requestData() {
  return {
    type: REQUEST_DATA,
  }
}
