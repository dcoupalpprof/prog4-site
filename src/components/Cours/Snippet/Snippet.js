import React from 'react';
import Prism from 'prismjs';
import '../../../styles/prism.css';
import PrismCode from 'react-prism';
import PropTypes from 'prop-types';
require('prismjs/components/prism-jsx.min');

// TODO: Ajuster pour mobile

class Snippet extends React.Component {

    componentWillMount() {
        console.log('allo');
        Prism.highlightAll();
    }

    render() {
        return (
            <pre>
                <PrismCode className={`language-${this.props.language}`}>
{this.props.code}
                </PrismCode>
            </pre>
        );
    }
};

Snippet.defaultProps = {
    language: 'javascript'
};

Snippet.propTypes = {
    language: PropTypes.oneOf(['jsx', 'javascript','css'])
};

export default Snippet;