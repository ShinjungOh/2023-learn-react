import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSage } from './counter';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export function* rootSaga() {
  // all은 여러 사가를 합쳐 주는 역할
  yield all([counterSage()]);
}

export default rootReducer;
