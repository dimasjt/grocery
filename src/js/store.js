import { observable, computed } from 'mobx'

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
  @computed get filteredGroceries(){
    var matchesFilter = new RegExp(this.filter, "i")
    return this.groceries.filter(grocery => !this.filter || matchesFilter.test(grocery.name))
  }

  createGrocery(name){
    this.groceries.push(new Grocery(name))
  }

  clearCompleted = () => {
    const incompleteGroceries = this.groceries.filter(grocery => !grocery.completed)
    this.groceries.replace(incompleteGroceries)
  }
}

var store = new GroceryStore

export default store
