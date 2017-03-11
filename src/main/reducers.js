import {combineReducers} from 'redux'
import taskReducer from '../task/taskReducer'

const rootReducer = combineReducers({
	todo: taskReducer
})

export default rootReducer