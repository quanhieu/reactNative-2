import { INCREMENT, DECREMENT } from '../actions/actionTypes';
//Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function* sayHello() {
    console.warn('Hello world');
}

function* increment() {
    console.warn(`This is increment saga`);
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, increment);
}

function* decrement() {
    console.warn(`This is decrement saga`);
}

export function* watchDecrement() {
    //yield put({ type: INCREMENT, step: step });
    console.warn(`watchDecrement saga`);
    yield takeEvery(DECREMENT, decrement);
}
