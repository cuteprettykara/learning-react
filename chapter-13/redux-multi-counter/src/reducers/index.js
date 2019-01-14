import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다.
const initialState = {
  counters: [
    {
      color: 'black',
      number: 0
    }
  ]
};

const counter = (state=initialState, actions) => {
  // 레퍼런스 생성
  const { counters } = state;

  switch (actions.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: actions.color,
            number: 0
          }
        ]
      }
  
    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length-1)
      }

    case types.INCREMENT:
      return {
        counters: counters.map((item, index) => 
          (index === actions.index)
            ? {
                color: item.color,
                number: ++item.number
              }
            : item
        )
      }

    case types.DECREMENT:
      return {
        counters: counters.map((item, index) => 
          (index === actions.index)
            ? {
                color: item.color,
                number: --item.number
              }
            : item
        )
      }

    case types.SET_COLOR:
      return {
        counters: counters.map((item, index) => 
          (index === actions.index)
            ? {
                color: actions.color,
                number: item.number
              }
            : item
        )
      }

    default:
      return state;
  }
}

export default counter;