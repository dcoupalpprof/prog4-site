import React from 'react';
import classes from './Travaux.module.css';
import {Header} from "../shared";
import {Helmet} from 'react-helmet';

class Travaux extends React.Component {
    travaux = [];

    showTravaux = () => {
        return this.travaux.length === 0 ? <p className="center">Aucun travail disponible pour l'instant.</p> : this.travaux.map((travail) => {
            return <h3 key={travail.titre}>{travail.titre}</h3>;
        });
    };

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{'Programmation multimédia 4 - Travaux'}</title>
                </Helmet>
                <main className={classes.Travaux}>
                    <Header siteTitle="Programmation multimédia 4" isSmall={true} title="Travaux"/>
                    <section>
                        {this.showTravaux()}
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Travaux;