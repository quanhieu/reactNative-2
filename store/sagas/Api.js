const urlGetMovies = 'http:/10.0.3.2:3000/data';
const urlPostMovies = 'http:/10.0.3.2:3000/data';

function* getMoviesFromApi() {
    try {
        let response = yield fetch(urlGetMovies);
        let responseJson = yield response.json();

        const movies = responseJson.data;
        return movies; //list of movies
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

//send POST request to add new Movie
function* insertNewMovieFromApi(newMovie) {
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
            "data": [{
                name: newMovie.name,
                releaseYear: newMovie.releaseYear,
            }]
        }),
    });
    yield console.log(`response = ${JSON.stringify(response)}`);
    return yield (response.status === 201);//true or false
}

export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi
};



// function* getMoviesFromApi() {
//     const response = yield fetch(urlGetMovies, {
//         method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: '',
//     });

//     const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []
//     return movies;
// }

// function* insertNewMovieFromApi(newMovie) {
//     const response = yield fetch(urlPostMovies, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             name: newMovie.name,
//             releaseYear: newMovie.releaseYear,
//         }),
//     });
//     yield console.log(`response = ${JSON.stringify(response)}`);
//     return yield (response.status === 201);//true or false
// }
