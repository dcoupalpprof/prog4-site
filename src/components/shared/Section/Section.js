import React from 'react';
import {Card} from '../';
import propTypes from 'prop-types';

const Section = (props) => (
    <Card title={props.title} subTitle={props.subtitle}>
        <article>{props.children}</article>
    </Card>
);

Section.propTypes = {
    title: propTypes.string,
    subtitle: propTypes.string
};

export default Section;