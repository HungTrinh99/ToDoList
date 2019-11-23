import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as type from '../../Redux/Constant/type'
import * as action from '../../Redux/Action/action'


class FilterLabel extends Component {
    handleFilterLable=(value)=>{
        this.props._filterLabel(type.FILTER_LABEL,value);
    }
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">Nhãn
                    <li className="py-1 display-5 lead" onClick={() => this.handleFilterLable("Frontend")}>
                        <i className="fa fa-circle mr-2" />Frontend
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this.handleFilterLable("Backend")}>
                        <i className="fa fa-circle mr-2" />Backend
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this.handleFilterLable("API")}>
                        <i className="fa fa-circle mr-2" />API
                    </li>
                    <li className="py-1 display-5 lead" onClick={() => this.handleFilterLable("Issue")}>
                        <i className="fa fa-circle mr-2" />Issue
                    </li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispacth, props) => {
    return {
        _filterLabel: (type, value) => {
            dispacth(action.filterType(type, value));
        }
    }
}

export default connect(null, mapDispatchToProps)(FilterLabel);
