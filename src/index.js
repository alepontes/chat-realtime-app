import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Login from './Login/Login';
import Chat from './Chat/Chat';


import { Provider } from 'react-redux';
import store from './store'

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/chat" component={Chat} />
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
