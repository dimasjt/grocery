import React from 'react'

import Navigation from './Navigation'
import Content from './Content'

export default class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="col-xs-8 col-xs-offset-2">
          <div className="row">
            <Navigation />
            <Content content={this.props.children} />
          </div>
        </div>
      </div>
    )
  }
}
