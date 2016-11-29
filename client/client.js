/*
Notes...
import 'babel-polyfill'; imports the library needed to transpile some ES6 features babel can not traspile.

Router us the component we will use to hanld our routing

We will use browserHIstory instead hasHistory to use HTML5 push states, Router component has an history attribute to specify the history type
*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './containers/routes';

console.log('client');

render(
    <Root history={browserHistory} />, document.getElementById('root')
);


//render(
//    <Router history={browserHistory} routes={routes} />,
//    document.getElementById('root')
//);



