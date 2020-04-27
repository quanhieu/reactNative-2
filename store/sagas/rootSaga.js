//Saga effects
import { call, all, fork } from 'redux-saga/effects';
import { watchFetchMovies, watchAddNewMovie, watchUpdateMovie, watchDeleteMovie, movieSagas } from './movieSagas';

export default function* rootSaga() {
    yield all([...movieSagas,]);
}


// export default function* rootSaga() {
//     yield [
//         fork(watchFetchMovies),
//         fork(watchAddNewMovie),
//         fork(watchUpdateMovie),
//         fork(watchDeleteMovie)
//     ];
// }


// export default function* rootSaga() {
//     yield call(watchFetchMovies);
// }
