import { TaskTypes as action } from './Task.types'

export function addTask() {
    return { 
        type: action.ADD_TASK,
    }
}

export function editTask() {
    return {
        type: action.EDIT_TASK,
    }
}