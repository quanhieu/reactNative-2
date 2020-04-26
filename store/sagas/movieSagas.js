import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE } from '../actions/actionTypes';
//Saga effects  && put = dispatch action
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();

        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });
    } catch (error) {
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}

//Add new movie
function* addNewMovie(action) {
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovie);

        if (result === true) {
            yield put({ type: FETCH_MOVIES, sort: 'desc'});
        }
    } catch (error) {
        //do nothing
    }
}
export function* watchAddNewMovie() {
    yield takeLatest(ADD_MOVIE, addNewMovie);
}


export const movieSagas = [
    takeLatest(FETCH_MOVIES, fetchMovies),
    takeLatest(ADD_MOVIE, addNewMovie),
]
