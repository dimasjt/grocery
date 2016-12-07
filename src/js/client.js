import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'

import GroceryList from './components/GroceryList'
import NewGrocery from './components/NewGrocery'

const app = document.getElementById('app')
ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={GroceryList} />
        <Route path="new" component={NewGrocery} />
      </Route>
    </Router>
  ),
  app
)
