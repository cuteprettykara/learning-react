import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0
};

const number = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: ++state.number
      }

    case types.DECREMENT:
      return {
        ...state,
        number: --state.number
      }
  
    default:
      return state;
  }
};

export default number;