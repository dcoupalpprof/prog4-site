import React from 'react';
import classes from './References.module.css';
import {Header} from '../shared';

class References extends React.Component {
    references = [];

    showReferences = () => {
        return this.references.length === 0 ? <p className="center">Aucune référence disponible pour l'instant.</p> : this.references.map((travail) => {
            return <h3 key={travail.titre}>{travail.titre}</h3>;
        });
    };

    render() {
        return (
            <main className={classes.Travaux}>
                <Header siteTitle="Programmation multimédia 4" isSmall={true} title="Références"/>
                <section>
                    {this.showReferences()}
                </section>
            </main>
        );
    }
}

export default References;