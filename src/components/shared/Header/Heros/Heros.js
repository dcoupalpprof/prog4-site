import React from 'react';
import PropTypes from 'prop-types';
import classes from './Heros.module.scss';

const Heros = (props) => {
    return (
        <section className={classes.Heros}>
            <img srcSet="/img/heros_small.jpg 640w, /img/heros_medium.jpg 1280w, /img/heros_full.jpg 2048w" src="/img/heros_medium.jpg" alt="Code javascript" className={classes.HerosBg}/>
            <h1 className={classes.HerosTitle}>{props.title}</h1>
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