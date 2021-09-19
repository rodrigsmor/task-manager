// Action Types
export enum TaskTypes {
    ADD_TASK = 'ADD_TASK',
    EDIT_TASK = 'EDIT_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
}

// Data Types 
export interface Tasks {
    id: number
    title: string
    description?: string 
    status: string
}

// // state Types
// export interface TaskState {
//     data: Tasks
// }

//type Actions

export type TaskActions = {
    type: keyof typeof TaskTypes
    payload?: Tasks[]
}