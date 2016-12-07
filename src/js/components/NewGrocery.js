import React from 'react'

export default class NewGrocery extends React.Component {
  constructor(){
    super()

    this.state = {
      grocery: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      grocery: { name: event.target.value }
    })
  }

  handleSubmit(event){
    event.preventDefault()
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" onChange={this.handleChange} placeholder="Grocery name..." className="form-control" />
            <div className="input-group-btn">
              <input type="submit" value="Save" className="btn btn-default" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
