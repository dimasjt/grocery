import React from 'react'

export default class Navigation extends React.Component {
  render(){
    return (
      <div className="col-xs-4">
        <div className="list-group">
          <a href="#" className="list-group-item">New Grocery</a>
          <a href="#" className="list-group-item">List Grocery</a>
        </div>
      </div>
    )
  }
}
