import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './Root/Root';
import Home from './Home/Home';
import About from './About/About';

console.log('routes');

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
    </Route>
);

/* Notes... 
IndexRoute the root path to expose

We are saying always loadthe Client component an then pass the pther 2 as children... here you can see the Client component so...
If we load / or /about about, Home/About component will be passed to Client as child and composed here... {this.props.children}

export default class Client extends React.Component {
    render() {
        return (
            <div id="root">
                <p>Header here...</p>
                {this.props.children}
            </div>
        );
    }
}

Client.propTypes = {
    children: PropTypes.object.isRequited
};
*/
