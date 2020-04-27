import {
    FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE,
    UPDATE_MOVIE, UPDATE_SUCCEEDED,
    DELETE_MOVIE, DELETE_SUCCEEDED
} from '../actions/actionTypes';
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
// export function* watchFetchMovies() {
//     yield takeLatest(FETCH_MOVIES, fetchMovies);
// }

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
// export function* watchAddNewMovie() {
//     yield takeLatest(ADD_MOVIE, addNewMovie);
// }

//Update a movie
function* updateMovie(action) {
    try {
        // console.log(`Update movies successfully`);
        const result = yield Api.updateMovieFromApi(action.updatedMovie);

        // this code below fix for fit to run
        if (result === true || !result) {
            yield put({ type: UPDATE_SUCCEEDED, updatedMovie: action.updatedMovie });
        }
    } catch (error) {
        //do nothing
    }
}
// export function* watchUpdateMovie() {
//     yield takeLatest(UPDATE_MOVIE, updateMovie);
// }

//Delete a movie
function* deleteMovie(action) {
    try {
        const result = yield Api.deleteMovieFromApi(action.deletedMovieId);

        // this code below fix for fit to run
        if (result === true || !result) {
            yield put({ type: DELETE_SUCCEEDED, deletedMovieId: action.deletedMovieId });
        }
    } catch (error) {
        //do nothing
    }
}
// export function* watchDeleteMovie() {
//     yield takeLatest(DELETE_MOVIE, deleteMovie);
// }


export const movieSagas = [
    takeLatest(FETCH_MOVIES, fetchMovies),
    takeLatest(ADD_MOVIE, addNewMovie),
    takeLatest(UPDATE_MOVIE, updateMovie),
    takeLatest(DELETE_MOVIE, deleteMovie)
]
