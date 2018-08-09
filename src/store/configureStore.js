import { createStore, combineReducers } from 'redux';
import questionReducer from '../reducers/questions';
import answerReducer from '../reducers/answers';
import commentReducer from '../reducers/comments';

export default () => {
    const store = createStore(
        combineReducers(
            {
                questions: questionReducer,
                answers: answerReducer,
                comments: commentReducer
            }
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};