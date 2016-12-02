import React from 'react'

export default class Content extends React.Component {
  render(){
    return (
      <div className="col-xs-8">
        <div className="panel panel-default">
          <div className="panel-body">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}
