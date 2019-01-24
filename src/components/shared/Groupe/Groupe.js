import React from 'react';
import PropTypes from "prop-types";
import Snippet from '../Snippet/Snippet';
import classes from './Groupe.module.css';
import {Panel} from '../';

const checkSnippet = (props) => {
    return props.language && props.code ? (
        <Snippet language={props.language} code={props.code}/>
    ) : props.children;
};

const Groupe = (props) => (
    <div className={classes.Groupe}>
        <Panel header={props.title} toggleable={props.toggleable} collapsed={props.hidden}>
            {checkSnippet(props)}
        </Panel>
    </div>
);


Groupe.defaultProps = {
    title: '',
    toggleable: false,
    hidden: false,
    language:null,
    code: null
};

Groupe.propTypes = {
    title: PropTypes.string,
    toggleable: PropTypes.bool,
    hidden: PropTypes.bool,
    language: PropTypes.oneOf(['jsx', 'javascript','css']),
    code: PropTypes.string
};

export default Groupe;