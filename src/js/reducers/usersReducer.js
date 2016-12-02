export default function reducer(state={
  name: null,
  age: 0
}, action){
  switch (action.type) {
    case 'CREATE_USER': {
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age
      }
    }
  }
}
