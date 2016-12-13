import React from 'react'
import { Link } from 'react-router'

export default class Navigation extends React.Component {
  render(){
    return (
      <div className="col-xs-4">
        <div className="list-group">
          <Link to="/" className="list-group-item">List Grocery</Link>
          <Link to="new" className="list-group-item">New Grocery</Link>
          <Link to="temperature" className="list-group-item">Temperature</Link>
          <Link to="weather" className="list-group-item">Weather</Link>
        </div>
      </div>
    )
  }
}
