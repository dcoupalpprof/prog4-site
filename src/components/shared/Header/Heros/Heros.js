import React from 'react';
import PropTypes from 'prop-types';
import classes from './Heros.module.scss';

const Heros = (props) => {
    return (
        <section className={classes.Heros}>
            <h1>{props.title}</h1>
        </section>
    );
};

Heros.defaultProps = {
    title: ''
};

Heros.propTypes = {
    title: PropTypes.string
};

export default Heros;