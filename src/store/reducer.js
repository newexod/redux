const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // 2 вариант
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

      // 1 вариант для простых типов данных
      // return {
      //   counter: state.counter + 1
      // }
    case 'DECREMENT':
      // 3 вариант
      return {
        ...state,
        counter: state.counter - 1
      }
      // return {
      //   counter: state.counter - 1
      // }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'SUBSTRACT':
      return {
        ...state,
        counter: state.counter - action.payload
      }
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({id: new Date(), payload: state.counter})
      }
  }
  return state;
};

export default reducer;