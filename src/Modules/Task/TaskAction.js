import * as types from './TaskActionTypes';

/**
 * open close drawer
 */
export const handleDrawerVisible = visible => dispatch => dispatch({
    type: types.HANDLE_DRAWER_VISIBLE,
    payload: visible
})