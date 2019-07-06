import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import CoffeeService from './services/service';
import CoffeeServiceContext from './components/service-context';
import store from './store';

const coffeeService = new CoffeeService();

ReactDOM.render(
    <Provider store={store}>
        <CoffeeServiceContext.Provider value={coffeeService} >
            <Router>
                <App />
            </Router>
        </CoffeeServiceContext.Provider>
    </Provider>
    , document.getElementById('root'));
