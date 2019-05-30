import * as types from './TaskActionTypes';
import moment from 'moment';

const initialState = {
    drawerVisible: false,
    users: ['abc', 'def', 'ghi'],
    tasks: [{
        id: 1,
        taskName: 'Tanner Linsley',
        assignedTo: 26,
        startDate: moment().format('ll'),
        endDate: moment().format('ll'),
        tags: 26,
        followers: 26,
        description: 26,
    },
    {
        id: 2,
        taskName: 'Tanner 2',
        assignedTo: 26,
        startDate: moment().format('ll'),
        endDate: moment().format('ll'),
        tags: 26,
        followers: 26,
        description: 26,
    }]
}
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_DRAWER_VISIBLE:
            return { ...state, drawerVisible: action.payload }
        default:
            return state;
    }
}