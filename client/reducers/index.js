import { combineReducers } from 'redux'
import movies from './movies'
import errMessage from './errMessage'
import user from './user'

export default combineReducers({
  movies,
  errMessage,
  user,
})
