import React from 'react';
import Snippet from '../Snippet/Snippet';
import {A, Groupe, Section} from '../../shared';

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
            <Groupe title="Navigation à l'intérieur de la ligne de commande">
                <p>Il est très fréquent qu'il soit nécessaire d'utiliser la ligne de commande pour effectuer des opérations avec Node.js.
                Sous PC, il est conseillé d'utiliser <strong><A url="http://cmder.net/">Cmder</A></strong> sous PC tandis que le <strong>Terminal</strong> fait déjà plutôt bien le travail sur Mac.</p>
                <Snippet code={`
    //Permet d'accéder au lecteur D
    d:
    //Permet d'afficher le contenu du dossier courant sur PC
    dir
    //Permet d'afficher le contenu du dossier courant sur Mac/Linux
    ls
    //Retour à la racine du lecteur
    cd /
    //Navigation à l'intérieur d'un dossier
    cd nomDunDossier
    //Revenir au dossier précédent
    cd ..
    //Navigation à travers un chemin composé de plusieurs dossiers
    cd nomDunDossier/nomDunAutre/PuisDunAutre
    //Veuillez entourer le chemin par une paire de guillemets s'il y a des espaces dans celui-ci

                `}/>
                <h4>Important</h4>
                <p>Si vous désirez interrompre un processus en cours dans la ligne de commande, il vous suffit d'appuyer à une ou deux reprises sur les touches <strong>ctrl-c</strong>.</p>
            </Groupe>
            <Groupe title="Utilisation de npm">
                <p>Dans la ligne de commande, il suffit d'utiliser le mot-clé <strong>npm</strong> pour rechercher une librairie dans le registre ou en télécharger une dans le dossier courant.</p>
                <Snippet code={`
    //Recherche d'une librairie contenant le nom jquery
    npm search jquery
    //Installation locale de la librairie jquery
    npm install jquery
                `}/>
                <p>Vous verrez souvent une manifeste nommé <strong>package.json</strong> contenant les différentes commandes à exécuter dans un projet ainsi que toutes les dépendances de ce projet en terme de librairies.
                    Ce manifeste permet d'installer toutes ses librairies d'un seul coup grâce à la commande suivante:</p>
                <Snippet code={`
    //Installe toutes les dépendances du projet
    npm install
    //Permet d'initialiser/créer un nouveau manifeste
    npm init
    //Permet d'initialiser/créer un manifeste en utilisant les valeurs par défaut (sans répondre aux questions)
    npm init -y
                `}/>
                <p>Une fois le manifeste existant, il est facile d'ajouter de nouvelles librairies au projet et de sauvegarder leur nom dans <strong>package.json</strong>.</p>
                <Snippet code={`
    //Télécharge une librairie et l'ajoute au manifeste
    npm install leNomDuneLibrairie --save
    //Même chose, mais pour une librairie nécessaire au développement uniquement
    npm install leNomDuneLibrairie --save-dev
                `}/>
                <p>Certaines librairies doivent être installées globalement. Celles-ci sont souvent des outils réutilisables. On installe une librairie globalement à l'aide de l'option -g.</p>
                <Snippet code={`
    //Installe la librairie benny-hill globalement
    npm install benny-hill -g
    //benny-hill pourrait maintenant être utilisée sans npm puisqu'elle est globale
    benny-hill
    //Installe create-react-app globalement
    npm install create-react-app -g
    //Create-react-app peut maintenant être utilisé pour créer des projets React
    create-react-app unNouveauProjet
                `}/>
                <p>Il est sinon possible d'utiliser temporairement une librairie globale sans l'installer de façon permanente à l'aide de l'outil <strong>npx</strong> aussi installé avec node:</p>
                <Snippet code={`
    //Téléchargera et exécutera la librairie benny-hill et la supprimera par la suite
    npx benny-hill
    //Téléchargera et exécutera la librairie create-react-app afin de créer le nouveau projet et supprimera ensuite create-react-app du poste
    npx create-react-app unNouveauProjet
                `}/>
            </Groupe>
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
    </section>);

export default Week1;