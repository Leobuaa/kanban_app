/**
 * Created by leo on 4/20/16.
 */
module.exports = {
    plugins: [
        require('babel-plugin-syntax-class-properties'),
        require('babel-plugin-syntax-decorators'),
        require('babel-plugin-syntax-object-rest-spread'),

        // You can pass parameters using an array syntax
        [
            require('babel-plugin-transform-regenerator'),
            {
                async: false,
                asyncGenerators: false
            }
        ]
    ]
};

import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

persist(alt, storage, 'app');

ReactDOM.render(<App/>, document.getElementById('app'));