import { combineReducers } from 'redux'
import movies from './movies'
import errMessage from './errMessage'
import user from './user'
import boards from './boards'
import waiting from './waiting'

export default combineReducers({
  movies,
  errMessage,
  user,
  boards,
  waiting,
})
