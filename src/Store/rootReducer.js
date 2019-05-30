import { combineReducers } from 'redux';
/**
 *  All of application reducers import goes here...
 */
import { tableReducer } from "../Modules/Table/TableReducer";


const rootReducer = combineReducers({
  table: tableReducer,
})

export default rootReducer;