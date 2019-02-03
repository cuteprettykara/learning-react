import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';
import { applyPenders } from 'redux-pender';

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST = 'GET_POST';

export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
  data: {
    title: '',
    body: ''
  }
}

const reducer = handleActions({
  // 다른 일반 액션들을 관리..
}, initialState);

// 첫 번째 파라미터 : 일반 리듀서
// 두 번재 파라미터 : pender 관련 객체들을 배열 형태로
export default applyPenders(reducer, [
  {
    type: GET_POST,
    // 성공했을 때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
    onSuccess: (state, action) => {
      const { title, body } = action.payload.data;
      return {
        data: {
          title,
          body
        }
      }
    },
    onCancel: (state, action) => {
      return {
        data: {
          title: '취소됨',
          body: '취소됨'
        }
      }
    }
  },
  /*
    다른 pender 액션들
    { type: GET_SOMETHING, onSuccess: (state, action) => ... },
    { type: GET_SOMETHING, onSuccess: (state, action) => ... }
  */
]);