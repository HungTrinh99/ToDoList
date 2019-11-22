import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskItem from './TaskItem/TaskItem';
import * as action from '../Redux/Action/action'

class TaskList extends Component {
    chooseEditTask = (task) => {
        this.props.dispatch(action.editTask(task));
    }
    deleteTask=(id)=>{
        this.props.dispatch(action.deleteTask(id));
    }
    choseEditStatus=(item)=>{
        this.props.dispatch(action.updateStatus(item));
    }
    render() {
        return (
            <div className="col-md-9 px-0">
                {/* Header */}
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left my-0">
                                <input type="text" className="form-control" placeholder="Tìm kiếm công việc" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Table */}
                <div className="px-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Công việc</th>
                                <th className="text-center">Nhãn</th>
                                <th className="text-center">Độ ưu tiên</th>
                                <th className="text-center">Người thực hiện</th>
                                <th className="text-center">Tình trạng</th>
                                <th className="text-center">Xử lý</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.TaskList.map((item, index) => {
                                    return (
                                        <TaskItem
                                            deleteTask={this.deleteTask}
                                            chooseEditTask={this.chooseEditTask}
                                            choseEditStatus={this.choseEditStatus}
                                            key={index}
                                            index={index}
                                            item={item}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        TaskList: state.TaskList
    }
}

export default connect(mapStateToProps)(TaskList)


