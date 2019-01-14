import React from 'react';
import classes from './A.module.css';
import propTypes from 'prop-types';

const A = (props) => (
    <a target="_blank" className={classes.A} href={props.url}>[{props.children}]</a>
);

A.propTypes = {
    url: propTypes.string
};

export default A;