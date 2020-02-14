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
                            <Groupe toggleable={true} title="Contenu">
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
                                <p>Le contenu du tableau suivant sera à intégrer et vous devrez permettre de supprimer des films de la liste:</p>
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
                                La composante <strong>Entete</strong> devra recevoir et afficher le titre, le synopsis et l'année de production du film. <br/>
                                <strong>Photo</strong> devra servir à la fois pour l'affiche et pour les personnes. Une propriété <strong>type</strong> permettra de modifier son apparence en fonction du type de photo à afficher (affiche ou personne). <br/>
                                L'intégration devra être facilitée par l'utilisation d'une librairie CSS sélectionnée depuis cette <A url="https://speckyboy.com/open-source-front-end-ui-kits/">liste de librairies CSS</A>.</p>

                                <p>Les proptypes des composantes <strong>Entete</strong>, <strong>Personne</strong> et <strong>Photo</strong> devront être déclarés.</p>

                                <p>La composante <strong>Film</strong> devra inclure un bouton permettant de supprimer ce film de la liste.</p>
                            </Groupe>
                            <Groupe title="Correction" toggleable={true}>
                                <h3>Critères de correction:</h3>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>Absence d'erreur de programmation</li>
                                    <li>Respect des contraintes de développement</li>
                                    <li>Justesse de la création des composantes</li>
                                    <li>Optimisation et clarté du code Javascript</li>
                                    <li>Gestion immuable de l'état des composantes</li>
                                    <li>Qualité de l'intégration</li>
                                </ul>
                            </Groupe>
                            <Groupe title="Remise" toggleable={true}>
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur Asterix avant le début du cours 3.</p>
                            </Groupe>
                        </Section>
                        <Section title="Devoir 2" subtitle="Le Club des Louise">
                            <Groupe title="Contenu">
                                <p>Vous devrez programmer la navigation du célèbre site <strong>volontairement</strong> visuellement minimaliste nommé Le Club des Louise.</p>
                                <p>Vous devrez aussi permettre à des utilisateurs d'ajouter des commentaires.</p>
                                <p>Vous trouverez le contenu du devoir sur Partage.</p>
                            </Groupe>
                            <Groupe toggleable={true} title="Détails">
                                <p>Votre site devra contenir 3 routes:</p>
                                <ul className="cours-liste">
                                    <li>Une route pour afficher  la liste de membres <strong>(vue par défaut)</strong></li>
                                    <li>Une route pour permettre d'afficher et ajouter des commentaires</li>
                                    <li>Une route avec un paramètre dynamique (user) pour afficher les détails des membres</li>
                                </ul>
                            </Groupe>
                            <Groupe toggleable={true} title="Composante Membres">
                                <p>La composante Membres devra afficher le prénom de nom de chaque membre sous un lien pointant vers la page de détails de cet utilisateur.</p>
                                <p>Le paramètre dynamique utilisé devra être le surnom (propriété user) du membre.</p>
                            </Groupe>
                            <Groupe toggleable={true} title="Composante MembreDetails">
                                <p>En accédant dynamiquement aux propriétés de l'objet membres, on y récupère et affiche les informations de l'utilisateur <strong>(sans modifier l'objet membres)</strong>.</p>
                                <p>On affiche les détails du membre dans chaque balise <strong>dd</strong>.</p>
                            </Groupe>
                            <Groupe toggleable={true} title="Composante Commentaires">
                                <p>La composante <strong>Commentaires</strong> peut/doit être modifiée pour permettre d'afficher et d'ajouter de nouveaux commentaires au tableau.</p>
                                <p>On affichera autant de balise <strong>Commentaire</strong> (singulier) que de commentaires dans le tableau et leur passant les props nécessaires.</p>
                                <p>Par les props, on permettra également à <strong>AddCommentaire</strong> de modifier le contenu du tableau commentaires (state?).</p>
                                <p><strong>AddCommentaire</strong> devra <span className="underline">prendre le contrôle</span> des champs de texte pour modifier et lire leur contenu.</p>
                            </Groupe>
                            <Groupe title="Correction" toggleable={true}>
                                <h3>Critères de correction:</h3>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>Absence d'erreur de programmation</li>
                                    <li>Respect des contraintes de développement</li>
                                    <li>Justesse de la création des composantes</li>
                                    <li>Gestion immuable de l'état des composantes</li>
                                </ul>
                            </Groupe>
                            <Groupe title="Remise" toggleable={true}>
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur Asterix avant le début du cours 4.</p>
                            </Groupe>
                        </Section>
                        <Section title="Devoir 3" subtitle="Des mots qui sonnent ou qui résonnent">
                            <Groupe toggleable={true} title="Sujet" hidden={true}>
                                <p>Vous devez créer une application React permettant de faire la recherche de chansons à l'aide de l'API de <A url="https://developers.deezer.com/login?redirect=/api" internal={false}>Deezer</A>. Il vous faut donc premièrement vous y inscrire pour avoir accès à sa documentation.</p>
                                <p>Votre application devra intégrer les routes pour afficher la recherche et ses résultats en plus d'une route pour les détails d'une chanson sélectionnée.</p>
                            </Groupe>
                            <Groupe title="Requêtes" toggleable={true}>
                                <p>Les requêtes devront être effectuées selon le protocole JSONP (à l'aide de <strong>fetch-jsonp</strong>) en vous assurant de fournir au minimum le paramètres <span className="underline">output=jsonp</span>.</p>
                            </Groupe>
                            <Groupe title="Détails" toggleable={true}>
                                <p style={{textIndent:0}}>Vous devrez créer au minimum les composantes suivantes:</p>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>App : racine du projet</li>
                                    <li>Header: contenant le titre que vous aurez donné à votre app + la navigation (ne contenant qu'un seul lien <strong>Recherche</strong> pour l'instant.</li>
                                    <li>Recherche: composante affichée par une route permettant d'effectuer une recherche</li>
                                    <li>ListeResultats: composante affichant la liste des titres de chansons correspondant au mot-clé recherché et le nombre de résultats.</li>
                                    <li>ResultatChanson: composante affichée affichant l'information de chacun des résultats</li>
                                    <li>ChansonDetails: obtenue par une route et affichant les données de la chanson sélectionnée (sur une nouvelle page)</li>
                                </ul>
                                <h4 style={{marginTop:'.5em'}}>Certaines précisions:</h4>
                                <p><strong>Header:</strong> La navigation devra entraîner un changement de route sans rechargement de la page.</p>
                                <p><strong>Recherche:</strong> En plus d'afficher l'engin de recherche, la page affichera ses résultats (contiendra donc ListeResultats). La recherche devra être effectuée par <em>track</em> dans le genre: <A url='https://api.deezer.com/search/track?q=track:"des mots qui sonnent"'>https://api.deezer.com/search/track?q=track:"des mots qui sonnent"</A></p>
                                <p><strong>ResultatChanson:</strong> ResultatChanson devra afficher le titre de la chanson et le nom de l'artiste. Un clic sur une chanson entrâinera un changement de route vers l'affichage de ses détails.</p>
                                <p><strong>ChansonDetails:</strong>: ChansonDetails ne peut pas être imbriquée à l'intérieur de la page de recherche. Elle doit être affichée à sa place. On doit y afficher le titre, sa durée, le nom de l'artiste, le titre de l'album correspondant ainsi que la photo de la pochette de l'album.</p>
                                <p>** L'utilisation du framework css <A url="https://getmdl.io/started/index.html" internal={false}>Material Lite</A> (version Hosted) est obligatoire.</p>
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
                        </Section>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}



export default withScrollToTop(Travaux);
