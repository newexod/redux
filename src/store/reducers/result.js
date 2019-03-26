import * as actionTypes from '../actions/actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), payload: action.result})
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