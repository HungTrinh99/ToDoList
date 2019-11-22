import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../../Redux/Constant/type'


class AddNewtask extends Component {
    _handleAddTask = () => {
        this.props.isAddNewTask();
    }
    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn my-3 btn--newTask"
                    data-toggle="modal"
                    data-target="#modalTask"
                    onClick={this._handleAddTask}
                >
                    <i className="fa fa-pencil-square-o" />
                    Tạo Task mới
                </button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        isAddNewTask: () => {
            let action={
                type: types.ADD_TASK_STATUS,
                payload: true
            };
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNewtask)