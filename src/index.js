import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './styles/index.css';
import App from './App';
import configureStore from './store/configureStore';

// Import for testing out dispatching of actions
// import { addAnswer, editAnswer, removeAnswer } from './actions/answers';

const store = configureStore();

// Testing out dispatching of actions
// store.dispatch(addAnswer({
//     answerText: 'This is my answer',
//     relatedUserId: 300,
//     relatedQuestionId: 700
// }));

// store.dispatch(editAnswer('5', {
//     answerText: 'Now this is a new answer!'
// }));

// store.dispatch(removeAnswer('5'));

// store.dispatch(addAnswer({
//     answerText: 'This is my answer',
//     relatedUserId: 300,
//     relatedQuestionId: 700
// }));

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
