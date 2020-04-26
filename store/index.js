// Redux
import { createStore, applyMiddleware } from 'redux';

import rootReducers from './reducers';

// Redux saga
import createSagaMiddleware  from 'redux-saga';
import rootSaga from './sagas/rootSaga';
//Middleware
const sagaMiddleware = createSagaMiddleware();

export function configureStore(){
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
};

