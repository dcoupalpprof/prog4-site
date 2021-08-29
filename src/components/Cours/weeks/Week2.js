import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week2 = (props) => (
    <section>
    {/*    <Section title="La base">*/}
    {/*        <Groupe title="Insérer du Javascript dans une page html">*/}
    {/*            <Snippet language="javascript" code={`*/}
    {/*<script>*/}
    {/*    //Rédiger du code ici*/}
    {/*</script>*/}
    {/*            `}/>*/}
    {/*            <p>On lie un fichier externe avec l'attribut <strong>src</strong>. Dans ce cas, il ne faut pas rédiger de code entre les deux balises script.</p>*/}
    {/*            <Snippet language="javascript" code={`*/}
    {/*<script src="js/fichier.js"></script>*/}
    {/*            `}/>*/}
    {/*            <p>On insère souvent les balises script juste avant la fermeture du body pour éviter que leur traitement/chargement ne bloque l'affichage du html.</p>*/}
    {/*            <p>Si le navigateur supporte les modules ES6 et qu'on n'utilise pas d'outil comme <A url="https://webpack.js.org/">Webpack</A>, il est possible d'utiliser l'attribut <strong>type</strong> ainsi:</p>*/}
    {/*            <Snippet code={`*/}
    {/*<script src="js/module1.js" type="module"></script>*/}
    {/*<!--Exploration des modules en JS-->*/}
    {/*            `}/>*/}
    {/*        </Groupe>*/}

    {/*        <Groupe title="Déclaration d'une variable">*/}
    {/*            <p>On déclare une variable à l'aide des mot-clé <strong>var, let</strong> et <strong>const</strong>.</p>*/}
    {/*            <Snippet code={`*/}
    {/*var monNom = 'Bob';*/}
    {/*//Exploration de l'utilisation de let et const*/}
    {/*            `}/>*/}
    {/*            <p>On évitera dorénavant d'utiliser <strong>var</strong>.</p>*/}
    {/*        </Groupe>*/}
    {/*    </Section>*/}


            {/*<Groupe title="Un titre" toggleable={true} hidden={false}>
                <Snippet language="jsx" code={`
    //Test
    import React from 'react';
    const Module = (props) => {
        return (
            <div>Allo</div>
        );
    };
`}/>
            </Groupe>
        </Section>*/}
        <Section title="Introduction à React">
            <Groupe title="Installation">
                <p>React est une librarie qui peut s'installer dans un projet existant, mais pour en tirer son plein potentiel et obtenir un projet bien configuré (avec Webpack, Babel, JSX, modules CSS... on utilisera le CLI <A url="https://fr.reactjs.org/docs/create-a-new-react-app.html" internal={false}>create-react-app</A>. </p>

                <p>D'autres "adaptations" sont également disponibles en fonction des besoins d'un projet telles que:</p>
                <ul>
                    <li><A url="https://nextjs.org/">Next.js</A> pour un rendu des composantes du côté serveur (SEO ++);</li>
                    <li><A url="https://www.gatsbyjs.com/">Gatsby</A> pour construire des sites web statique pouvant intégrer le contenu de la plupart des CMS existant avant l'exportation;</li>
                    <li><A url="https://relay.dev/">Relay</A>pour la création d'applications flexibles hautes performances;</li>
                    <li>...</li>
                </ul>
                <p>Une fois Node.js installé, il vous faut ouvrir une nouvelle ligne de commande pour utiliser le module <strong>create-react-app</strong>. <br/>
                On utilisera npx pour éviter d'avoir à installer une version localement. (voir la section <A url='/references' internal={true}>références</A> pour plus d'informations)</p>
                <Snippet code={`
    //L'utiliser directement avec npx
    npx create-react-app unNouveauProjet
                `}/>
                <p>Depuis le dossier du projet, on démarre le projet ainsi que sa compilation automatique avec la commande <strong>npm start</strong>.</p>
            </Groupe>
            <Groupe title="Composante fonctionnelle">
                <p>Une composante fonctionnelle est une fonction devant retourner du <strong>JSX</strong> (<A url="https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-different-in-the-new-transform">syntaxe ressemblant à du html</A>, mais <A url="https://www.icantbelieveitsnotbutter.com/">c'est
                    du JS</A>!). La paire de parenthèses après le return permet d'afficher le JSX sur plusieurs lignes sans obtenir d'erreurs à la compilation.</p>
                {/*<p>Le module React doit absolument être importé pour créer une composante (même s'il n'est pas utilisé de façon explicite).</p>*/}
                <p><strong>A</strong> - Dans les versions qui précédaient V17, on devait importer le module React. Ceci n'est plus nécessaire ni utilisé, mais vous pourriez tout de même y être confrontés en entreprise ou sur le web comme la version 17 est assez récente.</p>
                <Snippet language="jsx" code={`
    // import React from 'react';  // - A
    const UneComposante = (props) => {
        //Un peu de logique servant à l'affichage possible (très peu)
        return (
            <div>
                <h1>Du contenu</h1>
            </div>
        );
    };
                `}/>
                <p>On peut ensuite utiliser <em>UneComposante</em> à l'intérieur d'une composante parent depuis le même fichier js.</p>
                <Snippet language="jsx" code={`
    const App = (props) => (
        <main>
            <UneComposante/>
        </main>
    );

    //App est exporté pour être utilisé depuis un autre fichier
    export default App;
                `}/>
                <p>Il serait aussi possible de passer des données dynamiquement à <em>UneComposante</em> en ajoutant des attributs
                    au nom arbitraire qui pourront être récupérées à l'intérieur des <strong>props</strong> de <em>UneComposante</em>.</p>
                <p>On peut afficher dynamiquement des données ou exécuter des commandes js simples à l'aide des moustaches.</p>
                <Snippet language="jsx" code={`
    const UneComposante = (props) => (
            <div>
                <h1>{props.untitre}</h1>
            </div>
        );
    };

    const App = (props) => (
        <main>
            <UneComposante untitre="Le titre de cette composante"/>
        </main>
    );

    export default App;
                `}/>
                <p>On peut passer du texte statique à une composantes à travers ses props, mais on peut également passer tout type de contenu ainsi que des variables en utilisant les moustaches:</p>
                <Snippet language="jsx" code={`
    const App = (props) => {
        const texte = "du texte";
        const nombre = 5;
        return (
            <main>
                <UneComposante titre={texte} age={10} nombre={nombre} objet={{prop1: 2, prop2: "texte"}} />
            </main>
        );
    };

    export default App;
                `}/>

                <p>Pour faire un suivi plus facile et améliorer la complétion de code par l'IDE pour les props passées à une composante, on utilisera la décomposition d'objet:</p>
                <Snippet language="jsx" code={`
    const UneComposante = ({titre, age, nombre, objet}) => (
            <div>
                <h1>{titre}: {objet.prop1}</h1>
            </div>
        );
    };
                `}/>
                <p>Pour faire une boucle à l'intérieur du "html", on convertira habituellement un tableau de données en un tableau de jsx. On utilisera donc la fonction <strong>map</strong> de Javascript:</p>
                <p>React demande une clé unique pour chaque balise générée par map.</p>
                <Snippet language="jsx" code={`
    const App = (props) => {
        const eleves = [{prenom: 'Jimbo', nom: 'Scott'}, {prenom: 'Ludvig-Vanbe', nom: 'Toven'}, {prenom: 'Jimmy', nom: 'Chastenais'}];
        return (
            <main>
                <ul>
                    { eleves.map((eleve, index) => <li key={prenom}>{eleve.prenom + ' ' + eleve.nom}</li>) }
                </ul>
            </main>
        );
    };

    export default App;
                `}/>
            </Groupe>
        </Section>
    </section>);

export default Week2;
