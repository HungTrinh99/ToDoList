import React, { Component } from 'react'
import Controller from './Components/Controller'
import TaskList from './Components/TaskList'
import './App.css'
import Modalpopup from './Components/Modalpopup'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center my-2">TO DO LIST</h2>
        <div className="container-fluid">
          <div className="row">
            <Controller />
            <TaskList />
            <Modalpopup />
          </div>
        </div>
      </div>
    )
  }
}
