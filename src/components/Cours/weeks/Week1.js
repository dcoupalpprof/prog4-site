import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week1 = (props) => (
    <section>
    <Section title="La base">
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
                `}/>
            </Groupe>

            <Groupe title="Déclaration d'une variable">
                <p>On déclare une variable à l'aide des mot-clé <strong>var, let</strong> et <strong>const</strong>.</p>
                <Snippet code={`
    var monNom = 'Bob';
    //Exploration de l'utilisation de let et const
                `}/>
                <p>On évitera dorénavant d'utiliser <strong>var</strong>.</p>
            </Groupe>
        </Section>
    </section>);

export default Week1;
