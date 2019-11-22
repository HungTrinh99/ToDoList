import React, { Component } from 'react'
import AddNewtask from './Controllers/AddNewTask'
import FilterProcess from './Controllers/FilterProcess'
import FilterLabel from './Controllers/FilterLabel'
import FilterPriority from './Controllers/FilterPriority'
import Sort from './Controllers/Sort'

export default class Controller extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="admin" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Trịnh Vũ Minh Hùng</h3>
                </div>
                <AddNewtask />
                {/* Filter */}
                <div className="px-3">
                    <FilterProcess />
                    <FilterLabel />
                    <FilterPriority />
                    <Sort />
                </div>
            </div>
        )
    }
}
