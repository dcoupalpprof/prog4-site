import React from 'react';
import classes from './Feature.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Feature = ({link, icon, name}) => {

    const featureIconClasses = ['pi', icon, classes.FeatureIcon];

    return (
        <li className={classes.Feature}>
            <Link className={classes.FeatureLink} to={link}>
                {name}
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
