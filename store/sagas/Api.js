const urlGetMovies = 'http:/10.0.3.2:3000/data';
const urlPostMovies = 'http:/10.0.3.2:3000/data';
const urlUpdateMovie = 'http:/10.0.3.2:3000/data';
const urlDeleteMovie = 'http:/10.0.3.2:3000/data';

function* getMoviesFromApi() {
    try {
        // this code fake handle get at server
        let response = yield fetch(urlGetMovies);
        let responseJson = yield response.json();

        const movies = responseJson.data;
        // this code fake handle get at server

        return movies; //list of movies
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

//send POST request to add new Movie
function* insertNewMovieFromApi(newMovie) {
    // this code fake handle create at server
    let res = yield fetch(urlGetMovies);
    let resJson = yield res.json();
    const movies = resJson.data;
    // this code fake handle create at server

    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // name: newMovie.name,
            // releaseYear: newMovie.releaseYear,
            "status": 201,
            "data": [
                ...movies,
                {
                id: movies.length + 2,
                name: newMovie.name,
                releaseYear: newMovie.releaseYear,
            }]
        }),
    });
    yield console.log(`response = ${JSON.stringify(response)}`);
    return yield (response.status === 201);//true or false
}

// send PUT request to update existing Movie
function* updateMovieFromApi(updatedMovie) {
    // this code fake handle update at server
    let res = yield fetch(urlGetMovies);
    let resJson = yield res.json();
    const movies = resJson.data;

    let updateData = {
        id: updatedMovie.id,
        name: updatedMovie.name,
        releaseYear: updatedMovie.releaseYear
    };

    // replace element in array
    for(let mov in movies) {
        if(movies[mov].id == updatedMovie.id) {
            movies[mov] = updateData;
        }
    }
/**
    let findIndexMovie = movies.findIndex(item => item.id == updatedMovie.id);
    if(findIndexMovie !== -1) {
        // use this to replace element in array
        movies[findIndexMovie] = updateData;

        // or use this to replace element in array
        movies.splice(findIndexMovie, 1, updateData);
    }
*/
    // this code fake handle update at server

    // const urlLink = `${urlUpdateMovie}/${updatedMovie.id}`;
    const urlLink = urlUpdateMovie;
    const response = yield fetch(urlLink, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "status": 200,
            "data": movies,
        }),
    });
    return yield (response.status === 200);//true or false
}

//send DELETE request to update existing Movie
function* deleteMovieFromApi(deletedMovieId) {
    // this code fake handle delete at server
    let res = yield fetch(urlGetMovies);
    let resJson = yield res.json();
    const movies = resJson.data;
    let findIndexMovie = movies.findIndex(item => item.id === deletedMovieId);
    movies.splice(findIndexMovie, 1);
    // this code fake handle delete at server

    // const urlLink = `${urlUpdateMovie}/${updatedMovie.id}`;
    const urlLink = urlDeleteMovie;
    const response = yield fetch(urlLink, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "status": 200,
            "data": movies,
        }),
    });
    return yield (response.status === 200);//true or false
}

export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
    updateMovieFromApi,
    deleteMovieFromApi
};


/**

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });

    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []
    return movies;
}

function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear,
        }),
    });
    yield console.log(`response = ${JSON.stringify(response)}`);
    return yield (response.status === 201);//true or false
}

function* updateMovieFromApi(updatedMovie) {
    const urlLink = `${urlUpdateMovie}/${updatedMovie.id.toString()}`;
    const response = yield fetch(urlLink, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: updatedMovie.name,
            releaseYear: updatedMovie.releaseYear,
        }),
    });
    return yield (response.status === 200);//true or false
}

function* deleteMovieFromApi(deletedMovieId) {
    const urlLink = `${urlDeleteMovie}/${deletedMovieId}`;
    const response = yield fetch(urlLink, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
    });
    return yield (response.status === 200);//true or false
}

 */
