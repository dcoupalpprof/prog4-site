import React from 'react';
import classes from './References.module.css';
import {Header} from '../shared';

class References extends React.Component {

    render() {
        return (
            <section className={classes.References}>
                <Header siteTitle="Programmation multimédia 4" isSmall={true} title="Références"/>
            </section>
        );
    }
}

export default References;