import React, { Component } from 'react'

export default class FilterProcess extends Component {
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">Lọc
                    <li className="py-1 display-5 lead">
                        <i class="fa fa-align-justify mr-2"></i><b>Tất cả</b>
                    </li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-minus-circle mr-2" aria-hidden="true" />Chưa bắt đầu
                    </li>
                    <li className="py-1 display-5 lead">
                        <i className="fa fa-spinner mr-2" aria-hidden="true" />Đang tiến hành
                    </li>
                    <li className="py-1 display-5 lead">
                        <i class="fa fa-check-circle mr-2"></i>Hoàn thành
                    </li>

                </ul>
            </div>
        )
    }
}
