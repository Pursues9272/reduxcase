//reducer.js
import { ADD, MINS } from './const'
const defaultState = {
  count: 0
}

function reducer (state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + action.count }
    case MINS:
      return { ...state, count: state.count - action.count }
    default:
      return state
  }
}

export default reducer
