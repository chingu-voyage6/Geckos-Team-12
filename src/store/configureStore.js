import { createStore, combineReducers } from 'redux';
import questionReducer from '../reducers/questions';
import answerReducer from '../reducers/answers';

export default () => {
    const store = createStore(
        combineReducers(
            {
                questions: questionReducer,
                answers: answerReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};