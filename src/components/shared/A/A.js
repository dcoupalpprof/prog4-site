import React from 'react';
import classes from './A.module.css';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';

const A = (props) => {
    return props.internal ? (
        <Link to={props.url} className={classes.A}>[{props.children}}</Link>
        ) : (
        <a target="_blank" rel="noopener noreferrer" className={classes.A} href={props.url}>[{props.children}]</a>
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