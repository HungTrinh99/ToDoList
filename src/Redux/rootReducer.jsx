import {combineReducers} from 'redux'
import TaskListReducer from './Reducers/TaskListReducer'
import ModalReducer from './Reducers/ModalReducer'
import TaskEditingReducer from './Reducers/TaskEditingReducer'

export const rootReducer=combineReducers({
    // The palce where storages child reducers
    TaskList: TaskListReducer,
    isAddNewTask: ModalReducer,
    editTask: TaskEditingReducer
})