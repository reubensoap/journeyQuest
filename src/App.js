import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import configureStore from './store/configureStore';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);




ReactDOM.render(jsx, document.getElementById('test'));