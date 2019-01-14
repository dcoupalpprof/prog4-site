import React from 'react';
import Prism from 'prismjs';
import '../../../styles/prism.css';
import PropTypes from 'prop-types';
require('prismjs/components/prism-jsx.min');

// TODO: Ajuster pour mobile
// TODO: Ajuste couleur de BG

const Snippet = (props) => {
    return (
        <pre>
            <code className={`language-${props.language}`}>
                {props.code}
            </code>
        </pre>
    );
};

Snippet.defaultProps = {
    language: 'javascript'
};

Snippet.propTypes = {
    language: PropTypes.oneOf(['jsx', 'javascript','css'])
};

export default Snippet;