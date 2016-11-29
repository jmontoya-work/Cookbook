//import React, { Component, PropTypes } from 'react';
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import React from 'react';
import {Link} from 'react-router';

/* Notes...
import {Link} from 'react-router'; means we are importing the Link component from react-router.
When we make import Root from bla we referenced the Root class because we are exporting default.

There is a limitation for stateless components, there are not hot reloaded at least they have come parent that is a class, so we created class for our top components.
*/

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!!!</h1>
                <Link to="about">Learn More</Link>
            </div>
        );
    }
}
