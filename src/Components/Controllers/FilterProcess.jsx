import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../../Redux/Constant/type'
import * as action from '../../Redux/Action/action'
class FilterProcess extends Component {
    _handleProcess=(value)=>{
        this.props._handleFilterProcess(types.FILTER_PROCESS,value);
    }
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">Lọc
                    <li className="py-1 display-5 lead" onClick={() => this._handleProcess(-1)}>
                        <i className="fa fa-align-justify mr-2"></i><b>Tất cả</b>
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this._handleProcess(1)}>
                        <i className="fa fa-minus-circle mr-2" aria-hidden="true" />Chưa bắt đầu
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this._handleProcess(2)}>
                        <i className="fa fa-spinner mr-2" aria-hidden="true" />Đang tiến hành
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this._handleProcess(3)}>
                        <i className="fa fa-check-circle mr-2"></i>Hoàn thành
                    </li>

                </ul>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        _handleFilterProcess : (type,value) => {
            dispatch(action.filterType(type,value));
        }
    }
}
export default connect(null, mapDispatchToProps)(FilterProcess);

