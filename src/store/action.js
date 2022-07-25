// action.js
import { ADD, MINS } from './const'

const getNum = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 1000)
  })
}

export const genAdd = (payload) => ({ type: ADD, count: payload })
export const genMins = (payload) => ({ type: MINS, count: payload })
export const genAsync = (payload) => {
  return async (dispatch) => {
    const num = await getNum(payload)
    return dispatch(genAdd(num))
  }
}
