import { combineReducers } from 'redux'
import board from './board'
import errMessage from './errMessage'
import user from './user'

export default combineReducers({
  board,
  errMessage,
  user,
})
