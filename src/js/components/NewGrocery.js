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

  filter(event){
    this.props.store.filter = event.target.value
  }

  orderGroceries(orderType){
    this.props.store.order = orderType
  }

  upvote(grocery){
    grocery.votes++
  }

  render(){
    const { filteredGroceries, clearCompleted, completedGroceries } = this.props.store

    const groceryList = filteredGroceries.map((grocery) => (
      <li key={grocery.id} className="checkbox">
        <label>
          <input type="checkbox" onChange={this.toggleChecked.bind(this, grocery)} checked={grocery.completed} />
          { grocery.name }
        </label>
        <div className="votes">
          <span>
            Votes: { grocery.votes }
          </span>
          <a className="btn btn-xs btn-primary" onClick={this.upvote.bind(this, grocery)}>
            <span className="glyphicon glyphicon-arrow-up"></span>
          </a>
        </div>
      </li>
    ))

    const filterInput = (
      <div className="form-group">
        <input type="text" onChange={this.filter.bind(this)} className="form-control" autoComplete="off"
          placeholder="Filter groceries" />
      </div>
    )

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input type="text" ref={input => this.groceryName = input} placeholder="Grocery name..."
                className="form-control" autoComplete="off" />
              <div className="input-group-btn">
                <input type="submit" value="Save" className="btn btn-default" />
              </div>
            </div>
          </div>
        </form>

        {filterInput}

        <div className="btn-group">
          <a onClick={clearCompleted}
            className="btn btn-danger btn-sm"
            disabled={!filteredGroceries.length || !completedGroceries(false).length}>
            Clear Completed
          </a>
          <a onClick={this.orderGroceries.bind(this, 'top')} className="btn btn-default btn-sm">
            Top Groceries
          </a>
          <a onClick={this.orderGroceries.bind(this, 'newest')} className="btn btn-default btn-sm">
            Newest Groceries
          </a>
        </div>

        <div>
          <ul className="list-unstyled">{groceryList}</ul>
        </div>
      </div>
    )
  }
}
