import React from 'react';
import Prism from 'prismjs';
import '../../../styles/prism.css';
import PrismCode from 'react-prism';
import PropTypes from 'prop-types';
require('prismjs/components/prism-jsx.min');

// TODO: Ajuster pour mobile

const Snippet = ({code, language = 'javascript', empty = false}) => {

    return (
        <pre>
            <PrismCode className={`language-${language}`}>
{code}
            </PrismCode>
        </pre>
    );
};

Snippet.defaultProps = {
    language: 'javascript'
};

Snippet.propTypes = {
    language: PropTypes.oneOf(['jsx', 'javascript','css']),
    code: PropTypes.string
};

export default Snippet;
