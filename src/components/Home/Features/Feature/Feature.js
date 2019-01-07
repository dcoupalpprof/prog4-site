import React from 'react';
import classes from './Feature.module.scss';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';

const Feature = (props) => {

    const featureIconClasses = ['pi', props.icon, classes.FeatureIcon];

    return (
        <li className={classes.Feature}>
            <a className={classes.FeatureLink} href={props.link}>
                {props.name}
                <i className={featureIconClasses.join(' ')}></i>
            </a>
        </li>
    );
};

Feature.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string
};

export default Feature;