import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'mobx-react'

import store from './store'

import App from './components/App'

import GroceryList from './components/GroceryList'
import NewGrocery from './components/NewGrocery'
import Temperature from './components/Temperature'

const app = document.getElementById('app')
ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={GroceryList} />
          <Route path="new" component={NewGrocery} />
          <Route path="temperature" component={Temperature} />
        </Route>
      </Router>
    </Provider>
  ),
  app
)
