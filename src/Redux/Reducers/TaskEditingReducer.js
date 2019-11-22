import * as types from '../Constant/type'
const initialState = {};

var TaskEditingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TASK_EDIT:
            {
                state = action.payload;
                return {...state };
            }
        default:
            return state;
    }
}

export default TaskEditingReducer;


// Khi click vào nút button SỬA => dispatch action lên =>> modalReducer: cập nhật trạn thái isAddNewTask
// Sau đó tiếp tục dispactch object Task đó lên => TaskEditingReducer => Modal sẽ mapStateToProps về để sử dụng
// Trong modal sẽ nhận thay đổi dispatch lên TaskListReducer => Thay đổi thông tin trong list