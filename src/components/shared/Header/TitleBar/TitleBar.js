import React from 'react';
import classes from './TitleBar.module.css';
import PropTypes from 'prop-types';

const TitleBar = (props) => {
    return (
        <div className={classes.TitleBar}>
            <h2>{props.title}</h2>
        </div>
    );
};

TitleBar.defaultProps = {
    title: ''
};
TitleBar.propTypes = {
    title: PropTypes.string
};

export default TitleBar;