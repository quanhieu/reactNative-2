import React from 'react';
import { Provider } from 'react-redux';
import {configureStore} from './store';
import Counter from './containers/CounterContainer';

const store = configureStore();

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
};

export default App;
