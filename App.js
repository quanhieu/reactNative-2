import React from 'react';
import { Provider } from 'react-redux';
import {configureStore} from './store';
import TaskManagerComponent from './components/TaskManagerComponent';

const store = configureStore();

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <TaskManagerComponent/>
        </Provider>
    );
};

export default App;
