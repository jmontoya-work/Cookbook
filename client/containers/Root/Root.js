import React, { PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './Root/Root';
import Home from './Home/Home';
import About from './About/About';

export default class Root extends React.Component {
    render() {
        console.log('root');
        const routerC = <Router history={ history }>
            <Route path="/" component= {Home} />
            <Route path="about" component= {About} />
        </Router>;
        return (
            
            
            /*<div>
                <p>Header here...</p>
                {this.props.children}
            </div>*/
        );
    }
}

//Root.propTypes = {
//    children: PropTypes.object.isRequited
//};