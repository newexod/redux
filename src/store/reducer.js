import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
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
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), payload: state.counter})
      }
    case actionTypes.DELETE_RESULT:
      // 1 вариант иммутабельности
      // const id = 2;
      // const newArray = [...state.results]; // в newArray хранится копия state.results
      // newArray.splice(id, 1);
      // return {
      //   ...state,
      //   results: newArray
      // }


      // 2 вариант иммутабельности
      const updatedArray = state.results.filter(result => result.id !== action.resultElemId);
      return {
        ...state,
        results: updatedArray
      }
  }
  return state;
};

export default reducer;