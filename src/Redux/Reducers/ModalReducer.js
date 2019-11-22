import * as types from '../Constant/type'
const initialState = true;

var ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASK_EDIT:
            {
                state = false;
                return state;
            }
        case types.ADD_TASK_STATUS:
            {
                state = action.payload;
                return state;
            }
        default:
            return state;
    }
}

export default ModalReducer;