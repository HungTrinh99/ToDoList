import React, { Component } from 'react'
import { connect } from "react-redux";
import * as action from '../../Redux/Action/action'
import * as types from '../../Redux/Constant/type'

class FilterPriority extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: -1
        }
    }
    _handleOnchange = (event) => {
        this.setState({
            priority: event.target.value
        })
    }
    _handlePriority = () => {
        this.props.filterPriority(types.FILTER_PRIORIRY, this.state.priority);
    }
    render() {
        return (
            <div className="form-group text-left">
                <label>Độ ưu tiên</label>
                <select
                    className="form-control"
                    name="priority"
                    onChange={this._handleOnchange}
                    onClick={this._handlePriority}
                >
                    <option value={-1} className="font-weight-bold">Tất cả</option>
                    <option value={1} className="text-info font-weight-bold">Thấp</option>
                    <option value={2} className="text-success font-weight-bold">Trung bình</option>
                    <option value={3} className="text-danger font-weight-bold">Cao</option>
                </select>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterPriority: (type,value) => {
            dispatch(action.filterType(type,value));
        }
    }
}
export default connect(null, mapDispatchToProps)(FilterPriority);