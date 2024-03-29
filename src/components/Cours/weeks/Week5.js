import React from 'react';
import {Groupe, Section, Snippet, A} from '../../shared';

const Week5 = (props) => {
    return (
        <section>
            <Section title="La navigation à l'intérieur de l'app">
                <Groupe title="Initialisation">
                    <p>Le routeur permet de naviguer dans l'affichage de composantes en fonction de l'url entrée dans la barre d'adresse du navigateur sans recharger la page (et perdre l'état des composantes en cours).</p>
                    <p>Les notes qui suivent s'appliquent aux version 6.4+ de react-router-dom.</p>
                    <p>Il est nécessaire d'installer premièrement le module <A url="https://reactrouter.com/en/main/start/overview">react-router-dom</A> avec <A url="https://www.npmjs.com/package/react-router-dom">npm</A> pour permettre de gérer les routes à l'intérieur de l'app.</p>
                    <p>On utilisera ensuite l'approche avec <strong>createBrowserRouter</strong> et <strong>RouterProvider</strong> pour initialiser les routes:</p>
                    <Snippet language="jsx" code={`
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
...
// la variable "routes" ci-bas est couverte dans les notes de la section suivante
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={createBrowserRouter(routes)} />);
                    `}/>
                </Groupe>
                <Groupe title="Déclaration et paramétrage des routes">
                    <p>Il existe deux façon de déclarer les routes à l'aide de <strong>createBrowserRouter</strong>.</p>
                    <ul className="cours-liste">
                        <li>L'une sous forme d'un tableau d'<A url="https://reactrouter.com/en/main/route/route#type-declaration" internal={false}>objets Route</A>.</li>
                        <li>L'autre à l'aide de composantes <strong><A url="https://reactrouter.com/en/main/route/route#type-declaration" internal={false}>&lt;Route&#47;&gt;</A></strong></li>
                    </ul>

                    <h3 style={{marginTop: '1em'}}>Sous forme d'un tableau</h3>
                    <p>Selon cette forme, les routes seront regroupées à l'intérieur d'un tableau. Chacune des routes sera déclarée dans un objet indiquant la composante à afficher (<em>element</em>) ainsi que l'url qui permettra son affichage (<em>path</em>).</p>
                    <Snippet language="jsx" code={`
const routes = [{
    path: '/', // affichée à l'accueil
    element: <Home/>
}, {
    path: '/travaux',
    element: <Portfolio/>
}];
                    `}/>

                    <h3 style={{marginTop: '1em'}}>À l'aide de composantes &lt;Route&#47;&gt;</h3>
                    <p>Il est aussi possible de fournir les informations de chaque route en utilisant la composante &lt;Route&#47;&gt; et ses props. On utilisera un fragment afin d'en fournir plusieurs.  L'utilisation de la fonction <strong>createRoutesFromElements</strong> permettra d'initialiser ce type de route.</p>
                    <Snippet language="jsx" code={`
const routes = createRoutesFromElements(
    <>
        <Route path="/" element={<Home/>} />
        <Route path="/travaux" element={<Portfolio/>} />   
    </>
);
                    `}/>
                    <p className="underline">Il peut être pratique d'utiliser le RouterProvider à l'intérieur de la composante App pour pouvoir aussi y utiliser des hooks comme useState.</p>
                </Groupe>
                <Groupe title="Imbrication de routes">
                    <p>Il arrivera souvent que l'on désirera imbriquer des routes. On pourrait ainsi avoir une composante parent affichat un mise en page récurrente et une section dynamique variant selon l'url utilisé. On pourrait aussi vouloir avoir une route parent affichant le contenu publique et une autre pour afficher le contenu aux utilisateurs authentifiés.
                        On procéderait donc ainsi selon les deux méthodes de déclaration de routes:</p>

                    <p>Attention : <span className="underline">remarquez que les <em>paths</em> enfant <strong>ne commencent pas par une barre oblique </strong> comme ils ne sont pas déclarés depuis la racine du site</span>.</p>

                    <h3 style={{marginTop: '1em'}}>Sous forme d'un tableau</h3>
                    <Snippet language="jsx" code={`

const routes = [{
    path: '/', // affichée à l'accueil
    element: <Layout/>,
    children: [{
        element: <Home/>,  // Home sera affiché à l'intérieur de la composante Layout à un endroit défini
        index: true // Permet d'afficher cette composante si l'url du parent est utilisé
    }, {
        path: 'travaux',
        element: <Portfolio/> // Portfolio sera affiché à l'intérieur de la composante Layout à un endroit défini
    }]
}, {
    path: '/auth',
    element: <LayoutAuth/>, 
    children: [{
        element: <LoginForm/>, // LoginForm sera affiché à l'intérieur de la composante LayoutAuth à un endroit défini
        index: true
    }, {
        path: 'admin',  // Admin sera affiché à l'intérieur de la composante LayoutAuth à un endroit défini
        element: <Admin/>
    }]
}];
                    `}/>

{/* <h3 style={{marginTop: '1em'}}>À l'aide de composantes &lt;Route&#47;&gt;</h3>
                    <Snippet language="jsx" code={`
const routes = createRoutesFromElements(
    <>
        <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="travaux" element={<Portfolio/>} />
        </Route>

        <Route path="/auth" element={<LayoutAuth/>} >
            <Route index element={<LoginForm/>} />
            <Route path="admin" element={<Admin/>} />
        </Route>
    </>
);
                    `}/>*/}

                    <h3 style={{marginTop: '1em'}}>Détermination de la zone dynamique</h3>
                    <p>Comme les routes imbriquées permettent d'afficher une composante à l'intérieur d'une autre (&lt;Portfolio&#47;&gt; à l'intérieur de &lt;Layout&#47;&gt; dans l'exemple ci-dessus), il faut aussi indiquer à quel endroit la composante enfant doit s'afficher à l'intérieur du parent.
                     On utilisera la composante &lt;Outlet&#47;&gt; pour ce faire.</p>
                    <Snippet language="jsx" code={`
import {Outlet} from 'react-router-dom';
const ComposanteParent = () => (
    <div>
        <Header>{ /* ... partie statique de la composante */ }</Header>
            <Outlet/> { /* la composante enfant sera affichée ici */ }
        <Footer>{ /* ... partie statique de la composante */ }</Footer>
    </div>
);
                    `}/>


                </Groupe>

                <Groupe title="Déclaration de routes à url dynamique">
                    <p>On utilise les : (deux-point) comme symbole à l'intérieur du path pour déclarer des segments dynamiques. Cette utilisation permet de pouvoir afficher la même composante quelque soit la valeur d'un ou plusieurs segments de l'url:</p>
                    <Snippet language="jsx" code={`
/* Déclaration des routes */
/* ... */
{
    path: '/travaux/:projetId',
    element: <Projet/>
}
/*  La composante Projet sera affichée pour chacun de ces urls: /travaux/10
*   - /travaux/10
*   - /travaux/vr
*   - /travaux/design-de-jeux
*/, 
                    `}/>
                    <p>Les urls peuvent contenir plus d'un segment dynamique:</p>
                    <Snippet language="jsx" code={`
/* ... */
{
    path: '/travaux/:sessionId/:projetId',
    element: <Projet/>
}
                    `} />

                    <p>Ces segments seront par la suite récupérables <span className="underline">sous la forme d'un objet contenant chaque segment comme propriété</span> à plusieurs endroits dans l'application (<A url="https://reactrouter.com/en/main/route/loader" internal={false}>loader</A>, <A url="https://reactrouter.com/en/main/hooks/use-params" internal={false}>useParams</A>...)</p>
                    <Snippet language="jsx" code={`
// Composante affichée à l'aide de l'url /travaux/10 avec un path déclaré ainsi: /travaux/:projetId

// ...
import {useParams} from 'react-router-dom'; 
// ...

const Projet = () => {
    const mesParams = useParams();
    console.log(mesParams); // {projetId: "10"}
    
    // plus concis
    const {projetId} = useParams();
    console.log(projetId); // "10"
};

                    `}/>

                    <p>La version 6 de React-Router priorisera les routes plus spécifiques (en fonction du nombre de segments, de leur nature statique ou dynamique) afin de toujours afficher la bonne route. Ainsi selon la déclaration suivante:</p>
                    <Snippet language="jsx" code={`
[
    {
        path: '/teams/:teamId',
        element: <Team/>
    }, {
        path: '/teams/new',
        element: <CreateTeam/>
    }
]

// L'url /teams/new afficherait réellement la composante liée à la deuxième route déclarée ci-haut (peu importe l'ordre de déclaration).
                    `}/>

                    <h3 style={{marginTop: '1em'}}>Route inconnue (<em>catchall</em>)</h3>
                    <p>On déclare les <em>splats</em> à l'aide de l'astérisque. Le chemin '/files/<strong>*</strong>' permettrait de fonctionner avec toutes les formes d'url qui suivent:</p>
                    <ul className="liste-cours">
                        <li>/files</li>
                        <li>/files/un</li>
                        <li>/files/un/deux</li>
                        <li>/files/un/deux/trois</li>
                    </ul>

                    <p>L'url extra "débordant" du '/files' pourra être récupéré sous forme d'une chaîne de caractères grâce au paramètre '*'.</p>
                    <Snippet language="jsx" code={`
const params = useParams();
console.log(params['*']);

// ou

const {'*': splat} = useParams(); // on renomme la propriété "*" pour créer une variable "splat" (n'importe quel nom aurait fonctionné)
console.log(splat);   

                    `}/>
                </Groupe>

                <Groupe title="Navigation dans l'application">
                    <p>Afin qu'un hyperlien ne rafraîchisse pas la page auprès du serveur (et perde le <em>state</em> de l'application), on remplacera la balise &lt;a&gt; par une composante <strong>{`<Link to="/url">texte</Link>`}</strong></p>
                    <Snippet language="jsx" code={`
<Link to="/path-absolu-depuis-la-racine-du-site">Lien absolu</Link>
                `}/>
                    <p>Pour styliser le lien actif, on peut aussi remplacer la composante Link par <strong><A url="https://reactrouter.com/en/main/components/nav-link#navlink" internal={false}>NavLink</A></strong> qui <span className="underline">donnera
                    par défaut la classe active aux liens pointant vers l'url actif</span>.</p>

                    <p>La composante <A url="https://reactrouter.com/en/main/components/navigate#navigate" internal={false}>&lt;Navigate&#47;&gt;</A> permet aussi de naviguer vers une autre route/composante dès qu'elle est affichée dans le jsx de l'application. On l'utilisera donc souvent à l'intérieur d'une logique d'affichage conditionnel pour rediriger ou non l'utilisateur vers une autre page.</p>
                    <Snippet language="jsx" code={`
const MaComposante = () => {
    { /* ... */ }
    
    return (
        <div>
            { 
                !isAuthenticated && (<Navigate to="/login" replace/>) // replace est optionnel. il efface l'entrée précédente dans l'historique du navigateur
            }
        </div>
    );
};
                    `}/>
                    <h3 style={{marginTop: '1em'}}>Naviguer par programmation</h3>
                    <p>Le hook <A url="https://reactrouter.com/en/main/hooks/use-navigate" internal={false}>useNavigate</A> permet de récupérer une fonction pour naviguer vers une route spécifique par programmation:</p>
                    <Snippet language="jsx" code={`                  
const UneComposante = () => {
    const navigate = useNavigate();
    // ...
    const clickHandler = () => {
        navigate('/travaux');
    };
};
                    `}/>

                    <h3 style={{marginTop: '1em'}}>Effectuer une redirection dans la déclaration des routes</h3>
                    <p>Il est courant de vouloir rediriger un url vers un autre. On pourrait par exemple vouloir rediriger l'utilisateur de l'url '/' par '/profil' si aucune composante n'est prévue pour l'url racine:</p>
                    <Snippet language="jsx" code={`
const routes = [{
    path: '/',
    children: [{
        path: '/travaux',
        element: <Portfolio/>
    }, {
        path: '/profil',
        element: <Profile/>
    },{
        index: true, // affiché par défaut en entrant '/'
        element: <Navigate to="/profil"/>
    }]
}];
                    `}/>
                </Groupe>

{/*<Groupe title="Fournir des données à une route">
                    <p>Certaines composantes peuvent nécessiter de récupérer certaines données (souvent externes) afin de pouvoir en afficher le contenu. La récupération de ces données est souvent critique et rend désuète la composante si l'information n'y est pas acheminée.</p>
                    <p>On pourrait évidemment récupérer les informations depuis l'intérieur de la composante en utilisant probablement useParams, mais on doit souvent gérer un premier rendu avant que les informations soient obtenues ainsi que de devoir gérer l'affichage en cas d'erreur dans la récupération des données.</p>
                    <p>La fonction <A url="https://reactrouter.com/en/main/route/loader#loader" internal={false}>loader</A> dans la déclaration des routes permet de récupérer les informations et de suspendre l'affichage de la composante tant qu'elles ne sont pas obtenues. La composante peut ensuite récupérer directement ces informations
                    (même si elles proviennent d'une promesse) dès le premier rendu de cette composante grâce à <A url="https://reactrouter.com/en/main/hooks/use-loader-data#useloaderdata" internal={false}>useLoaderData</A>:</p>
                    <Snippet language="jsx" code={`
const routes = [
    {
        path: '/un-url',
        element: <UneComposante/>,
        loader: ({params}) => {
            // les params tels que ceux récupérés par useParams sont accessibles ici
            // les données doivent être retournées ici (directement ou dans une promesse) pour être récupérées dans la composante
        }
    }
];

const UneComposante = () => {
    const mesDonnes = useLoaderData();

    return (
        {...}
    );
};
                    `}/>
                    <p className="underline">Dans le cadre du cours, les fonctions utilisées dans loader seront toujours déclarées et exportées depuis le fichier de la composante en question.</p>
                </Groupe>*/}

                <Groupe title="Informations sur la route active et l'historique">
                    <p>D'autres props permettent d'obtenir plus d'informations à propos de la route active depuis une composante:</p>
                    <ul className="cours-liste">
                        <li><A url="https://reactrouter.com/en/main/hooks/use-location#uselocation" internal={false}>useLocation</A></li>
                        <li><A url="https://reactrouter.com/en/main/hooks/use-match#usematch" internal={false}>useMatch</A></li>
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

                <Groupe title="Déclaration conditionnelle des routes">
                    <p>En utilisant un state, il peut être possible de modifier la liste de routes disponibles en tout temps. Pour ce faire les routes doivent cependant être déclarées dans une composante (comme App) pour pouvoir y déclarer un state.</p>
                    <p>On pourrait ainsi avoir plus d'un tableau de routes ou plus d'un ensemble de composantes Routes et les utiliser avec les RouterProvider selon une condition donnée.</p>
                    <Snippet language="jsx" code={`
const App = () => {
    const [monState, setMonState] = useState(false);
    
    const routes = monState ? [
        {
            path: '/',
            element: <ComposanteA setFn={setMonState} />
        }, {
            path: '/url',
            element: <ComposanteB setFn={setMonState} />
        }
    ] : [
         {
            path: '/',
            element: <ComposanteC setFn={setMonState} />
        }, {
            path: '/url',
            element: <ComposanteD setFn={setMonState} />
        },
    ];
    
    return (
        <RouterProvider router={createBrowserRouter(routes)}/>
    );
    
    
};
                    `}/>
                    <p>L'utilisation de <em>splats</em> et de &lt;Navigate&#47;&gt; pourra permettre la redirection d'un ensemble de routes à l'autre lors du changement de state.</p>
                </Groupe>


                {/*<Groupe title="temp">*/}


                {/*    <p>À l'endroit où seront affichées les différentes vues, on déclare une composante <strong>{`<Route/>`}</strong> (importée depuis react-router-dom) pour chacun des états.</p>*/}
                {/*    <p>La composante Route permet d'afficher une composante conditionnellement à l'url courant. On englobera donc chaque composante-page par un Route différent.</p>*/}
                {/*    <h4>Propriétés de la composante {`<Route/>`}:</h4>*/}
                {/*    <ul style={{listStyleType:'disc', paddingLeft: '25px'}}>*/}
                {/*        <li>path: url absolu correspondant à la vue à afficher</li>*/}
                {/*        <li>exact: (aucune valeur) permet de s'assurer que le path corresponde exactement à l'url. Souvent utilisé pour l'accueil ('/') et les routes imbriquées.</li>*/}
                {/*        <li>render: fonction devant retourner du jsx () => {`(<div></div>)`}</li>*/}
                {/*        <li>component: référence de la composante à afficher (<strong>utilisé à la place de render)</strong>. Il est plus courant de déclarer la composante comme enfant de route plutôt que d'utiliser la prop <strong>component</strong>.</li>*/}
                {/*    </ul>*/}
                {/*    <p style={{marginTop:'.5em'}}>Chaque composante correspondant à l'url actif par son path sera affichée. C'est pourquoi on utilise souvent l'attribut <strong>exact</strong> lorsqu'il s'agit de la page d'accueil (path="/").</p>*/}
                {/*        <p>Pour s'assurer de n'afficher qu'une seule Route à la fois, il est recommandé d'englober toutes les routes à l'intérieur de la composante <strong>{`<Switch></Switch>`}</strong> (importée de react-router-dom).</p>*/}
                {/*    <h4>Redirection</h4>*/}
                {/*    <p>On redirige un url vers un autre à l'aide de la balise <strong>{`<Redirect to="/posts"/>`}</strong>. On peut donc faire terminer le switch par un <strong>Redirect</strong> pour rediriger toutes les requêtes qui ne correspondent pas à une route.</p>*/}
                {/*    <h4>Paramètres dynamiques</h4>*/}
                {/*    <p>On ajoute les paramètres dynamiques dans la propriété path: {`<Route path="/posts/:unId" .../>`}.</p>*/}
                {/*    <h4>Organisation des routes</h4>*/}
                {/*    <p>Afin de s'assurer du bon comportement d'affichage des routes, <strong>on déclarera les routes plus précises (plus longues) en premier vers les plus générales (plus courtes) à la fin</strong>.</p>*/}
                {/*    <h4>Erreur 404 - Route inconnue</h4>*/}
                {/*    <p>On peut déclarer une composante sans path pour attraper les url non déclarés dans une route.</p>*/}
                {/*</Groupe>*/}


                {/*<Groupe title="Navigation par programmation">*/}
                {/*    <p>Si la navigation ne peut être faite au clic d'un Link, on utilise <strong>history</strong> passée dans les props pour naviguer par programmation. Quelques méthodes utiles:</p>*/}
                {/*    <ul className="cours-liste">*/}
                {/*        <li>history.<strong>goBack()</strong></li>*/}
                {/*        <li>history.<strong>goForward()</strong></li>*/}
                {/*        <li>history.<strong>push('/posts/3')</strong> : ajoute à l'historique et y garde donc la page précédente également</li>*/}
                {/*        <li>history.<strong>replace('/posts/3')</strong>: remplace l'entrée de la page active par la nouvelle dans l'historique (appuyer sur précédent ne permettra pas d'y retourner)</li>*/}
                {/*    </ul>*/}
                {/*</Groupe>*/}
                {/*<Groupe title="Imbrication de routes">*/}
                {/*    <p>On peut utiliser des Routes à l'intérieur d'une composante déjà affichée par une Route. Le path de la*/}
                {/*        route à afficher devra être absolu en contenant donc le path depuis la racine du site ou*/}
                {/*        utilser <strong>props.match.url</strong> comme préfixe.</p>*/}
                {/*</Groupe>*/}
            </Section>

            <Section title="Rédaction de tests" subtitle="Tests de bout en bout (E2E)">
                <Groupe title="Introduction">
                    <p>Les tests permettent de s'assurer de la fiabilité du code durant le développement et dans le temps. Il incombe au développeurs de rédiger ses tests au fur et à mesure du développement de ses composantes.
                                            L'ajout d'une nouvelle fonctionnalité, la mise à jour d'une dépendance ou l'utilisation de données externes imprévues peuvent compromettre le bon fonctionnement de l'application.</p>
                    <p>Il existe plus d'un type de tests. On pense notamment aux suivants:</p>
                    <ul className="cours-liste">
                        <li>Tests unitaires: Permettent de vérifier si une fonction recevant les paramètres données retourne toujours la même résultat (parfois exagérés pour du front-end).</li>
                        <li>Tests de composantes: Permettent d'isoler une composante de son application et de lui passer des props précis pour vérifier si le résultat affiché est le même et que son comportement est celui qui est attendu.</li>
                        <li><strong>Tests de bout en bout (E2E)</strong>: Ceux qui nous intéressent ici, permettent de tester l'application dans son ensemble en vérifiant si les différentes fonctionnalités du site (navigation, authentification, manipulations du state) fonctionnent toujours.</li>
                    </ul>
                    <p>Certains développeurs commencent par rédiger les tests avant de développer les fonctionnalités afin de s'assurer de cibler ce qui est nécessaire au fonctionnement d'un composante. Ces tests échouent donc tant que la composante n'est pas développée telle que prévue initialement.</p>
                    <p>Les tests sont développés selon le point de vue de l'utilisateur. Ils simulent la navigation et les interactions telles qu'exécutées par celui-ci.</p>
                    <p>On utilisera <A url="https://www.cypress.io/" internal={false}>Cypress</A> comme cadriciel de tests.</p>
                </Groupe>

                <Groupe title="Installation et configuration">
                    <p>On install Cypress comme dépendance de développement à l'aide de la commande:</p>
                    <Snippet code={`
npm i -D cypress
                    `}/>
                    <p>L'une ou l'autre de ces deux commandes peuvent être utilisées pour effectuer les tests (l'application doit aussi être en route avec <strong>npm run dev</strong>:</p>
                    <ul className="cours-liste">
                        <li>npx cypress open  // permet d'ouvrir le studio (UI) Cypress. À utiliser la première fois</li>
                        <li>npx cypress run // exécute les tests dans le terminal</li>
                    </ul>
                    <p>Les tests devront être rédigés par défaut sous /cypress/e2e sous la forme <em>nom</em>.test.js</p>

                    <h3 style={{marginTop: '1em'}}>Modification de la configuration (Vite et Cypress)</h3>
                    <p>Les tests avec le routeur ne semblent pas fonctionner par défaut, il est désormais nécessaire d'utiliser l'adresse 127.0.0.1 plutôt que l'alias localhost:</p>
                    <Snippet language="javascript" code={`
// Fichier vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1'
  }
})

// Fichier cypress.config.js
// Dans l'objet e2e, ajouter les propriétés suivantes:
    baseUrl: 'http://127.0.0.1:5173',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
                    `}/>
                </Groupe>
                                <Groupe title="Création d'un premier test">
                                    <p>On ajoutera la ligne <strong>///&lt;reference types="cypress" /&gt;</strong> en tête de chacun des fichiers de tests afin d'avoir davantage d'Intellisense sous VS Code.</p>
                                    <p>Les tests auront souvent la forme suivante:</p>
                                    <ol className="cours-liste">
                                        <li>Visiter un url</li>
                                        <li>Faire possiblement une/des manipulations</li>
                                        <li>Faire une vérification</li>
                                    </ol>
                                    <Snippet language="javascript" code={`
///<reference types="cypress"/>
// Les méthodes test/it ainsi que l'objet cy sont ajoutées à l'environnement global par Cypress, inutile de les importer
it('une description de ce qui est attendu du test', () => {
    // on navigue vers une page
    cy.visit('/url');
    
    //on effectue une requête d'un élément et on effectue une manipulation
    cy.get('.btn.btn-full').click();
    
    // on effectue ensuite une vérification/assertion
    cy.get('h2').should('have.text', 'Blog');    
});   
                                    `}/>
                                    <p>Le test est effectué sur un maximum (par défaut de 4 secondes). Cypress attendra donc 4 secondes pour s'assurer que toutes les étapes sont des succès avant de déclarer un test comme un échec.</p>
                                    <p>On peut rédiger autant de tests que nécessaires dans le fichier et on peut également utiliser plusieurs <em>expect</em> dans un même test. Pour réussir, chacun d'eux devra être un succès.</p>
                                    <p>Il est également possible de regrouper des tests à l'intérieur d'une suite pour ajouter une description supplémentaire:</p>
                                    <Snippet language="javascript" code={`
//...

describe('Nom de la suite de tests', () => {
    it('...qqc', () => {});
    
    it('...qqc', () => {});
    
    it('...qqc', () => {});
});    
                                    `}/>
                                </Groupe>
                                <Groupe title="Requêtes">
                                    <p>On utilisera principalement la méthode <A url="https://docs.cypress.io/api/commands/get" internal={false}>get</A> pour sélectionner un élément de l'interface. Afin de ne pas avoir à corriger les tests trop souvent, on utilisera normalement des sélecteurs qui ne varieront pas dans le temps ni qui sont trop liés au style de l'interface.
                                    Cypress suggère d'utiliser un sélecteur d'attribut <strong>[data-cy="valeur"]</strong>.</p>
                                    <p>On sélectionne aussi souvent à l'aide de la méthode <A url="https://docs.cypress.io/api/commands/contains" internal={false}>contains</A> afin de sélectionner un élément par le texte qu'il contient. Le premier élément contenat le texte fourni (même partiellement) sera utilisé. On peut aussi les combiner:</p>
                                    <Snippet language="javascript" code={`
cy.get('.nav').contains('About');  // le test sera un échec si aucune balise n'est trouvée                        
                                    `}/>
                                    <p>D'autres types de requêtes peuvent être effectués comme pour récupérer l'<A url="https://docs.cypress.io/api/commands/url" internal={false}>url
                                        en cours</A> ou le <A url="https://docs.cypress.io/api/commands/title" internal={false}>title de la page en cours</A>. Les différentes requêtes disponibles se retrouvent dans le panneau gauche de la <A url="https://docs.cypress.io/api/commands/as" internal={false}>documentation
                                        de Cypress</A>.</p>
                                </Groupe>
                                <Groupe title="Assertions">
                                    <p>Le <em>code completion</em> est ici très utile comme les <em><A url="https://docs.cypress.io/api/commands/should" internal={false}>assertions</A></em> sont des <A url="https://docs.cypress.io/guides/references/assertions#Text-Content" internal={false}>chaînes
                                        de caractères</A>.</p>
                                    <p>Il est important de savoir que dans Cypress, même les requêtes servent aussi d'assertion. Une requête qui n'arrive pas à récupérer l'élément voulu mènera à un échec du test.</p>
                                </Groupe>
                            </Section>
        </section>
    );
};

export default Week5;
