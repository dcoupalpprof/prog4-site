import React from 'react';
import classes from './A.module.css';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

const A = ({url, internal = false, children}) => {
    return internal ? (
        <Link to={url} className={classes.A}>[{children}]</Link>
        ) : (
        <a target="_blank" rel="noopener noreferrer" className={classes.A} href={url}>[{children}]</a>
    );
};

A.propDefaults = {
    internal: false
};

A.propTypes = {
    url: propTypes.string,
    internal: propTypes.bool
};

export default A;
