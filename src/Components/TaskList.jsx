import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskItem from './TaskItem/TaskItem';
import * as types from '../Redux/Constant/type'
import * as action from '../Redux/Action/action'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskSearch: ''
        }
    }

    //Search TASK
    _handleOnchange = (event) => {
        this.setState({
            taskSearch: event.target.value
        })
    }
    // Update task item
    chooseEditTask = (task) => {
        this.props.dispatch(action.editTask(task));
    }

    //Delete task item by ID
    deleteTask = (id) => {
        this.props.dispatch(action.deleteTask(id));
    }
    //Update task status
    choseEditStatus = (item) => {
        this.props.dispatch(action.updateStatus(item));
    }
    //Get TaskList:
    getTaskList = () => {
        let listFinal = [];
        let listCurrent = this.props.TaskList;
        let { type, payload } = this.props.FilterType;
        let value = payload + "";
        if (this.state.taskSearch !== '') {
            listFinal = listCurrent.filter((task) => {
                return task.name.toLowerCase().indexOf(this.state.taskSearch.toLowerCase()) !== -1;
            })
            return listFinal;
        }
        else {
            switch (type) {
                case types.FILTER_PROCESS:
                    {
                        if (value === "-1")
                            return listCurrent;
                        else {
                            for (let i = 0; i < listCurrent.length; i++) {
                                if (listCurrent[i].status === value)
                                    listFinal = [...listFinal, listCurrent[i]];
                            }
                        }

                        return listFinal;
                    }
                case types.FILTER_PRIORIRY:
                    {
                        if (value === "-1")
                            return listCurrent;
                        else {
                            for (let i = 0; i < listCurrent.length; i++) {
                                if (listCurrent[i].priority === value)
                                    listFinal = [...listFinal, listCurrent[i]];
                            }
                        }

                        return listFinal;
                    }
                case types.FILTER_LABEL:
                    {
                        for (let i = 0; i < listCurrent.length; i++) {
                            let temp = listCurrent[i].labelArr;
                            for (let j = 0; j < temp.length; j++)
                                if (temp[j].toLowerCase() === value.toLowerCase())
                                    listFinal = [...listFinal, listCurrent[i]];
                        }
                        console.log(listFinal);
                        return listFinal;
                    }
                default: return listCurrent;
            }
        }
    }
    render() {
        let TaskList = this.getTaskList();
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
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tìm kiếm công việc"
                                    onChange={this._handleOnchange}
                                    name="taskSearch"
                                />
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
                                TaskList.map((item, index) => {
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
        TaskList: state.TaskList,
        FilterType: state.filterType
    }
}

export default connect(mapStateToProps, null)(TaskList)


