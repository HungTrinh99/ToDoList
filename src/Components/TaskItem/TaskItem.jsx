import React, { Component } from 'react'

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            status: ''
        };
    }
    // Lấy nhãn công việc
    getLabelColor(label) {
        let color = "";
        switch (label) {
            case "FrontEnd":
                return color = "#389E0D";
            case "BackEnd":
                return color = "#722ED1";
            case "API":
                return color = "#13C2C2";
            case "Issue":
                return color = "#CF1322";
            default:
                color = "";
                break;
        }
        return color;
    }
    //Lấy độ ưu tiên công việc
    getPriority = (prior) => {
        let temp = "";
        prior += "";
        switch (prior) {
            case "3":
                return temp = "Cao";
            case "2":
                return temp = "Trung bình";
            case "1":
                return temp = "Thấp";
            default:
                temp = "";
                break;
        }
        return temp;
    }
    //Lấy người thức hiện công việc
    getImg = (member) => {
        let temp = "./img/" + member + ".jpg";
        return temp;
    }
    // handle onChange
    _handleOnChange = (event) => {
        this.setState({
            status: event.target.value,
            id: this.props.item.id
        })
    }
    //Sửa task
    _handelEditing = () => {
        this.props.chooseEditTask(this.props.item);
    }
    //Sửa tình trạng status
    _handleStatus = () => {
        this.props.choseEditStatus(this.state);
    }
    // Xóa task
    _handleDelete = () => {
        this.props.deleteTask(this.props.item.id);
    }
    //Lấy thuộc tình tình trạng công việc
    getStatusName = (status) => {
        let temp = "";
        switch (status) {

            case "1":
                temp = "Chưa bắt đầu"
                break;
            case "2":
                temp = "Đang tiến hành"
                break;
            case "3":
                temp = "Hoàn thành"
                break;
            default:
                temp = "";
                break;
        }
        return temp;
    }
    render() {
        let valueStatus = this.getStatusName(this.props.item.status);
        let { item, index } = this.props;
        let labelColor = item.labelArr.map((label, index) => {
            return (
                <i className="fa fa-circle" style={{ color: this.getLabelColor(label) }} key={index} />
            )
        })
        let imgUser = item.memberIDArr.map((member, index) => {
            return (
                <img src={this.getImg(member)} className="user" alt={member} key={index} />
            )
        })
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">
                    {labelColor}
                </td>
                <td className="text-danger font-weight-bold text-center">
                    <span>{this.getPriority(item.priority)}</span>
                </td>
                <td className="text-center">
                    {imgUser}
                </td>
                <td className="text-center">
                    <select
                        className="btn mx-2"
                        style={{ border: "1px solid black" }}
                        placeholder="Đang tiến hành"
                        name="status"
                        onChange={this._handleOnChange}
                        onClick={this._handleStatus}
                    >
                        <option value={-1}>{valueStatus}</option>
                        <option value={1}> Chưa bắt đầu</option>
                        <option value={2}>Đang tiến hành</option>
                        <option value={3}>Hoàn thành</option>
                    </select>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-outline-primary mr-2" data-toggle="modal" data-target="#modalTask" onClick={this._handelEditing}>Sửa</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this._handleDelete}>Xóa</button>
                </td>
            </tr>
        )
    }
}
