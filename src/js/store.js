import { observable } from 'mobx'

class Grocery{
  @observable id
  @observable name
  @observable completed

  constructor(name){
    this.id = (new Date()).getTime()
    this.name = name
    this.completed = false
  }
}

class GroceryStore {
  @observable groceries = []
  @observable filter = ''

  createGrocery(name){
    this.groceries.push(new Grocery(name))
  }
}

var store = new GroceryStore

export default store
