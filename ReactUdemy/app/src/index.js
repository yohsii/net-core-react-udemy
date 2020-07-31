//import react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers/index';

ReactDOM.render(
    (
        <Provider store={createStore(reducers)}>
            <App />
        </Provider>
    )
, document.querySelector("#root"));