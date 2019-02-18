// 액션과 액션 생성 함수
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({
  type: INCREMENT,
  diff: diff
});
const decrement = (diff) => ({
  type: DECREMENT,
  diff: diff
});

// 초기 상태
const initialState = {
  number: 1,
  foo: 'bar',
  baz: 'qux'
}

// 리듀서
function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + action.diff
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - action.diff
      };
    default:
      return state;
  }
}

// 스토어 생성
const { createStore } = Redux;
/*
  나중에 우리가 실제로 프로젝트에서 불러올 때는
  import { createStore } from 'redux';
  이렇게 불러옵니다.
*/
const store = createStore(counter);


// 스토어 구독
const unsbscribe = store.subscribe(() => {
  console.log(store.getState());
});

// 디스패치로 액션 전달
store.dispatch(increment(1));
store.dispatch(decrement(5));
store.dispatch(increment(10));