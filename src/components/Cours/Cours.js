import React from 'react';
import classes from './Cours.module.css';
import {Header} from '../shared';

class Cours extends React.Component{

    render() {
        return (
            <section className={classes.Cours}>
                <Header isSmall={true} siteTitle="Programmation multimédia 4" title="Notes de cours"/>
            </section>
        );
    }
}

export default Cours;