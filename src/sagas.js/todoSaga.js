//Saga effects
import {put, takeLatest} from '@redux-saga/core/effects';
import {
  DELETE_FAIL,
  DELETE_SUCCESS,
  DELETE_TASK,
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

function* postTodo(action) {
  try {
    const postTodo = yield Api.postTodo(action.params);
    yield put({type: POST_SUCCESS, response: postTodo});
  } catch (error) {
    yield put({type: POST_FAIL, error});
  }
}

function* deleteTask(action){
  try {
    const deleteTask = yield Api.deleteTask(action.id)
    yield put({type: DELETE_SUCCESS,response: deleteTask})
  } catch (error) {
    yield put({type: DELETE_FAIL,error})
  }
}
export function* watchFetchTodo() {
  yield takeLatest(FETCH_TODO, fetchTodos);
  yield takeLatest(POST_TODO, postTodo);
  yield takeLatest(DELETE_TASK, deleteTask);

}
