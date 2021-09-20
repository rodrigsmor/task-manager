import { all } from 'redux-saga/effects';
import tasksSaga from './Tasks/Task.saga';

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ])
}