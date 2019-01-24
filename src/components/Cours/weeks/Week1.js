import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week1 = (props) => (
    <section>
        <Section title="La base">
            <Groupe title="Javascript">
                <p>Programmation multimédia 4 est basé sur une version de Javascript récupérant des éléments de ECMAScript ES2015-ES2018. Certains exemples de <A url="https://www.typescriptlang.org/">Typescript</A> pourront aussi y être montrés.</p>
                <p>Ce premier cours permettra de réviser les bases acquises ainsi que de se mettre à jour en Javascript avant d'introduire l'utilisation d'un cadriciel (<em>framework</em>).</p>
                <p>La révision de Javascript se fera à l'aide des diapositives du cours.</p>
            </Groupe>

            {/*<Groupe title="Insérer du Javascript dans une page html">
                <Snippet language="javascript" code={`
    <script>
        //Rédiger du code ici
    </script>
                `}/>
                <p>On lie un fichier externe avec l'attribut <strong>src</strong>. Dans ce cas, il ne faut pas rédiger de code entre les deux balises script.</p>
                <Snippet language="javascript" code={`
    <script src="js/fichier.js"></script>
                `}/>
                <p>On insère souvent les balises script juste avant la fermeture du body pour éviter que leur traitement/chargement ne bloque l'affichage du html.</p>
                <p>Si le navigateur supporte les modules ES6 et qu'on n'utilise pas d'outil comme <A url="https://webpack.js.org/">Webpack</A>, il est possible d'utiliser l'attribut <strong>type</strong> ainsi:</p>
                <Snippet code={`
    <script src="js/module1.js" type="module"></script>
    <!--Exploration des modules en JS-->
                `}></Snippet>
            </Groupe>

            <Groupe title="Déclaration d'une variable">
                <p>On déclare une variable à l'aide des mot-clé <strong>var, let</strong> et <strong>const</strong>.</p>
                <Snippet code={`
    var monNom = 'Bob';
    //Exploration de l'utilisation de let et const
                `}></Snippet>
                <p>On évitera dorénavant d'utiliser <strong>var</strong>.</p>
            </Groupe>
            */ }

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
            </Groupe>*/}
        </Section>
        <Section title="Introduction à React">
            <Groupe title="Installation">
                <p>Une fois Node.js installé, il vous faut ouvrir une nouvelle ligne de commande pour utiliser le module <strong>create-react-app</strong>. <br/>
                Il est possible de l'utiliser directement avec npx ou l'installer globalement: (voir la section <A url='/references' internal={true}>références</A> pour plus d'informations)</p>
                <Snippet code={`
    //L'utiliser directement avec npx
    npx create-react-app unNouveauProjet
    //OU l'installer globalement et l'utiliser ensuite:
    npm install create-react-app -g
    //Une fois l'installation terminée
    create-react-app unNouveauProjet

                `}/>
            </Groupe>
            <Groupe title="Composante fonctionnelle">
                <p>Une composante fonctionnelle est une fonction devant retourner du <strong>JSX</strong> (syntaxe ressemblant à du html). La paire de parenthèses après le return permet d'afficher le JSX sur plusieurs lignes.</p>
                <p>Le module React doit absolument être importer pour créer une composante (même s'il n'est pas utilisé de façon explicite).</p>
                <Snippet language="jsx" code={`
    import React from 'react';

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
                <p>Il serait aussi possible de passer des données dynamiquement à <em>UneComposante</em> et ajoutant des attributs
                    au nom arbitraire qui pourront être récupérer à l'intérieur des <strong>props</strong> de <em>UneComposante</em>.</p>
                <Snippet language="jsx" code={`
    import React from 'react';

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
            </Groupe>
        </Section>
    </section>);

export default Week1;