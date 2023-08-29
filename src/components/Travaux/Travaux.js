import React from 'react';
import classes from './Travaux.module.css';
import {Header} from "../shared";
import {Helmet} from 'react-helmet';
import {A, Groupe, Snippet, Section} from '../shared';
import {useScrollToTop} from "../../hooks";
import {useFBCoursProvider} from "../../contexts";
import {config} from '../../config';
// import withScrollToTop from '../hoc/withScrollToTop';

const Travaux = () => {

    useScrollToTop();

    const {travaux, loading} = useFBCoursProvider();

    if (!loading && travaux) {
        // console.log(Object.values(travaux));
    }

        return (
            <React.Fragment>
                <Helmet>
                    <title>{`${config.siteTitle} - Travaux`}</title>
                </Helmet>
                <main className={classes.Travaux}>
                    <Header siteTitle={config.siteTitle} isSmall={true} title="Travaux"/>
                    <section>
                        {!loading && travaux && Object.values(travaux).indexOf(true) === -1 && (<p className="center" style={{paddingTop: '1em'}}>Aucun travail n'est disponible pour l'instant.</p>)}

                        {!loading && travaux !== null && travaux.devoir3 && (<Section title="Devoir Context et Auth">
                                <Groupe title="Sujet">
                                    <p>À partir du projet fourni sur Teams, vous devez obliger un utilisateur à s'authentifier afin de pouvoir publier et afficher des commentaires dans une application.</p>
                                </Groupe>
                                <Groupe title="Détails - Authentification">
                                    <p>Vous devez détecter le statut d'authentification d'un utilisateur et le rediriger vers les routes qui lui sont accessibles.</p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Un utilisateur non authentifié sera dirigé vers /login automatiquement. Il pourra se rendre sur la page /register en cliquant dans la barre de navigation. La route /posts ne lui sera pas accessible.</li>
                                        <li>Un utilisateur authentifié sera dirigé vers /posts automatiquement. Il ne pourra pas se rendre vers aucune autre route.</li>
                                        <li>Après s'être authentifié une première fois, un utilisateur sera authentifié automatiquement à son retour sur l'application.</li>
                                        <li>La barre de navigation ne devra contenir que les liens reliés à son statut d'authentification.</li>
                                        <li>Le bouton déconnexion ne sera affiché que si l'utilisateur est authentifié et devra être fonctionnel.</li>
                                    </ul>
                                    <p className="underline" style={{marginTop: '.7em'}}>La gestion de l'authentification de l'utilisateur (détails de l'utilisateur connecté, fonctions pour s'inscrire, se connecter et se déconnecter) devront être propagés à travers l'application à l'aide d'un contexte.</p>
                                </Groupe>
                                <Groupe title="Détails - Publications">
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Les utilisateurs connectés pourront afficher les publications de Firestore en temps réel (vous devez vous même créer la collection nécessaire).</li>
                                        <li>Le formulaire de publication devra permettre d'ajouter une nouvelle publication à Firestore. Le courriel de l'utilisateur connecté sera utilisé pour le champ Auteur.</li>
                                    </ul>
                                </Groupe>
                                <Groupe title="Correction">
                                    <h3>Critères de correction:</h3>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Absence d'erreur de programmation</li>
                                        <li>Respect des contraintes de développement</li>
                                    </ul>
                                </Groupe>
                            </Section>)}

                        {!loading && travaux !== null && travaux.devoir2 && (<Section title="Devoir Firebase" subtitle="Séries télé populaires">
                                <Groupe title="Sujet">
                                    <p>Vous devez développer une application affichant les séries les plus populaires du moment incluant une page d'accueil et une page d'information propre à chaque série.</p>
                                </Groupe>
                                <Groupe title="Détails">
                                    <p>Vous devez créer un projet Firebase et activer son service Firestore. Un fichier JSON vous est fourni sur Teams pour y ajouter du contenu (plus de détails plus bas).</p>
                                    <p>Vous devrez, à l'aide du <strong>react-router-dom</strong>, afficher les séries populaires à l'aide du contenu de Firestore en y incluant leur titre et leur affiche. Un clic sur l'une de ces séries entraînera la navigation vers une route du style "/series/<em>id-de-la-serie</em>" qui permettra d'afficher le reste des informations de la série sélectionnée. Il vous est interdit de modifier la structure de la base de données.</p>
                                    <p>Toutes les photos devront être affichées correctement et une <strong>note sur 5 étoiles</strong> devra être affichée (vous avez droit d'utiliser un module npm au besoin).</p>
                                    <p>Le framework css <A url="https://getmdl.io/started/index.html" internal={false}>Material Lite</A> doit obligatoirement être utilisé pour en faire l'intégration. Vous pouvez directement utiliser les fichiers css et js <em>hosted</em> dans le fichier index.html. Le reste de l'intégration pourra être complété avec la méthode de votre choix.</p>
                                </Groupe>
                                <Groupe title="Importation du contenu dans Firestore">
                                    <p>Dans Firebase, cliquer sur l'engrenage à droite de "Vue d'ensemble du projet" puis "Paramètres du projet". Cliquer ensuite sur "Comptes de service", sur le bouton "Générer une nouvelle clé privée" et sauvegarder le fichier sous le nom <strong>credentials.json</strong> dans le même dossier que le fichier <strong>series.json</strong>. Attention, ce fichier permet les droits admin à votre projet Firebase. Ne pas le distribuer.</p>
                                    <p>Veuillez vous rendre dans ce dossier à l'aide de votre ligne de commande et exécutez ensuite la commande suivante: <br/>
                                    <strong>npx -p node-firestore-import-export firestore-import -a credentials.json -b series.json</strong></p>
                                    <p>Les données devraient maintenant être ajoutées à Firestore.</p>
                                </Groupe>

                                <Groupe title="Correction">
                                    <h3>Critères de correction:</h3>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Absence d'erreur de programmation</li>
                                        <li>Respect des contraintes de développement</li>
                                        <li>Qualité de l'intégration</li>
                                    </ul>
                                </Groupe>
                            </Section>)}

                        {!loading && travaux !== null && travaux.devoirC3 && (
                            <Section title="Devoir en continu - Partie 3" subtitle="Pizza de route">
                                <Groupe title="Sujet">
                                    <p>Vous devez convertir votre application d'une page en une application multi-pages. Vous devrez également ajouter certaines fonctionnalités.</p>
                                </Groupe>

                                <Groupe title="Détails">
                                    <h3 style={{marginTop: '1em'}}>Authentification de l'utilisateur</h3>
                                    <p>L'utilisateur se verra demandé son nom à son arrivée sur le site (son nom seulement):</p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Route "/login" offrant la page d'authentification.</li>
                                        <li>Un seul champ "Nom d'usager" (champ requis contenant au moins un caractère)</li>
                                        <li>La soumission du nom de l'utilisateur (contenant au moins un caractère) lui permettra d'accéder à l'application en le redirigeant vers la page de la liste de pizzas</li>
                                        <li>Empêcher l'usager d'accéder à la page "/login" une fois "connecté"</li>
                                        <li>Si vous redémarrez l'application, l'usager devra se reconnecter (<em>Pour vous faciliter la vie lorsque vous développez, rien ne vous empêche de "trafiquer" votre nom d'usager initial pour court-circuiter votre condition (au lieu de useState(''),
                                            pourquoi pas useState('test')). Attention à replacer le tout avant la remise (vos tests devraient passer, sinon vous avez oublié de corriger ce tour de passe-passe)</em>)</li>
                                    </ul>

                                    <p>La section <strong>Déclaration conditionnelle des routes</strong> dans les <A url="/cours/5" internal={true}>Notes
                                        de cours</A> pourrait vous être utile.</p>

                                    <h3 style={{marginTop: '1em'}}>Page de la liste de pizzas</h3>
                                    <p>Une page offrant l'ensemble des pizzas disponibles.</p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Route "/pizza" offrant la liste des pizzas disponibles dans votre application</li>
                                        <li>Rediriger toutes les pages invalides (404) vers cette page</li>
                                        <li>Vous devriez réutiliser la composante de liste que vous avez créée au cours du dernier devoir (nécessitant probablement quelques changements)</li>
                                        <li>Chaque pizza devra présenter les données suivantes dans une boîte (carte, tuile ou autre, bien formattée en CSS):
                                            <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                                <li>Nom</li>
                                                <li>Image (vous pourriez réutiliser la composante d'image à plusieurs endroits dans votre application... utilisez bien vos props!)</li>
                                            </ul>
                                        </li>
                                        <li>Chaque pizza devra être cliquable (&lt;Link&#47;&gt;), permettant d'afficher le détail de la pizza</li>
                                    </ul>

                                    <h3 style={{marginTop: '1em'}}>Détails d'une pizza</h3>
                                    <p>Permet d'afficher les détails d'une pizza sélectionnée.</p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Route "/pizza/:pizza" offrant le détail d'une pizza</li>
                                        <li>Le paramètre ":pizza" peut être l'une de ces valeurs (à vous de choisir et
                                            d'implémenter la bonne, selon votre implémentation actuelle de la liste (en
                                            choisir UNE)):
                                            <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                                <li>L'index dans le tableau (à prioriser)</li>
                                                <li>Le nom (s'il est unique, donc si vous avez implémenté cette mécanique)</li>
                                                <li>Le ID (s'il existe)</li>
                                                <li>Le "slug" (s'il est unique, et s'il existe, donc si vous avez implémenté
                                                    cette mécanique)</li>
                                            </ul>
                                        </li>
                                        <li>La page devra se trouver à l'intérieur de votre page de liste (page
                                            enfant)</li>
                                        <li>Afficher les éléments suivants:
                                            <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                                <li>Nom</li>
                                                <li>Image (en plus gros plan)</li>
                                                <li>Liste (ul>li) des ingrédients</li>
                                            </ul>
                                        </li>
                                        <li>Le visuel de cette page doit bien s'harmoniser avec la page de liste</li>
                                        <li>Vous pouvez en faire une colonne CSS dédiée, un "modal", etc. Pensez à
                                            l'usager! (le layout de votre page ne devrait pas interrompre la navigation de
                                            l'usager)</li>
                                    </ul>

                                    <h3 style={{marginTop: '1em'}}>Nouvelle pizza</h3>
                                    <p>Page permettant de créer une nouvelle pizza </p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Route "/pizza/creer" offrant le formulaire de création d'une pizza</li>
                                        <li>Devrait être le même formulaire que vous avez déjà créé (avec très peu/pas
                                            de changement)</li>
                                        <li>Une fois la pizza créée, rediriger l'usager vers la page de détail de cette
                                            pizza
                                            <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                                <li>Voir le hook "useNavigate" de "react-router"</li>
                                                <li>Vous devez trouver une façon de retrouver le paramètre ":pizza"
                                                    depuis
                                                    votre
                                                    formulaire. Votre fonction de sauvegarde pourrait vous retourner cet
                                                    identifiant, ou l'objet complet, pour vous permettre de bien rediriger
                                                    l'usager.</li>
                                            </ul>
                                        </li>

                                    </ul>
                                    <h3 style={{marginTop: '1em'}}>Conseils:</h3>
                                    <p>Assurez-vous que votre &lt;App&#47;&gt; est le "chef d'orchestre" des données globales, comme la liste de pizzas, le nom d'usager, etc. Pour qu'une composante utilise une donnée "globale", utilisez les props pour passer l'information plus bas dans l'arborescence.</p>
                                    <p>Continuez à bonifier votre intégration et à la retravailler au besoin.</p>
                                </Groupe>

                                {/*<Groupe title="Tests">*/}
                                {/*    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>*/}
                                {/*        <li>Quelle page est affichée dès le départ?</li>*/}
                                {/*        <li>Le bouton d'authentification est-il désactivé si rien n'est entré dans le input du login?</li>*/}
                                {/*        <li>Quelle page est affichée une fois connecté?</li>*/}
                                {/*        <li></li>*/}
                                {/*    </ul>*/}
                                {/*</Groupe>*/}

                                <Groupe title="Remise & correction">
                                    <p>Le projet devra être poussé sur Github et <strong>le commit devra porter le tag "Étape
                                        3"</strong></p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Respect des contraintes de développement</li>
                                        <li>Rédaction judicieuse et efficace des tests unitaires</li>
                                        <li>Qualité de l'intégration</li>
                                    </ul>
                                </Groupe>

                            </Section>
                        )}

                        {!loading && travaux !== null && travaux.devoirC2 &&  (
                            <Section title="Devoir en continu - Partie 2" subtitle="Pizzas à la chaîne">
                                <Groupe title="Sujet">
                                    <p>Vous devez poursuivre votre application en permettant d'enregistrer (en mémoire jusqu'au rechargement de la page) et d'afficher les pizzas créées par l'utilisateur.</p>
                                </Groupe>

                                <Groupe title="Détails">
                                    <p>La nouvelle version de votre application devra répondre aux besoins suivants:</p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>3 pizzas devront déjà être affichées au démarrage de l'application (depuis un
                                        tableau d'objets local).</li>
                                        <li>Afficher les détails de chacune de ces pizzas dans une tuile/carte UI contenant le nom, les ingrédients et son visuel. La tuile devra obligatoirement être une composante nourrie par des props.</li>
                                        <li>Le formulaire de création de pizza de la version 1 devra être intégré à l'interface depuis une composante enfant. Vous devez réécrire la série de states d'ingrédients en un tableau.</li>
                                        <li>Le bouton Enregistrer du formulaire devra permettre d'ajouter la pizza à la liste affichée et de réinitialiser l'état du formulaire par la suite.</li>
                                        <li>Rédiger les tests suivants:
                                            <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                                <li>Le nombre de pizzas affichées au départ correspond-t-il au nombre de pizzas dans le tableau? (méthodes de requêtes getAll..., <A internal={false} url="https://jestjs.io/fr/docs/expect#tobevalue">validateur
                                                    toBe</A>)</li>
                                                <li>Est-ce que le bouton d'enregistrement est cliquable dès le départ (<A internal={false} url="https://github.com/testing-library/jest-dom#tobedisabled">validateur
                                                    toBeDisabled</A>)? Après avoir inscrit un nom (<A internal={false} url="https://testing-library.com/docs/ecosystem-user-event/#typeelement-text-options">userEvent.type</A>)? Après avoir sélectionné au moins un ingrédient?</li>
                                                <li>Est-ce que la pizza s'ajoute à la liste une fois le formulaire soumis (méthodes de requêtes getAll..., <A internal={false} url="https://jestjs.io/fr/docs/expect#tobevalue">validateur
                                                    toBe</A>)?</li>
                                                <li>Est-ce que le formulaire a bien été réinitialisé (<A internal={false} url="https://github.com/testing-library/jest-dom#tohavevalue">validateur
                                                    toHaveValue</A>)?</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p>L'exercice de la liste de tâches est un bon modèle à suivre pour cette étape du développement.</p>
                                    <p>Continuez à bonifier votre intégration et à la retravailler au besoin.</p>
                                </Groupe>

                                <Groupe title="Remise & correction">
                                    <p>Le projet devra être poussé sur Github et <strong>le commit devra porter le tag "Étape
                                        2"</strong></p>
                                    <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                        <li>Respect des contraintes de développement</li>
                                        {/*<li>Rédaction judicieuse et efficace des tests unitaires</li>*/}
                                        <li>Qualité de l'intégration</li>
                                    </ul>
                                </Groupe>

                            </Section>
                        )}

                        {!loading && travaux !== null && travaux.devoirC1 && (<Section title="Devoir en continu - Partie 1" subtitle="Sélection des ingrédients">
                            <Groupe title="Sujet">
                                <p>Vous devez élaborer les bases d'un créateur de pizzas personnalisées en ligne. Cette étape permettra de réviser l'utilisation de <em>states</em> multiples, de sa synchronisation avec un formulaire et l'affichage conditionnel de balises dans le JSX.</p>
                            </Groupe>

                            <Groupe title="Détails">
                                <p>L'utilisateur devra pouvoir sélectionner les ingrédients à ajouter à la pizza et obtenir un aperçu du résultat en temps réel ainsi que de pouvoir donner un nom à sa création.</p>
                                <h3>Fonctionalités:</h3>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>Utiliser une liste de cases à cocher pour sélectionner/déselectionner les ingrédients (au moins 10). Chaque ingrédient devra être relié à un state bien à lui;</li>
                                    <li>Un champ de texte synchronisé à un state devra permettre de nommer la pizza;</li>
                                    <li>Un bouton <strong>Enregistrer</strong> permettra de générer une description de la pizza dans la console. Ce bouton sera désactivé tant que la pizza ne sera pas nommée ET qu'au moins un ingrédient ne sera pas choisi; (voir <em>disabled</em>)</li>
                                    <li>Un bouton <strong>Annuler</strong> permettra de réinitialiser la pizza en vidant tous les states incluant le champ de texte;</li>
                                    <li>Un aperçu de la pizza devra être généré en temps réel en positionnant les ingrédients au-dessus de la "pâte" et en les affichant conditionnellement à l'état du state auquel ils sont liés (fort probablement en positionnement absolu);</li>
                                </ul>
                            </Groupe>

                            <Groupe title="Intégration">
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                <li>Comme ceci n'a pas été couvert, évitez d'utiliser une balise form pour l'instant.</li>
                                <li>Pour l'instant, seul le css de l'aperçu de la pizza et ses ingrédients est demandé. Le positionnement à l'aide de pourcentages (pour top/right/bottom/left) est fortement encouragé. Assurez-vous que les ingrédients utilisent bien la pizza comme repère de positionnement en redimensionnant votre navigateur pour vous en assurer.</li>
                                <li>Vous devez fournir vous-même le visuel en le produisant par vous même ou en fournissant du matériel libre de droits pour lequel vous devrez fournir la/les sources. Mettez vos images dans le dossier <strong>public</strong> et utilisez des balises img. Une image dans /public/img pourra être liées avec le src suivant: src="/img/image1.png".</li>
                                <li>Il est possible d'utiliser une librairie css (https://speckyboy.com/open-source-front-end-ui-kits/) pour améliorer rapidement le visuel du formulaire, mais ceci n'est pas requis pour l'instant.</li>
                                </ul>
                            </Groupe>

                            <Groupe title="Remise & correction" toggleable={true}>
                               <p>Le projet devra être poussé sur Github</p>
                                <h3>Critères de correction:</h3>
                               <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                   <li>Respect des contraintes de développement</li>
                                   <li>Qualité de l'intégration</li>
                               </ul>
                            </Groupe>
                        </Section>)}

                        {!loading && travaux !== null && travaux.devoirDeezer && (<Section title="Devoir 3" subtitle="Des mots qui sonnent ou qui résonnent">
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
                        </Section>)}

                        {!loading && travaux !== null && travaux.devoirTele && (<Section title="Devoir 3" subtitle="Les séries télé">
                            <Groupe toggleable={true} title="Sujet" hidden={true}>
                                <p>Vous devez créer une application React permettant de faire la recherche de séries télé à l'aide de l'API de <A url="https://www.themoviedb.org/documentation/api" internal={false}>TheMovieDb</A>. Il vous faut donc premièrement vous y inscrire pour obtenir une clé d'API.</p>
                                <p>Votre application devra intégrer les routes pour afficher la recherche et ses résultats en plus d'une route pour les détails d'une série sélectionnée.</p>
                            </Groupe>
                            <Groupe title="Détails" toggleable={true}>
                                <p style={{textIndent:0}}>Vous devrez créer au minimum les composantes suivantes:</p>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>App : racine du projet</li>
                                    <li>Header: contenant le titre que vous aurez donné à votre app + la navigation</li>
                                    <li>Recherche: composante affichée par une route permettant d'effectuer une recherche</li>
                                    <li>ListeResultats: composante affichant la liste des séries télé recherchées + des séries populaires</li>
                                    <li>Serie: composante affichée affichant l'information de chacun des résultats (une Serie par résultat)</li>
                                    <li>SerieDetails: obtenue par une route et affichant les données de la série sélectionnée (sur une nouvelle page)</li>
                                </ul>
                                <h4 style={{marginTop:'.5em'}}>Certaines précisions:</h4>
                                <p><strong>Header:</strong> La navigation devra entraîner un changement de route sans rechargement de la page.</p>
                                <p><strong>Recherche:</strong> En plus d'afficher l'engin de recherche, la page affichera ses résultats en plus de 10 séries parmi les plus populaires actuellement.</p>
                                <p><strong>ListeResultats:</strong> ListeResultats devrait pouvoir être réutilisée à l'intérieur de Recherche pour afficher les résultats de recherche et la liste de séries propulaire.</p>
                                <p><strong>Serie:</strong> Série devra afficher l'affiche de la série, son titre et l'année de la diffusion du premier épisode. Un clic sur une série entrâinera un changement de route vers l'affichage de ses détails.</p>
                                <p><strong>SerieDetails:</strong>: SerieDetails ne peut pas être imbriquée à l'intérieur de la page de recherche. Elle doit être affichée à sa place. On doit y afficher le titre, l'affiche, l'année de la diffusion du premier épisode, un indicateur qu'elle est terminée ou non, une note sur 5 étoiles et une vidéo embed de Youtube (récupérée depuis le même API).</p>
                                <p>** <A url="https://developers.themoviedb.org/3/getting-started/append-to-response" internal={false}>append_to_response</A> peut être utilisé pour combiner des données.</p>
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
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur le site de remise.</p>
                            </Groupe>
                        </Section>)}

                        {!loading && travaux !== null && travaux.devoirLouise && (<Section title="Devoir 2" subtitle="Le Club des Louise">
                            <Groupe title="Contenu" toggleable={true}>
                                <p>Vous devrez programmer la navigation du célèbre site <strong>volontairement</strong> visuellement minimaliste nommé Le Club des Louise.</p>
                                <p>Vous devrez aussi permettre à des utilisateurs d'ajouter des commentaires.</p>

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
                                <p>La composante Membres devra afficher le prénom et le nom de chaque membre sous un lien pointant vers la page de détails de cet utilisateur.</p>
                                <p>Le paramètre dynamique utilisé devra être le surnom <strong>(propriété user)</strong> du membre.</p>
                            </Groupe>
                            <Groupe toggleable={true} title="Composante MembreDetails">
                                <p>En accédant dynamiquement aux propriétés de l'objet membres, on y récupère et affiche les informations de l'utilisateur <strong>(sans modifier l'objet membres)</strong>.</p>
                                <p>On affiche les détails du membre dans chaque balise <strong>dd</strong>.</p>
                            </Groupe>
                            <Groupe toggleable={true} title="Composante Commentaires">
                                <p>La composante <strong>Commentaires</strong> peut/doit être modifiée pour permettre d'afficher et d'ajouter de nouveaux commentaires au tableau.</p>
                                <p>On affichera autant de balise <strong>Commentaire</strong> (singulier) que de commentaires dans le tableau en leur passant les props nécessaires.</p>
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
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à le site de remise avant le début du cours 4.</p>
                            </Groupe>
                        </Section>)}

                        {!loading && travaux !== null && travaux.devoirFilms && (<Section title="Devoir" subtitle="Les films">
                            <Groupe toggleable={true} title="Contenu" hidden={true}>
                                <p>Vous devez organiser l'affichage d'une liste de films à l'aide de différentes composantes fonctionnelles React.</p>
                                {/*<p>Le contenu du tableau suivant sera à intégrer <strong>et vous devrez permettre de*/}
                                {/*    supprimer des films de la liste à l'aide d'un bouton.</strong>:</p>*/}
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
                    photo: 'https://fr.web.img6.acsta.net/c_162_216/pictures/20/02/10/10/37/1374948.jpg'
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
                                <p style={{marginTop:'.5em'}}>Les acteurs et le réalisateur devront être affichés à l'aide de la composante <strong>Personne</strong>.</p>
                                    <p>La composante <strong>Entete</strong> devra recevoir et afficher le titre, le synopsis et l'année de production du film. </p>
                                    <p><strong>Photo</strong> devra servir à la fois pour l'affiche et pour les personnes. Une propriété <strong>type</strong> permettra de modifier son apparence en fonction du type de photo à afficher (affiche ou personne).*/} </p>
							    {/*<p>L'intégration devra être facilitée par l'utilisation d'une librairie CSS sélectionnée depuis cette <A url="https://speckyboy.com/open-source-front-end-ui-kits/">liste de librairies CSS</A>. (trouver le lien cdn pour simplement lier le fichier css à index.html)</p>*/}
                                <p>La mise en forme des <strong>Films</strong> devra différer pour les films réalisés avant l'an 2000.</p>

                            </Groupe>
                            <Groupe title="Correction" toggleable={true}>
                                <h3>Critères de correction:</h3>
                                <ul style={{listStyleType: 'disc', paddingLeft: '1.4em'}}>
                                    <li>Absence d'erreur de programmation</li>
                                    <li>Respect des contraintes de développement</li>
                                    <li>Justesse de la création des composantes</li>
                                    <li>Optimisation et clarté du code Javascript</li>
                                    {/*<li>Gestion immuable de l'état des composantes</li>*/}
                                    <li>Qualité de l'intégration</li>
                                </ul>
                            </Groupe>
                            <Groupe title="Remise" toggleable={true}>
                                <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur <strong>Teams</strong> avant le début du cours 3.</p>
                            </Groupe>
                        </Section>)}

                        {!loading && travaux !== null && travaux.devoirFilmPrelude && (<Section title="Prélude au devoir 1" subtitle="Film">
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
                            {/*<Groupe title="Remise" toggleable={true}>*/}
                            {/*    <p style={{textIndent:0}}>Le dossier du projet <strong>(sans le sous-dossier <em>node_modules</em>)</strong> est à remettre sur Asterix avant le début du cours 2.</p>*/}
                            {/*</Groupe>*/}
					</Section>)}
                    </section>
                </main>
            </React.Fragment>
        );
    };



export default Travaux;
