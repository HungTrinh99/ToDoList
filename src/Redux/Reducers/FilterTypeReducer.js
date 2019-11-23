import * as types from '../Constant/type'

const initialState = {
    type: '',
    value: -1
}

var FilterTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_PRIORIRY:
            {
                state = action;
                return {...state };
            }
        case types.FILTER_PROCESS:
            {
                state = action;
                return {...state };
            }
        case types.FILTER_LABEL:
            {
                state = action;
                console.log(state);
                return {...state };
            }
        default:
            return state;
    }
}

export default FilterTypeReducer;