import * as types from './TaskActionTypes';

/**
 * open close drawer
 */
export const handleDrawerVisible = visible => dispatch => dispatch({
    type: types.HANDLE_DRAWER_VISIBLE,
    payload: visible
})
/**
 * add task
 */
export const addTask = task => dispatch => dispatch({
    type: types.ADD_TASK,
    payload: task
})

/**
 * rename task name of a task
 */
export const renameTaskName = (id, taskName) => dispatch => {
    console.log(id, taskName)
    return dispatch({
        type: types.RENAME_TASK_NAME,
        payload: { id, taskName }
    })
}