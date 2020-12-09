import { NEW_TODO, DELETE_TODO } from '../actions'
// import the new action

const todoReducer = (state = [], action) => {
  switch(action.type) {
    case NEW_TODO:
      return [...state, action.payload]

    case DELETE_TODO:
      const newState = state.filter((item, i) => {
        return i !==  action.payload.index
      })
      return newState
    default:
      return state
  }
}

export default todoReducer
