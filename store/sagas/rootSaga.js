//Saga effects
import { call, all, fork } from 'redux-saga/effects';
import { watchFetchMovies, watchAddNewMovie, movieSagas } from './movieSagas';

// export default function* rootSaga() {
//     yield [
//         fork(watchFetchMovies),
//         fork(watchAddNewMovie),
//     ];
// }

export default function* rootSaga() {
    yield all([...movieSagas,]);
}

// export default function* rootSaga() {
//     yield call(watchFetchMovies);
// }
