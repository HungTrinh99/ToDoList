import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../../Redux/Action/action'
class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: ''
        }
    }
    _handelOnchange=(event)=>{
        this.setState({
            sortType:event.target.value
        })
    }
    _handleSort=()=>{
        this.props.onSort(this.state.sortType);
    }
    render() {
        return (
            <div className="form-group text-left">
                <label>Sắp xếp theo công việc</label>
                <select
                    className="form-control"
                    name="sortType"
                    onChange={this._handelOnchange}
                    onClick={this._handleSort}
                >
                    <option value="1">Từ A đến Z</option>
                    <option value="0">Từ Z đến A</option>
                </select>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (value) => {
            dispatch(action.sortAlphabet(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(Sort);