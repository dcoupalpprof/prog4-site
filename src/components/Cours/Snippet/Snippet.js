import React from 'react';
import Prism from 'prismjs';
import '../../../styles/prism.css';
import {Panel} from '../../shared';
import PropTypes from 'prop-types';
require('prismjs/components/prism-jsx.min');

const Snippet = (props) => {

    return (
        <Panel header="Class based component" toggleable={props.toggleable} collapsed={props.hidden}>
            <pre>
                <code className={`language-${props.language}`}>
                    {props.code}
                </code>
            </pre>
        </Panel>
    );
};

Snippet.defaultProps = {
    title: 'Un extrait de code',
    language: 'javascript',
    toggleable: false,
    hidden: false
};

Snippet.propTypes = {
    title: PropTypes.string,
    language: PropTypes.oneOf(['jsx', 'javascript','css']),
    toggleable: PropTypes.bool,
    hidden: PropTypes.bool
};

export default Snippet;