import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 1. 액션 타입 정의
const SET_INPUT = 'input/SET_INPUT';

// 2. 액션 생성 함수 정의
export const setInput = createAction(SET_INPUT);

// 3. 리듀서의 초기 상태를 정의
const initialState = Map({
  value: ''
});

// 4. 리듀서 정의
export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload)
  }
}, initialState);