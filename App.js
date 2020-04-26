import React from 'react';
import { Provider } from 'react-redux';
import {configureStore} from './store';
import Movie from './containers/MovieContainer';

const store = configureStore();

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <Movie/>
        </Provider>
    );
};

export default App;
