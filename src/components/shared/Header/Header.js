import React from 'react';
import classes from './Header.module.scss';
import {TitleBar, Heros} from "./index";
import PropTypes from 'prop-types';

const Header = (props) => {

    const headerClasses = [classes.Header];
    if( props.isSmall ){
        headerClasses.push(classes["Header-small"]);
    }

    return (
        <header className={headerClasses.join(' ')}>
            <TitleBar title={props.siteTitle}/>
            <Heros title={props.title}/>
        </header>
    );
};

Header.defaultProps = {
    isSmall: true,
    title: '',
    siteTitle: ''
};

Header.propTypes = {
    isSmall: PropTypes.bool,
    title: PropTypes.string,
    siteTitle: PropTypes.string,
};

export default Header;