import * as types from '../Constant/type'

export const listAll = () => {
    return {
        type: types.DISPLAY_TASK_ALL
    }
}

export const updateStatus = (task) => {
    return {
        type: types.UPDATE_STATUS,
        payload: task
    }
}

export const addNewTask = (task) => {
    return {
        type: types.ADD_NEW_TASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        payload: id
    }
}

export const updateTask = (newTask) => {
    return {
        type: types.UPDATE_TASK,
        payload: newTask
    }
}

export const updateTaskStatus = () => {
    return {
        type: types.ADD_TASK_STATUS
    }
}

export const editTask = (task) => {
    return {
        type: types.TASK_EDIT,
        payload: task
    }
}

// filter: {type,value}
export const filterType = (type, value) => {
    return {
        type: type,
        payload: value
    }
}

//value:1 Sort A -> Z
//value:0 sort Z-> A
export const sortAlphabet = (value) => {
    return {
        type: types.SORT_ALPHABET,
        payload: value
    }
}