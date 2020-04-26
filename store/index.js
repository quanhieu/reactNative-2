import { createStore } from 'redux';

import rootReducers from './reducers';

export function configureStore(){
    const store = createStore(rootReducers);
    return store;
}
