import React from 'react';
import {Groupe, Section, Snippet, A} from '../../shared';

const Week5 = (props) => {
    return (
        <section>
            <Section title="La navigation à l'intérieur de l'app">
                <Groupe title="Initialisation">
                    <p>Il est nécessaire d'installer premièrement le module <A url="https://reactrouter.com/web/guides/quick-start">react-router-dom</A> avec <A url="https://www.npmjs.com/package/react-router-dom">npm</A> pour permettre de gérer les routes à l'intérieur de l'app.</p>
                    <p>On en importera ensuite la composante <strong>BrowserRouter</strong> qui devra englober la composante <strong>App</strong> (pour qu'une route soit utilisable/fonctionnelle, elle doit absolument se trouver dans la hiérarchie de composantes à l'intérieur du <strong>BrowserRouter</strong>).</p>
                    <Snippet language="jsx" code={`
import {BrowserRouter} from 'react-router-dom';
...
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
                    `}/>
                </Groupe>
                <Groupe title="Déclaration et paramétrage des routes">
                    <p>À l'endroit où seront affichées les différentes vues, on déclare une composante <strong>{`<Route/>`}</strong> (importée depuis react-router-dom) pour chacun des états.</p>
                    <p>La composante Route permet d'afficher une composante conditionnellement à l'url courant. On englobera donc chaque composante-page par un Route différent.</p>
                    <h4>Propriétés de la composante {`<Route/>`}:</h4>
                    <ul style={{listStyleType:'disc', paddingLeft: '25px'}}>
                        <li>path: url absolu correspondant à la vue à afficher</li>
                        <li>exact: (aucune valeur) permet de s'assurer que le path corresponde exactement à l'url. Souvent utilisé pour l'accueil ('/') et les routes imbriquées.</li>
                        <li>render: fonction devant retourner du jsx () => {`(<div></div>)`}</li>
                        <li>component: référence de la composante à afficher (<strong>utilisé à la place de render)</strong>. Il est plus courant de déclarer la composante comme enfant de route plutôt que d'utiliser la prop <strong>component</strong>.</li>
                    </ul>
                    <p style={{marginTop:'.5em'}}>Chaque composante correspondant à l'url actif par son path sera affichée. C'est pourquoi on utilise souvent l'attribut <strong>exact</strong> lorsqu'il s'agit de la page d'accueil (path="/").</p>
                        <p>Pour s'assurer de n'afficher qu'une seule Route à la fois, il est recommandé d'englober toutes les routes à l'intérieur de la composante <strong>{`<Switch></Switch>`}</strong> (importée de react-router-dom).</p>
                    <h4>Redirection</h4>
                    <p>On redirige un url vers un autre à l'aide de la balise <strong>{`<Redirect to="/posts"/>`}</strong>. On peut donc faire terminer le switch par un <strong>Redirect</strong> pour rediriger toutes les requêtes qui ne correspondent pas à une route.</p>
                    <h4>Paramètres dynamiques</h4>
                    <p>On ajoute les paramètres dynamiques dans la propriété path: {`<Route path="/posts/:unId" .../>`}.</p>
                    <h4>Organisation des routes</h4>
                    <p>Afin de s'assurer du bon comportement d'affichage des routes, <strong>on déclarera les routes plus précises (plus longues) en premier vers les plus générales (plus courtes) à la fin</strong>.</p>
                    <h4>Erreur 404 - Route inconnue</h4>
                    <p>On peut déclarer une composante sans path pour attraper les url non déclarés dans une route.</p>
                </Groupe>
                <Groupe title="Informations sur la route active et l'historique">
                    <p>Les composantes affichées comme enfant direct d'une route recevront des propriétés supplémentaires à l'intérieur de leurs props.</p>
                    <ul className="cours-liste">
                        <li>history: Permet entre autres de naviguer par programmation.</li>
                        <li>location: Informations sur la route active (incluant les paramètres de requête)</li>
                        <li>match: Permet entre autres la <strong>récupération des paramètres dynamiques</strong></li>
                    </ul>
                    <p>Pour accéder à ses informations à l'intérieur d'autres composantes, il est nécessaire d'utiliser les différents <A internal={false} url="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/hooks.md">hooks</A> importés depuis react-router-dom.</p>
                    <h4>Hooks de React-Router-Dom</h4>
                    <ul className="cours-liste">
                        <li>useHistory</li>
                        <li>useLocation</li>
                        <li>useParams</li>
                        <li>useRouteMatch</li>
                    </ul>
                    <Snippet language="jsx" code={`
    import {useLocation} from 'react-router-dom';
    const UneComposante = props => {
        
        const location = useLocation();
        console.log(location.pathname);
        
        return (<div></div>);
    };

    export default UneComposante;
                    `}/>
                </Groupe>
                <Groupe title="Déclaration d'un hyperlien ne rafraîchissant pas la page auprès du serveur">
                    <p>On remplace les hyperliens par une composante <strong>{`<Link to="url">texte</Link>`}</strong></p>
                    <p>Les liens sont absolus par défaut. Pour faire un lien relatif, il est nécessaire de les préfixer par l'url courant.</p>
                    <Snippet language="jsx" code={`
    <Link to="/path-absolu-depuis-la-racine-du-site">Lien absolu</Link>
    <Link to={props.match.url+'/unsuffixe'}>Un semblant de lien relatif</Link>
                    `}/>
                    <p>Pour styliser le lien actif, on peut aussi remplacer la composante Link par <strong>NavLink</strong> qui donnera par défaut la classe active aux liens pointant vers l'url actif. Sa propriété <strong>activeClassName</strong> permet d'assigner un nom de classe différent.</p>
                </Groupe>
                <Groupe title="Navigation par programmation">
                    <p>Si la navigation ne peut être faite au clic d'un Link, on utilise <strong>history</strong> passée dans les props pour naviguer par programmation. Quelques méthodes utiles:</p>
                    <ul className="cours-liste">
                        <li>history.<strong>goBack()</strong></li>
                        <li>history.<strong>goForward()</strong></li>
                        <li>history.<strong>push('/posts/3')</strong> : ajoute à l'historique et y garde donc la page précédente également</li>
                        <li>history.<strong>replace('/posts/3')</strong>: remplace l'entrée de la page active par la nouvelle dans l'historique (appuyer sur précédent ne permettra pas d'y retourner)</li>
                    </ul>
                </Groupe>
                <Groupe title="Imbrication de routes">
                    <p>On peut utiliser des Routes à l'intérieur d'une composante déjà affichée par une Route. Le path de la
                        route à afficher devra être absolu en contenant donc le path depuis la racine du site ou
                        utilser <strong>props.match.url</strong> comme préfixe.</p>
                </Groupe>
            </Section>
        </section>
    );
};

export default Week5;
