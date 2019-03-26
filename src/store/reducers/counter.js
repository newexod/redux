import * as actionTypes from '../actions/actionTypes';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // 2 вариант
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

      // 1 вариант для простых типов данных
      // return {
      //   counter: state.counter + 1
      // }
    case actionTypes.DECREMENT:
      // 3 вариант
      return {
        ...state,
        counter: state.counter - 1
      }
      // return {
      //   counter: state.counter - 1
      // }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.payload
      }
  }
  return state;
};

export default reducer;