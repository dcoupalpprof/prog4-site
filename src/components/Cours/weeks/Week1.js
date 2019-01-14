import React from 'react';
import Snippet from '../Snippet/Snippet';
import {A, Groupe, Section} from '../../shared';

const Week1 = (props) => (
    <section>
        <Section title="La base">
            <Groupe title="Javascript">
                <p>Programmation multimédia 4 est basé sur une version de Javascript récupérant des éléments de ECMAScript ES2016-ES2018. Certains exemples de <A url="https://www.typescriptlang.org/">Typescript</A> pourront aussi y être montrés.</p>
                <p>Ce premier cours permettra de réviser les bases acquises ainsi que de se mettre à jour en Javascript avant d'introduire l'utilisation d'un cadriciel (<em>framework</em>) durant les cours suivants.</p>
            </Groupe>

            <Groupe title="Insérer du Javascript dans une page html">
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

            <Groupe title="Un titre" toggleable={true} hidden={false}>
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
        </Section>
    </section>);

export default Week1;