import React from 'react';
import classes from './References.module.css';
import {Header} from '../shared';
import {Helmet} from 'react-helmet';
import {A, Groupe, Snippet} from '../shared';
import {useScrollToTop} from "../../hooks";
import {config} from "../../config";
// import withScrollToTop from '../hoc/withScrollToTop';

const References = () => {

    useScrollToTop();
    /*showReferences = () => {
        return this.references.length === 0 ? <p className="center">Aucune référence disponible pour l'instant.</p> : this.references.map((references) => {
            return <h3 key={references.titre}>{references.titre}</h3>;
        });
    };*/

        return (
            <React.Fragment>
                <Helmet>
                    <title>{`${config.siteTitle} - Références`}</title>
                </Helmet>
                <main className={classes.Travaux}>
                    <Header siteTitle={config.siteTitle} isSmall={true} title="Références"/>
                    <section>
                        <Groupe toggleable={true} title="Manipulation d'un objet JS">
                            <p>On utilisera un objet pour organiser de données "complexes" à l'intérieur d'une variable.</p>
                            <Snippet code={`
    // Création d'un objet mélangeant plusieurs types de données
    const monObjet = {
        propriete1: 'valeur',
        propriete2: 5,
        propriete3: [1, 2, 3],
        methode1: () => console.log('saluer'),
        "une-propriete": 'la propriété peut être créée sous forme de string si elle contient des caractères spéciaux'
    };
    
    // Accès et modification d'une propriété
    console.log(monObjet.propriete2); // affiche 5 dans la console
    monObjet.propriete4 = 'test';  // ajoute propriete4 à l'objet
    
    // Accès dynamique à une propriété
    const maPropriete = 'propriete5';
    monObjet[maPropriete] = 'test'; // ajoute propriete5 à l'objet
    
    // L'accès dynamique permet un peu plus de flexibilité
    cont numero = 6;
    const prefixeProp = 'propriete';
    monObjet[prefixeProp + numero] = 'test'; // ajouter propriete6 à l'objet
    
    // On peut aussi utiliser une propriété dynamique à la création
    const propDynamique = 'unePropriete';
    const monObjet = {
        [propDynamique] : 666  // crée une objet avec la propriété unePropriete contenant la valeur 666
    };
                            `}/>
                            <h3>Décomposition d'un objet</h3>
                            <p>On peut utiliser la décomposition d'objets afin de créer des variables rapidement à partir des différentes propriétés de l'objet</p>
                            <Snippet code={`
    // Décomposition d'un objet
    const monObjet = {
        prenom: 'John',
        nom: 'Doe',
        age: 66,
        enfants: ['Lucienne', 'Roberte']
    };
    // On peut récupérer les valeurs de la façon normale:
    const monPrenom = monObjet.prenom;
    const monNom = monObjet.nom;
    
    // On peut aussi décomposer l'objet
    const {prenom, nom} = monObjet; // crée une variable prenom contenant 'John' et une variable nom contenant 'Doe'
    
    // On peut également utiliser l'opérateur ... pour récuper les propriétés non décomposées à l'intérieur d'un nouvel objet
    const {prenom, nom, ...autres} = monObjet; // la variable autres est un objet contenant les propriétés age et enfants
    
    // un objet passé en paramètre à une fonction peut également être décompose pour plus de clarté
    const maFonction = ({prenom, nom}) => {
        console.log(prenom + ' ' + nom);
    };
    
    maFonction(monObjet);
    
                            `}/>
                            <h3>Décomposition d'un tableau</h3>
                            <p>On peut utiliser la même logique pour récupérer rapidement les valeurs d'un tableau dans des variables:</p>
                            <Snippet code={`
    const monTableau = ['Denise', 'Lucienne', 'Roberte', 'Donalda', 'Brigitte'];
    const [prenom1, prenom2, ...autresPrenoms]; // prenom1 = 'Denise', prenom2 = 'Lucienne', autresPrenoms = ['Roberte', 'Donalda', 'Brigitte']
                            `}/>
                        </Groupe>



                        <Groupe toggleable={true} title="Navigation à l'intérieur de la ligne de commande">
                            <p>Il est très fréquent qu'il soit nécessaire d'utiliser la ligne de commande pour effectuer des opérations avec Node.js.</p>
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
                        <Groupe toggleable={true} title="Utilisation de npm">
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
                            <p>Une fois le manifeste existant, il est facile d'ajouter de nouvelles librairies au projet. Celle-ci sera ajoutée automatiquement au manifest <strong>package.json</strong>.</p>
                            <Snippet code={`
    //Télécharge une librairie et l'ajoute au manifeste
    npm install leNomDuneLibrairie
    //Même chose, mais pour une librairie nécessaire au développement uniquement
    npm install leNomDuneLibrairie --save-dev
                `}/>
                            <p>Certaines librairies doivent être installées globalement. Celles-ci sont souvent des outils réutilisables. On installe une librairie globalement à l'aide de l'option -g.</p>
                            <Snippet code={`
    //Installe la librairie benny-hill globalement
    npm install benny-hill -g
    //benny-hill pourrait maintenant être utilisée sans npm puisqu'elle est globale
    benny-hill
                `}/>
                            <p>Il est sinon possible d'utiliser temporairement une librairie globale sans l'installer de façon permanente à l'aide de l'outil <strong>npx</strong> aussi installé avec node:</p>
                            <Snippet code={`
    //Téléchargera et exécutera la librairie benny-hill et la supprimera par la suite
    npx benny-hill
    //Téléchargera et exécutera la librairie create-react-app afin de créer le nouveau projet et supprimera ensuite create-react-app du poste
    npx create-react-app unNouveauProjet
                `}/>
                        </Groupe>
                        <Groupe toggleable={true} title="Importation/Exportation de modules">
                            <p>On travaille avec les modules JS afin d'encapsuler les définitions de variables/fonctions/classes. On évite ainsi de polluer l'esapce publique d'une page web. Seul ce qui est exporté pourra être importé et utilisé dans d'autres scripts.</p>
                            <Snippet code={`
    //file1.js
    const uneVariable = 'un string';
    
    export default uneVariable;
    /* ************************************************************************************ */
    
    //file2.js
    import UnNomAuChoix from './file2.js';
    console.log(UnNomAuChoix); //affiche 'un string dans la console';
                            `}/>
                            <p>Les exportations portant la mention defaut (maximum d'un default par module) peuvent être importées sous n'importe quel nom de variable.</p>
                            <Snippet code={`
    //file1.js
    export const uneFonction = (param1, param2) => param1 + param2;
    
    export UneClasse {
        constructor() {
            console.log('Une instance a été créée');
        }
    }
    
    export const unBool = true;
    
    const unArray = [0,1,2];
    export default unArray;
    /* ************************************************************************************ */
    
    //file2.js
    import {uneFonction, UneClasse, unBool} from './file2.js';
    const uneInstance = new UneClasse(); //affiche 'Une instance a été créée dans la console'
    
    //ou
    
    import {uneFonction as fonction, UneClasse, unBool as unBooleen} from './file2.js';
    console.log(unBooleen); //affiche true dans la console
    
    //ou
    
    import * as fromFile2 from './file2.js';
    console.log(fromFile2.uneFonction(2,5)); //affiche 7 dans la console
    console.log(fromFile2.default.length); //affiche 3 dans la console
                            `}/>


                        </Groupe>
                        <Groupe title="Commandes Git fréquemment utilisées">
                            <p>Voici une liste peu exhaustive de commandes Git couramment utilisées:</p>
                            <Snippet language="javascript" code={`
    # initialise un projet git
    git init
    
    # ajoute les fichiers modifiés au staging area
    git add .
    
    # créer un commit avec la description fournie
    git commit -m "description du commit"
    
    # ajoute un tag au dernier commit
    git tag -l "nomDuTag"
    
    # pousse les commits de la branche donnée (main) vers le repositoire distant nommé (origin par défaut)
    git push origin main
    
    # pousse les commits ainsi que les tags
    git push origin main --tags
    
    # récupère les commits de la branche donnée depuis le repositoire distant nommé
    git pull origin master
    
    # affiche les fichiers modifiés dans la branche
    git status 
    
    # affiche les derniers commits de la branche
    git log
    
                            `}/>
                        </Groupe>
                        <Groupe title="Modification du state - Objets et tableaux" toggleable={true}>
                            <p>Stratégies pour modifier le <em>state</em> d'une composante à état lorsqu'il s'agit d'objets ou de tableaux par <A url="https://github.com/StephenGrider">Stephen Grider</A>.</p>
                            <img style={{maxWidth: '100%'}} src="/img/state_diagram.png" alt=""/>
                        </Groupe>
                    </section>
                </main>
            </React.Fragment>
        );
};

export default References;
