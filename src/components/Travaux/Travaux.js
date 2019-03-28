import React from 'react';
import classes from './Travaux.module.css';
import {Header} from "../shared";
import {Helmet} from 'react-helmet';
import {A, Groupe, Snippet, Section} from '../shared';
import withScrollToTop from '../hoc/withScrollToTop';

class Travaux extends React.Component {
    travaux = [];

    /*showTravaux = () => {
        return this.travaux.length === 0 ? <p className="center">Aucun travail disponible pour l'instant.</p> : this.travaux.map((travail) => {
            return <h3 key={travail.titre}>{travail.titre}</h3>;
        });
    };*/

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{'Programmation multimédia 4 - Travaux'}</title>
                </Helmet>
                <main className={classes.Travaux}>
                    <Header siteTitle="Programmation multimédia 4" isSmall={true} title="Travaux"/>
                    <section>
                        <Section title="Prélude au devoir 1" subtitle="Film">
                            <Groupe toggleable={true} title="Contenu" hidden={true}>
                                <p>Vous devez afficher les informations d'un film à l'aide des composantes React.</p>
                                <p>Le contenu de l'objet suivant sera à intégrer:</p>
                                <Snippet code={`
    const leFilm = {
        titre: 'Interstellar',
        synopsis: "Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
        annee: 2014,
        distribution: [
            {
                prenom: 'Matthew',
                nom: 'McConaughey',
                photo: 'http://fr.web.img4.acsta.net/c_162_216/pictures/16/03/02/17/16/573123.jpg'
            },{
                prenom: 'Anne',
                nom: 'Hathaway',
                photo: 'http://fr.web.img2.acsta.net/c_162_216/pictures/14/10/30/11/11/166473.jpg'
            },{
                prenom: 'Michael',
                nom: 'Caine',
                photo: 'http://fr.web.img5.acsta.net/c_162_216/pictures/15/05/20/14/58/214953.jpg'
            }
        ]
    };
                                `}/>
                            </Groupe>
                            <Groupe title="Détails" toggleable={true}>
                                <p style={{textIndent:0}}>Vous devrez créer les composantes suivantes dans fichiers js différents:</p>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>Film</li>
                                    <li>Entete</li>
                                    <li>Personne</li>
                                </ul>
                                <p style={{marginTop:'.5em', textIndent:0}}>La composante <strong>Film</strong> devra recevoir l'ensemble des informations (passé depuis App). <br/>
                                    La composante <strong>Entete</strong> devra recevoir et afficher le titre de l'année de production du film. <br/>
                                    Les acteurs devront être affichés en réutilisant la composante <strong>Personne</strong>. <br/>
                                    <strong>Film</strong> devrait contenir <strong>Entete</strong> et les composantes <strong>Personne</strong>.
                                </p>
                                </Groupe>
                            <Groupe title="Remise" toggleable={true}>
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur Asterix avant le début du cours 2.</p>
                            </Groupe>
                        </Section>
                        <Section title="Devoir 1" subtitle="Les films">
                            <Groupe toggleable={true} title="Contenu" hidden={true}>
                                <p>Vous devez organiser l'affichage d'une liste de films à l'aide de différentes composantes fonctionnelles React.</p>
                                <p>Le contenu de l'objet suivant sera à intégrer:</p>
                                <Snippet code={`
    const lesFilms = [
        {
            titre: 'Interstellar',
            synopsis: "Le film raconte les aventures d’un groupe d’explorateurs qui utilisent une faille récemment découverte dans l’espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
            annee: 2014,
            distribution: [
                {
                    prenom: 'Matthew',
                    nom: 'McConaughey',
                    photo: 'http://fr.web.img4.acsta.net/c_162_216/pictures/16/03/02/17/16/573123.jpg'
                },{
                    prenom: 'Anne',
                    nom: 'Hathaway',
                    photo: 'http://fr.web.img2.acsta.net/c_162_216/pictures/14/10/30/11/11/166473.jpg'
                },{
                    prenom: 'Michael',
                    nom: 'Caine',
                    photo: 'http://fr.web.img5.acsta.net/c_162_216/pictures/15/05/20/14/58/214953.jpg'
                }
            ],
            realisateur: {
                    prenom: 'Christopher',
                    nom: 'Nolan',
                    photo: 'http://fr.web.img6.acsta.net/c_162_216/pictures/14/10/30/10/59/215487.jpg'
                },
            affiche: 'http://fr.web.img4.acsta.net/r_512_288/pictures/14/09/23/10/13/267178.jpg'
        },{
            titre: 'BLADE RUNNER 2049',
            synopsis: "En 2049, la société est fragilisée par les nombreuses tensions entre les humains et leurs esclaves créés par bioingénierie. L’officier K est un Blade Runner : il fait partie d’une force d’intervention d’élite chargée de trouver et d’éliminer ceux qui n’obéissent pas aux ordres des humains. Lorsqu’il découvre un secret enfoui depuis longtemps et capable de changer le monde, les plus hautes instances décident que c’est à son tour d’être traqué et éliminé. Son seul espoir est de retrouver Rick Deckard, un ancien Blade Runner qui a disparu depuis des décennies..",
            annee: 2017,
            distribution: [
                {
                    prenom: 'Ryan',
                    nom: 'Gosling',
                    photo: 'http://fr.web.img5.acsta.net/c_162_216/pictures/16/05/17/17/28/208580.jpg'
                },{
                    prenom: 'Harrison',
                    nom: 'Ford',
                    photo: 'http://fr.web.img6.acsta.net/c_162_216/pictures/15/10/13/11/06/006332.jpg'
                },{
                    prenom: 'Jared',
                    nom: 'Leto',
                    photo: 'http://fr.web.img6.acsta.net/c_162_216/pictures/16/02/29/14/37/141208.jpg'
                }
            ],
            realisateur: {
                    prenom: 'Denis',
                    nom: 'Villeneuve',
                    photo: 'http://fr.web.img4.acsta.net/c_162_216/pictures/17/08/16/14/22/169738.jpg'
                },
            affiche: 'http://fr.web.img3.acsta.net/r_512_288/pictures/17/08/24/15/18/597734.jpg'
        },{
            titre: 'Strange Days',
            synopsis: "Los Angeles 1999. Lenny Nero, flic déchu, mi-dandy, mi-gangster, s'est reconverti dans le trafic de vidéos très perfectionnées qui permettent de revivre n'importe quelle situation par procuration. Un jour, il découvre une vidéo révélant l'identité des meurtriers d'un leader noir.",
            annee: 1995,
            distribution: [
                {
                    prenom: 'Ralph',
                    nom: 'Fiennes',
                    photo: 'http://fr.web.img4.acsta.net/c_162_216/pictures/15/09/09/09/32/311995.jpg'
                },{
                    prenom: 'Angela',
                    nom: 'Basset',
                    photo: 'http://fr.web.img2.acsta.net/c_162_216/pictures/18/07/13/09/55/1161802.jpg'
                },{
                    prenom: 'Juliette',
                    nom: 'Lewis',
                    photo: 'http://fr.web.img3.acsta.net/c_162_216/pictures/15/11/12/17/06/136600.jpg'
                },{
                    prenom: 'Michael',
                    nom: 'Wincott',
                    photo: 'http://fr.web.img4.acsta.net/c_162_216/pictures/17/03/22/12/18/447873.jpg'
                }
            ],
            realisateur: {
                    prenom: 'Kathryn',
                    nom: 'Bigelow',
                    photo: 'http://fr.web.img6.acsta.net/c_162_216/pictures/17/10/19/15/45/5610812.jpg'
                },
            affiche: 'http://fr.web.img2.acsta.net/r_512_288/medias/nmedia/18/74/38/22/19255613.jpg'
        },{
            titre: 'Twelve Monkeys',
            synopsis: "Nous sommes en l'an 2035. Les quelques milliers d'habitants qui restent sur notre planète sont contraints de vivre sous terre. La surface du globe est devenue inhabitable à la suite d'un virus ayant décimé 99% de la population. Les survivants mettent tous leurs espoirs dans un voyage à travers le temps pour découvrir les causes de la catastrophe et la prévenir. C'est James Cole, hanté depuis des années par une image incompréhensible, qui est désigné pour cette mission.",
            annee: 1996,
            distribution: [
                {
                    prenom: 'Bruce',
                    nom: 'Willis',
                    photo: 'http://fr.web.img5.acsta.net/c_162_216/pictures/15/06/24/14/54/311963.jpg'
                },{
                    prenom: 'Madeleine',
                    nom: 'Stowe',
                    photo: 'http://fr.web.img5.acsta.net/c_162_216/medias/nmedia/18/35/35/69/20072132.jpg'
                },{
                    prenom: 'Christopher',
                    nom: 'Plummer',
                    photo: 'http://fr.web.img5.acsta.net/c_162_216/pictures/16/01/12/15/34/446863.jpg'
                },{
                    prenom: 'Brad',
                    nom: 'Pitt',
                    photo: 'http://fr.web.img5.acsta.net/c_162_216/pictures/19/01/03/17/21/1289778.jpg'
                }
            ],
            realisateur: {
                    prenom: 'Terry',
                    nom: 'Gilliam',
                    photo: 'http://fr.web.img6.acsta.net/c_162_216/medias/nmedia/18/35/36/83/19864837.jpg'
                },
            affiche: 'http://fr.web.img5.acsta.net/r_512_288/medias/nmedia/18/64/75/57/18866817.jpg'
        },{
            titre: 'Total Recall',
            synopsis: "2048. Doug Quaid rêve chaque nuit qu'il est sur la planète Mars à la recherche de la belle Melina. Sa femme, Lori, s'efforce de dissiper ce fantasme. Doug va bientôt s'apercevoir que son rêve était artificiel et que sa femme est une espionne chargée de veiller à son reconditionnement mental. Il se souvient d'un séjour réel sur Mars, à l'époque où il était l'agent le plus redouté du cruel Coohagen. Il décide de s'envoler sur Mars à la recherche de son énigmatique passé.",
            annee: 1990,
            distribution: [
                {
                    prenom: 'Arnold',
                    nom: 'Schwarzenegger',
                    photo: 'http://fr.web.img2.acsta.net/c_162_216/pictures/16/05/19/17/51/302269.jpg'
                },{
                    prenom: 'Rachel',
                    nom: 'Ticotin',
                    photo: 'http://fr.web.img3.acsta.net/c_162_216/medias/nmedia/18/35/45/31/18393412.jpg'
                },{
                    prenom: 'Sharon',
                    nom: 'Stone',
                    photo: 'http://fr.web.img5.acsta.net/c_162_216/pictures/15/10/21/11/07/305796.jpg'
                }
            ],
            realisateur: {
                    prenom: 'Paul',
                    nom: 'Verhoeven',
                    photo: 'http://fr.web.img4.acsta.net/c_162_216/pictures/16/05/23/11/02/224733.jpg'
                },
            affiche: 'http://fr.web.img4.acsta.net/r_512_288/pictures/14/09/29/10/13/036721.jpg'
        }
    ];
                                `}/>
                            </Groupe>
                            <Groupe title="Détails" toggleable={true}>
                                <p style={{textIndent:0}}>Vous devrez créer les composantes suivantes dans fichiers js différents:</p>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>ListeFilms</li>
                                    <li>Film</li>
                                    <li>Entete</li>
                                    <li>Distribution</li>
                                    <li>Personne</li>
                                    <li>Photo</li>
                                </ul>
                                <p style={{marginTop:'.5em'}}>Les acteurs et le réalisateur devront être affichés à l'aide de la composante <strong>Personne</strong>. <br/>
                                La composante <strong>Entete</strong> devra recevoir et afficher le titre de l'année de production du film. <br/>
                                <strong>Photo</strong> devra servir à la fois pour l'affiche et pour les personnes. Une propriété <strong>type</strong> permettra de modifier son apparence en fonction du type de photo à afficher (affiche ou personne). <br/>
                                L'intégration devra être facilitée par l'utilisation d'une librairie CSS sélectionnée depuis cette <A url="https://speckyboy.com/open-source-front-end-ui-kits/">liste de librairies CSS</A>.</p>
                            </Groupe>
                            <Groupe title="Correction" toggleable={true}>
                                <h3>Critères de correction:</h3>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>Absence d'erreur de programmation</li>
                                    <li>Respect des contraintes de développement</li>
                                    <li>Justesse de la création des composantes</li>
                                    <li>Optimisation et clarté du code Javascript</li>
                                    <li>Qualité de l'intégration</li>
                                </ul>
                            </Groupe>
                            <Groupe title="Remise" toggleable={true}>
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur Asterix avant le début du cours 3.</p>
                            </Groupe>
                        </Section>
                        {/*<Section title="Devoir 3" subtitle="Les séries télé">
                            <Groupe toggleable={true} title="Sujet" hidden={true}>
                                <p>Vous devez créer une application React permettant de faire la recherche de séries télé à l'aide de l'API de <A url="https://www.themoviedb.org/documentation/api" internal={false}>TheMovieDb</A>. Il vous faut donc premièrement vous y inscrire pour obtenir une clé d'API.</p>
                                <p>Votre application devra intégrer les routes pour afficher la recherche et ses résultats en plus d'une route pour les détails d'une série sélectionnée.</p>
                            </Groupe>
                            <Groupe title="Détails" toggleable={true}>
                                <p style={{textIndent:0}}>Vous devrez créer au minimum les composantes suivantes:</p>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>App : racine du projet</li>
                                    <li>Header: contenant le titre que vous aurez donné à votre app + la navigation</li>
                                    <li>Recherche: composante affichée par une route permettant d'effecturer une recherche</li>
                                    <li>ListeResultats: composante affichant la liste des séries télé recherchées + des séries populaires</li>
                                    <li>Serie: composante affichée affichant l'information de chacun des résultats</li>
                                    <li>SerieDetails: obtenue par une route et affichant les données de la série sélectionnée (sur une nouvelle page)</li>
                                </ul>
                                <h4 style={{marginTop:'.5em'}}>Certaines précisions:</h4>
                                <p><strong>Header:</strong> La navigation devra entraîner un changement de route sans rechargement de la page.</p>
                                <p><strong>Recherche:</strong> En plus d'afficher l'engin de recherche, la page affichera ses résultats en plus de 10 séries parmi les plus populaires actuellement.</p>
                                <p><strong>ListeResultats:</strong> ListeResultats devrait pouvoir être réutilisée à l'intérieur de Recherche pour afficher les résultats de recherche et la liste de séries propulaire.</p>
                                <p><strong>Serie:</strong> Série devra afficher l'affiche de la série, son titre et l'année de la diffusion du premier épisode. Un clic sur une série entrâinera un changement de route vers l'affichage de ses détails.</p>
                                <p><strong>SerieDetails:</strong>: SerieDetails ne peut pas être imbriquée à l'intérieur de la page de recherche. Elle doit être affichée à sa place. On doit y afficher le titre, l'affiche, l'année de la diffusion du premier épisode, un indicateur qu'elle est terminée ou non, une note sur 5 étoiles et une vidéo embed de Youtube (récupérée depuis le même API).</p>
                                <p>** L'utilisation de <A url="https://developers.themoviedb.org/3/getting-started/append-to-response" internal={false}>append_to_response</A> peut être utilise pour combiner des données.</p>
                                <p>** L'utilisation du framework css <A url="https://getmdl.io" internal={false}>Material Lite</A> est obligatoire.</p>
                            </Groupe>
                            <Groupe title="Correction" toggleable={true}>
                                <h3>Critères de correction:</h3>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>Absence d'erreur de programmation</li>
                                    <li>Respect des contraintes de développement</li>
                                    <li>Justesse de la création des composantes</li>
                                    <li>Optimisation et clarté du code Javascript</li>
                                    <li>Qualité de l'intégration</li>
                                </ul>
                            </Groupe>
                            <Groupe title="Remise" toggleable={true}>
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur Asterix avant le début du cours 5.</p>
                            </Groupe>
                        </Section>*/}
                    </section>
                </main>
            </React.Fragment>
        );
    }
}



export default withScrollToTop(Travaux);