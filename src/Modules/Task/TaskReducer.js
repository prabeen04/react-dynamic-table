import * as types from './TaskActionTypes';
const initialState = {
    drawerVisible: false,
}
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_DRAWER_VISIBLE:
            return { ...state, drawerVisible: action.payload }
        default:
            return state;
    }
}