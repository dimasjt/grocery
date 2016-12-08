import React from 'react'
import { inject, observer } from 'mobx-react'

// inject is for handle react-router
// http://frontendinsights.com/connect-mobx-react-router/
@inject('store') @observer
export default class NewGrocery extends React.Component {
  constructor(){
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleChecked(grocery){
    grocery.completed = !grocery.completed
  }

  handleSubmit(event){
    event.preventDefault()

    this.props.store.createGrocery(this.groceryName.value)
    this.groceryName.value = null
    this.groceryName.focus()
  }

  render(){
    const { groceries } = this.props.store

    const groceryList = groceries.map((grocery) => (
      <li key={grocery.id} className="checkbox">
        <label>
          <input type="checkbox" onChange={this.toggleChecked.bind(this, grocery)} checked={grocery.completed} />
          { grocery.name }
        </label>
      </li>
    ))

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" ref={input => this.groceryName = input} placeholder="Grocery name..."
              className="form-control" autoComplete="off" />
            <div className="input-group-btn">
              <input type="submit" value="Save" className="btn btn-default" />
            </div>
          </div>
        </form>

        <div>
          <ul className="list-unstyled">{groceryList}</ul>
        </div>
      </div>
    )
  }
}
