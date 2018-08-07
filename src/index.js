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
import { addQuestion } from './actions/questions';

const store = configureStore();

store.dispatch(addQuestion({ 
    questionText: "Is this a question?",
    userId: 500
}));

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
