import { observable, computed } from 'mobx'

class Grocery{
  @observable id
  @observable name
  @observable completed
  @observable votes

  constructor(name){
    this.id = (new Date()).getTime()
    this.name = name
    this.completed = false
    this.votes = 0
  }
}

class GroceryStore {
  @observable groceries = []
  @observable filter = ''
  @observable order = 'newest'

  @computed get filteredGroceries(){
    var matchesFilter = new RegExp(this.filter, "i")
    var groceries = this.groceries.filter((grocery) => {
      !this.filter || matchesFilter.test(grocery.name)
    })

    groceries = this.groceries.sort((a, b) => {
      switch (this.order) {
        case 'top':
          return b.votes - a.votes
        default:
          return b.id - a.id
      }
    })

    return groceries
  }

  createGrocery(name){
    this.groceries.push(new Grocery(name))
  }

  completedGroceries = (completed = true) => {
    return this.groceries.filter((grocery) => {
      if (completed) {
        return !grocery.completed
      }

      return grocery.completed
    })
  }

  clearCompleted = () => {
    const uncompletedGroceries = this.completedGroceries(true)
    this.groceries.replace(uncompletedGroceries)
  }

  deleteGrocery = (grocery) => {
    if(confirm('Are you sure?')){
      this.groceries.remove(grocery)
    }
  }
}

var store = new GroceryStore

export default store
