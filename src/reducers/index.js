import { combineReducers } from 'redux'
import { notifyReducer } from './notifyReducer'

const appReducer = combineReducers({ notifyReducer })

export default appReducer
