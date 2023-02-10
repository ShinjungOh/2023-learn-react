import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

// api를 사용해 데이터를 받아와 상태를 관리할 sample 리듀서

// 액션 타입 선언

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

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
