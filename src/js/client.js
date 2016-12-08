import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'mobx-react'

import store from './store'

import App from './components/App'

import GroceryList from './components/GroceryList'
import NewGrocery from './components/NewGrocery'

const app = document.getElementById('app')
ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={GroceryList} />
          <Route path="new" component={NewGrocery} />
        </Route>
      </Router>
    </Provider>
  ),
  app
)
