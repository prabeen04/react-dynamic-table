import { combineReducers } from 'redux';
/**
 *  All of the application reducers import goes here...
 */
import { taskReducer } from "../Modules/Task/TaskReducer";


const rootReducer = combineReducers({
  task: taskReducer,
})

export default rootReducer;