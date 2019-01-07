import React from 'react';
import classes from './Travaux.module.css';
import {Header} from "../shared";

class Travaux extends React.Component {
    render() {
        return (
            <section className={classes.Travaux}>
                <Header siteTitle="Programmation multimédia 4" isSmall={true} title="Travaux"/>
            </section>
        );
    }
}

export default Travaux;