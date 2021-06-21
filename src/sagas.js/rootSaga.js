import { call } from '@redux-saga/core/effects';
import { watchFetchTodo } from './todoSaga';

export default function* rootSaga() {
    yield call(watchFetchTodo);              
}