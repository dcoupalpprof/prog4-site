import React from 'react';
import classes from './Feature.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Feature = (props) => {

    const featureIconClasses = ['pi', props.icon, classes.FeatureIcon];

    return (
        <li className={classes.Feature}>
            <Link className={classes.FeatureLink} to={props.link}>
                {props.name}
                <i className={featureIconClasses.join(' ')}></i>
            </Link>
        </li>
    );
};

Feature.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string
};

export default Feature;