import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 1. 액션 타입 정의
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';


// 2. 액션 생성 함수 정의
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 3. 리듀서의 초기 상태를 정의
const initialState = List([
  Map({ id: 0, text: '리액트 공부하기', done: true }),
  Map({ id: 1, text: '컴포넌트 스타일링 해보기', done: false })
]);

// 4. 리듀서 정의
export default handleActions({
  [INSERT] : (state, action) => {
    const { id, text, done } = action.payload;

    return state.push(Map({
      id,
      text,
      done
    }));
  },
  [TOGGLE]: (state, action) => {
    const { payload: id } = action;
    // = const id = action.payload;
    /* 비구조화 할당을 통하여 id라는 레퍼런스에 action.payload란 값을 넣습니다.
    이 작업이 필수는 아니지만, 나중에 이 코드를 보게 되었을 때 여기서의 payload가
    어떤 값을 의미하는지 이해하기 쉬워집니다. */

    // 방법 1 : map 사용(ES6)
    return state.map(todo => 
      (todo.get('id') === id)
      ? todo.set('done', !todo.get('done'))
      : todo
    );

    // 방법 2 : updateIn 사용(Immutalbe.js)
    // 전달받은 id 를 가지고 index 를 조회합니다.
    // const index = state.findIndex(todo => todo.get('id') === id);

    // updateIn을 통해 현재 값을 참조하여 반대값으로 설정합니다.
    // return state.updateIn([index, 'done'], done => !done);

    /* updateIn을 사용하지 않는다면 다음과 같이 작성할 수도 있습니다.
    return state.setIn([index, 'done'], !state.getIn([0, index]));
    어떤 코드가 더 편해 보이나요? 둘 중에 여러분이 맘에 드는 코드로 작성하면 됩니다.
    */
  },
  [REMOVE] : (state, action) => {
    const { payload: id } = action;

    // 방법 1 : filter 사용(ES6)
    // const newTodos = state.filter(todo => todo.get('id') !== id);
    // return newTodos;

    // 방법 2 : delete 사용(Immutalbe.js)
    const index =state.findIndex(todo => todo.get('id') === id);
    return state.delete(index);
  },
}, initialState);



      