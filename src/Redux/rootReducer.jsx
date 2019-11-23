import {combineReducers} from 'redux'
import TaskListReducer from './Reducers/TaskListReducer'
import ModalReducer from './Reducers/ModalReducer'
import TaskEditingReducer from './Reducers/TaskEditingReducer'
import FilterTypeReducer from './Reducers/FilterTypeReducer'

export const rootReducer=combineReducers({
    // The palce where storages child reducers
    TaskList: TaskListReducer,
    isAddNewTask: ModalReducer,
    editTask: TaskEditingReducer,
    filterType: FilterTypeReducer
})