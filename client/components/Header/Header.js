import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

/* Notes...
Here our 1st stateless functional component.

activeClassName: Feature that cames with Link and IndexLink, when its is active, active the specified style.
*/
const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="about" activeClassName="active">About</Link>
        </nav>
    );
};

export defaul Header;