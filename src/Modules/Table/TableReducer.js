import * as types from './TableActionTypes';
const initialState = {
    drawerVisible: true,
}
export const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_DRAWER_VISIBLE:
            return { ...state, drawerVisible: action.payload }
        default:
            return state;
    }
}