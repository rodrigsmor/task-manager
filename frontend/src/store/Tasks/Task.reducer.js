import * as type from '../Tasks/Task.types';

const INITIAL_STATE = {
    tasks: [],
    loadings: false,
    error: false,
}

export default function taskReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case type.LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        
        case type.LOAD_SUCCESS: 
            return {
                ...state,
                loading: false,
                tasks: action.tasks,
            }

        case type.LOAD_FAILURE:
            return {
                ...state,
                loading: false, 
                error: action.message
            }
            
        default:
            return state;
    }
}