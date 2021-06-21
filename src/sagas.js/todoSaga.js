//Saga effects
import {put, takeLatest} from '@redux-saga/core/effects';
import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  FETCH_TODO,
  POST_FAIL,
  POST_SUCCESS,
  POST_TODO,
} from '../actions/actionTypes';
import {Api} from '../services/Api';

function* fetchTodos() {
  try {
    const receivedTodo = yield Api.getTodoFromApi();
    yield put({type: FETCH_SUCCESS, response: receivedTodo});
  } catch (error) {
    yield put({type: FETCH_FAIL, error});
  }
}

function* postTodo() {
  try {
    const postTodo = yield Api.postTodo();
    yield put({type: POST_SUCCESS, response: postTodo});
  } catch (error) {
    yield put({type: POST_FAIL, error});
  }
}
export function* watchFetchTodo() {
  yield takeLatest(FETCH_TODO, fetchTodos);
  yield takeLatest(POST_TODO, postTodo);
}
