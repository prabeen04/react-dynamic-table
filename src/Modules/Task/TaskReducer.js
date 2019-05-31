import * as types from './TaskActionTypes';
import moment from 'moment';

const initialState = {
    drawerVisible: false,
    users: ['Tony', 'Paul', 'Amit', 'Ajay'],
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6', 'Tag7'],
    tasks: [{
        id: 1,
        taskName: 'Tanner Linsley',
        assignedTo: ['Tony', 'Paul'],
        startDate: moment().format('ll'),
        endDate: moment().format('ll'),
        tags: ['Tag1', 'Tag2'],
        followers: ['Tony', 'Paul'],
        description: 26,
    },
    {
        id: 2,
        taskName: 'Tanner 2',
        assignedTo: ['Tony', 'Paul'],
        startDate: moment().format('ll'),
        endDate: moment().format('ll'),
        tags: ['Tag1', 'Tag2'],
        followers: ['Tony', 'Paul'],
        description: 26,
    },
    {
        id: 3,
        taskName: 'Tanner 2',
        assignedTo: ['Tony', 'Paul'],
        startDate: moment().format('ll'),
        endDate: moment().format('ll'),
        tags: ['Tag1', 'Tag2', 'Tag3', 'Tag2', 'Tag3'],
        followers: ['Tony', 'Paul'],
        description: 26,
    }]
}
export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HANDLE_DRAWER_VISIBLE:
            return { ...state, drawerVisible: action.payload }
        case types.ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload], drawerVisible: false }
        case types.RENAME_TASK_NAME:
            return {
                ...state,
                tasks: tasks.map((task) => task.id === action.payload.id
                    ? { ...task, taskName: action.payload.taskName }
                    : task)
            }
        default:
            return state;
    }
}