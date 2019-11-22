import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../../Redux/Constant/type'

class FilterProcess extends Component {
    _handleFilterProcess = (value) => {
        let action = {
            type: types.FILTER_PROCESS,
            payload: value
        };
        this.props.dispatch(action);
    }
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">Lọc
                    <li className="py-1 display-5 lead" onClick={() => this._handleFilterProcess(-1)}>
                        <i className="fa fa-align-justify mr-2"></i><b>Tất cả</b>
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this._handleFilterProcess(1)}>
                        <i className="fa fa-minus-circle mr-2" aria-hidden="true" />Chưa bắt đầu
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this._handleFilterProcess(2)}>
                        <i className="fa fa-spinner mr-2" aria-hidden="true" />Đang tiến hành
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this._handleFilterProcess(3)}>
                        <i className="fa fa-check-circle mr-2"></i>Hoàn thành
                    </li>

                </ul>
            </div>
        )
    }
}

export default connect()(FilterProcess);

