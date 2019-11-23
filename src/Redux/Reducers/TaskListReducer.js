import * as types from '../Constant/type'

let data = JSON.parse(localStorage.getItem('Tasks'));
const initialState = data ? data : [];


var TaskListReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT_ALPHABET:
            {
                //1 : A->Z
                //0 : Z->A
                let taskResult = [...state];
                taskResult.sort(function(a, b) {
                    var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
                    var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // name trùng nhau
                    return 0;
                });

                if (action.payload === "0") {
                    //Reverse array Task: 
                    for (let i = 0; i < taskResult.length / 2; i++) {
                        [taskResult[i], taskResult[taskResult.length - i - 1]] = [taskResult[taskResult.length - i - 1], taskResult[i]]
                    }
                }
                return [...taskResult];
            }
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
                localStorage.setItem("Tasks", JSON.stringify(taskListCopy));
                state = taskListCopy;
                return [...state];
            }
        default:
            return state;
    }
}
export default TaskListReducer