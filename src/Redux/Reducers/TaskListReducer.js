import * as types from '../Constant/type'

let data = JSON.parse(localStorage.getItem('Tasks'));
const initialState = data ? data : [];

var TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DISPLAY_TASK_ALL:
            return state;
        case types.ADD_NEW_TASK:
            {
                var randomId = require('random-id');
                var id = randomId(30, 'aA0')
                action.payload.id = id;
                action.payload.status = "1";
                let taskJSON = [...state];
                taskJSON = [...taskJSON, action.payload];
                localStorage.setItem("Tasks", JSON.stringify(taskJSON));
                state = taskJSON;
                return [...state];
            }
        case types.DELETE_TASK:
            {
                let index = state.findIndex(item => item.id === action.payload);
                state.splice(index, 1);
                localStorage.setItem("Tasks", JSON.stringify(state));
                return [...state];
            }
        case types.UPDATE_STATUS:
            {
                let index = state.findIndex(item => item.id === action.payload.id);
                state[index] = {
                    ...state[index],
                    status: action.payload.status
                };
                localStorage.setItem("Tasks", JSON.stringify(state));
                return [...state];
            }
        case types.UPDATE_TASK:
            {
                let newTask = action.payload;
                let taskListCopy = [...state];
                let index = taskListCopy.findIndex(item => item.id === newTask.id);
                for (let property in taskListCopy[index]) {
                    taskListCopy[index][property] = newTask[property];
                }
                console.log(taskListCopy[index]);
                localStorage.setItem("Tasks", JSON.stringify(taskListCopy));
                state = taskListCopy;
                return [...state];
            }
        default:
            return state;
    }
}
export default TaskListReducer