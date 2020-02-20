import React from 'react';
import {Groupe, Section, Snippet, A} from '../../shared';

const Week3 = (props) => {
    return (
        <section>
            <Section title="La navigation à l'intérieur de l'app">
                <Groupe title="Initialisation">
                    <p>Il est nécessaire d'installer premièrement le module <strong>react-router-dom</strong> pour permettre de gérer les routes à l'intérieur de l'app.</p>
                    <p>On en importera ensuite la composante <strong>BrowserRouter</strong> qui devra englober la composante <strong>App</strong>.</p>
                    <Snippet language="jsx" code={`
import {BrowserRouter} from 'react-router-dom';
...
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
                    `}/>
                </Groupe>
                <Groupe title="Déclaration et paramétrage des routes">
                    <p>À l'endroit où seront affichées les différentes vues, on déclare une composante <strong>{`<Route/>`}</strong> (importée depuis react-router-dom) pour chacun des états.</p>
                    <h4>Propriétés de la composante {`<Route/>`}:</h4>
                    <ul style={{listStyleType:'disc', paddingLeft: '25px'}}>
                        <li>path: url absolu correspondant à la vue à afficher</li>
                        <li>exact: (aucune valeur) permet de s'assurer que le path corresponde exactement à l'url</li>
                        <li>render: fonction devant retourner du jsx () => {`(<div></div>)`}</li>
                        <li>component: référence de la composante à afficher (<strong>utilisé à la place de render)</strong></li>

                    </ul>
                    <p style={{marginTop:'.5em'}}>Chaque composante correspondant à l'url actif par son path sera affichée. C'est pourquoi on utilise souvent l'attribut <strong>exact</strong> lorsqu'il s'agit de la page d'accueil (path="/"). Pour s'assurer de n'afficher qu'une seule Route à la fois, on peut englober toutes les routes à l'intérieur de la composante <strong>{`<Switch></Switch>`}</strong> (importée de react-router-dom.</p>
                    <h4>Redirection</h4>
                    <p>On redirige un url vers un autre à l'aide de la balise <strong>{`<Redirect from="/" to="/posts"/>`}</strong>.</p>
                    <h4>Paramètres dynamiques</h4>
                    <p>On ajoute les paramètres dynamiques dans la propriété path: {`<Route path="/posts/:unId" .../>`}. L'interprétation des url se fait de haut en bas. Il faut donc mettre les routes avec paramètres dynamiques à la fin des choix de routes.</p>
                    <h4>Erreur 404 - Route inconnue</h4>
                    <p>On peut déclarer une composante sans path pour attraper les url non déclarés dans une route.</p>
                </Groupe>
                <Groupe title="Informations sur la route active et l'historique">
                    <p>Les composantes affichées comme enfant direct d'une route recevront des propriétés supplémentaires à l'intérieur de leurs props.</p>
                    <ul className="cours-liste">
                        <li>history: Permet entre autres de naviguer par programmation.</li>
                        <li>location: Informations sur la route active (incluant les paramètres de requête)</li>
                        <li>match: Permet entre autres la récupération des paramètres dynamiques</li>
                    </ul>
                    <p>Pour accéder à ses informations à l'intérieur d'autres composantes, il est nécessaire de passer l'information manuellement par les props ou d'utiliser le <em>high order component</em> withRouter (importé aussi de react-router-dom).</p>
                    <Snippet language="jsx" code={`
    import {withRouter} from 'react-router-dom';
    const UneComposante = props => (<div></div>);

    //permettra à UneComposante de recevoir les props liées au routeur
    export default withRouter(UneComposante);
                    `}/>
                    <p>On pourra aussi réclamer ces informations individuellements en les récupérant avec les <A internal={false} url="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/hooks.md">hooks</A>.</p>
                    <ul className="cours-liste">
                        <li>useHistory</li>
                        <li>useLocation</li>
                        <li>useParams</li>
                        <li>useRouteMatch</li>
                    </ul>
                </Groupe>
                <Groupe title="Déclaration d'un hyperlien ne rafraîchissant pas la page auprès du serveur">
                    <p>On remplace les hyperliens par une composante <strong>{`<Link to="url">texte</Link>`}</strong></p>
                    <p>Les liens sont absolus par défaut. Pour faire un lien relatif, il est nécessaire de les préfixer par l'url courant.</p>
                    <Snippet language="jsx" code={`
    <Link to={props.match.url+'/unsuffixe'}>un lien relatif</Link>
                    `}/>
                    <p>Pour styliser le lien actif, on peut aussi remplacer la composante Link par <strong>NavLink</strong> qui donnera par défaut la classe active aux liens pointant vers l'url actif. Sa propriété <strong>activeClassName</strong> permet d'assigner un nom de classe différent.</p>
                </Groupe>
                <Groupe title="Navigation par programmation">
                    <p>On utilise donc la propriété <strong>history</strong> passée dans les props pour y arriver. Quelques méthodes utiles:</p>
                    <ul className="cours-liste">
                        <li>history.<strong>goBack()</strong></li>
                        <li>history.<strong>goForward()</strong></li>
                        <li>history.<strong>push('/posts/3')</strong> : ajoute à l'historique et y garde donc la page précédente également</li>
                        <li>history.<strong>replace('/posts/3')</strong>: remplace l'entrée de la page active par la nouvelle dans l'historique (appuyer sur précédent ne permettra pas d'y retourner)</li>
                    </ul>
                </Groupe>
                <Groupe title="Imbrication de routes">
                    On peut utiliser des Routes à l'intérieur d'une composante déjà liée à une Route. Il faudra cependant y utiliser un lien relatif comme path.
                </Groupe>
            </Section>
        </section>
    );
};

export default Week3;
