import { combineReducers } from 'redux'

import users from './usersReducer'
import groceries from './groceriesReducer'

export default combineReducers({
  users,
  groceries
})
