import { applyMiddleware, createStore } form 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer form './reducers'

cost middleware = applyMiddleware(thunk, logger())

export default createStore(reducer, middleware)
