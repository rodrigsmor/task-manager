import * as type from './Task.types';

export function getTasksPagination(tasks) {
    return {
        type: type.LOAD_REQUEST,
        payload: tasks,
    }
}