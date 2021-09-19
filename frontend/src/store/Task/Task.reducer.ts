import { Tasks, TaskActions, TaskTypes as actions} from "./Task.types";

const INITIAL_STATE: Tasks = {
    id: 0,
    title: '',
    description: '',
    status: '',
};

export default function TaskReducer(state: Tasks = INITIAL_STATE, action: TaskActions) {
    switch(action.type) {
        case actions.ADD_TASK:
            return {
                ...state,
                payload: action.payload,
            }
        case actions.EDIT_TASK:
            return {
                ...state,
                payload: action.payload,
            }
        default: 
            return state;
    }
}