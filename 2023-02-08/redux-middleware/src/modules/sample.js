import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// api를 사용해 데이터를 받아와 상태를 관리할 sample 리듀서

// 액션 타입 선언
// 한 요청당 세 개 생성

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을 때 다른 액션을 디스패치

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태를 선언
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리

const initialState = {
  post: null,
  users: null,
};

// 로딩 중의 상태관리를 하지 않아도 됨
// 성공 시 케이스만 관리하면 됨
// 실패 시 케이스 관리하고 싶으면 _FAILURE 가 붙은 액션을 리듀서에서 처리하면 됨

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState,
);

export default sample;
