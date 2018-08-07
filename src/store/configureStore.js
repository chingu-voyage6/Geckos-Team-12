import { createStore, combineReducers } from 'redux';
import questionReducer from '../reducers/questions';

export default () => {
    const store = createStore(
        combineReducers(
            {
                questions: questionReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};