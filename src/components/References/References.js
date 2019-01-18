import React from 'react';
import classes from './References.module.css';
import {Header} from '../shared';
import {Helmet} from 'react-helmet';

class References extends React.Component {
    references = [];

    showReferences = () => {
        return this.references.length === 0 ? <p className="center">Aucune référence disponible pour l'instant.</p> : this.references.map((travail) => {
            return <h3 key={travail.titre}>{travail.titre}</h3>;
        });
    };

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{'Programmation multimédia 4 - Références'}</title>
                </Helmet>
                <main className={classes.Travaux}>
                    <Header siteTitle="Programmation multimédia 4" isSmall={true} title="Références"/>
                    <section>
                        {this.showReferences()}
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default References;