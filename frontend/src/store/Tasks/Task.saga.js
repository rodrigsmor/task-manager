import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'http://localhost:8080';

function getApi() {
    return fetch(`${apiUrl}/Task/pages?page=0&size=5&sort=id,desc`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response => response.json)
        .catch((error) => {throw error});
}

function* fetchTasksPagination(action) {
    try {
        const tasks = yield call(getApi);

        yield put({
            type: 'LOAD_SUCCESS',
            tasks: tasks,
        });
    }
    catch (error) {
        yield put({
            type: 'LOAD_FAILURE',
            message: error.message,
        });
    }
}

function* tasksSaga() {
    yield takeEvery('LOAD_REQUEST', fetchTasksPagination);
}

export default tasksSaga;