import React, { Component } from 'react'
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { connect } from 'react-redux'
import * as actions from "../Redux/Action/action";

class ModalPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            labelArr: [],
            priority: '',
            memberIDArr: [],
            description: ''
        }
    }
    _handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    _handleOnSubmit = (event) => {
        event.preventDefault();
        if (this.props.isAddNewTask === true) {
            this.props.addNewTask(this.state);
        }
        else {
            this.props.onEditing(this.state);
        }
    }

    // Do thư viện checkbox yêu cầu 1 hàm setState mới.
    _memberChanged = (newMember) => {
        this.setState({
            memberIDArr: newMember
        });
    }
    _labelChanged = (newLabel) => {
        this.setState({
            labelArr: newLabel
        });
    }
    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.isAddNewTask === true) {
            this.setState({
                id: '',
                name: '',
                labelArr: [],
                priority: '',
                memberIDArr: [],
                description: ''
            })
        }
        if (nextProps && nextProps.isAddNewTask === false) {
            this.setState({
                id: nextProps.editTask.id,
                name: nextProps.editTask.name,
                labelArr: nextProps.editTask.labelArr,
                priority: nextProps.editTask.priority,
                memberIDArr: nextProps.editTask.memberIDArr,
                description: nextProps.editTask.description
            })
        }
    }
    getMission = () => {
        let obj = { tittle: '', mission: '' }
        if (this.props.isAddNewTask === false) {
            obj.tittle = "Sửa công việc";
            obj.mission = "Sửa công việc";
        }
        else {
            obj.tittle = "Thêm công việc";
            obj.mission = "Thêm công việc";
        }
        return obj;
    }
    render() {
        let { tittle, mission } = this.getMission();
        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{tittle}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <form onSubmit={this._handleOnSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tên công việc:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        onChange={this._handleOnChange}
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mô tả:</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        name="description"
                                        onChange={this._handleOnChange}
                                        value={this.state.description}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Độ ưu tiên:</label>
                                    <select
                                        className="form-control"
                                        name="priority"
                                        onChange={this._handleOnChange}
                                        value={this.state.priority}
                                    >
                                        {/* Set value = -1 đẻ UX ngon hơn */}
                                        <option value={-1}>Chọn độ ưu tiên</option>
                                        <option value={3}>Thấp</option>
                                        <option value={2}>Trung bình</option>
                                        <option value={1}>Cao</option>
                                    </select>
                                </div>
                                <label>Người thực hiện:</label>
                                <br />
                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="memberIDArr"
                                    value={this.state.memberIDArr}
                                    onChange={this._memberChanged}>
                                    <label><Checkbox value="user_2" /> Trịnh Vũ Minh Hùng</label>
                                    <label><Checkbox value="user_3" /> Lê Yên Thanh </label>
                                    <label><Checkbox value="user_4" /> Trần Minh Triết</label>
                                    <label><Checkbox value="user_5" /> Trần Đan Thư</label>
                                </CheckboxGroup>
                                <br />
                                <label>Nhãn:</label>
                                <br />
                                <CheckboxGroup
                                    checkboxDepth={2} // This is needed to optimize the checkbox group
                                    name="labelArr"
                                    value={this.state.labelArr}
                                    onChange={this._labelChanged}>
                                    <label><Checkbox value="FrontEnd" /> FrontEnd</label>
                                    <label><Checkbox value="BackEnd" /> BackEnd</label>
                                    <label><Checkbox value="API" /> API</label>
                                    <label><Checkbox value="Issue" /> Issue</label>
                                </CheckboxGroup>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                                <button type="submit" className="btn btn-success"  >{mission}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAddNewTask: state.isAddNewTask,
        editTask: state.editTask
    }
};
// 1. Add task: dispatch 1 action len: sau khi nhập vào các trường input hàm onChange sẽ sử lý các sự kiện và 
// Button thêm Task : có type=summit => trong hàm onSummit sẽ bắt được sự kiện này khi người dùng click => gọi props để dispatch giá trị
// lên store 1 task để thêm vào list
const mapDispatchToProps = (dispatch, props) => {
    return {
        addNewTask: (task) => {
            dispatch(actions.addNewTask(task));
        },
        onEditing: (taskUpdate) => {
            dispatch(actions.updateTask(taskUpdate));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup)