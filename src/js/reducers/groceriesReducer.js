export default function reducer(state={
  name: null
}, action){
  switch (action.type) {
    case 'CREATE_GROCERY': {
      return {
        name: action.payload
      }
    }
  }
}
