import { FETCH_JOKES, JOKES_SUCCESS, JOKES_ERROR } from '../ActionType'

import { put, takeEvery, call } from 'redux-saga/effects'


function* fetchJokes() {
    try {
        const res = yield call(() =>
            fetch('https://icanhazdadjoke.com/api#search-for-dad-jokes')
        )
        const json = yield res.json()
        yield put({ type: JOKES_SUCCESS, payload: json.results })
    } catch (error) {
        yield put({ type: JOKES_ERROR, payload: error })
    }
}

function* jokesSaga() {
    yield takeEvery(FETCH_JOKES, fetchJokes)
}

export default jokesSaga
