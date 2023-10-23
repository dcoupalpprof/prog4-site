import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week8 = () => {

    return (
        <section>
            <Section title="Context: Un état global à l'application (et un service)">
                <Groupe title="Le principe">
                    <p>Si on veut centraliser certaines données pour les rendre accessible partout dans l'application, une façon de faire serait de déclarer un <em>state</em> dans la composante racine et d'utiliser les props. Il peut cependant être désagréable d'avoir à faire passer ces données dans la chaîne entière de composantes qui peut s'avérer très profonde. Une autre façon de faire serait d'utiliser le <strong>Context API</strong>.</p>
                </Groupe>
                <Groupe title="Context API">
                    <p>On crée habituellement un nouveau <em>contexte</em> pour chaque type de données que nous voulons centraliser. Les exemples classiques sont habituellement un contexte contenant les informations de l'utilisateur connecté ou celles concerant le thème visuel actif.</p>
                    <p>Par convention, on créera un nouveau sous-dossier nommé <strong>providers</strong> dans le dossier src. On y ajoutera un nouveau fichier par contexte (ex: themeContext.js).</p>
                    <Snippet code={`
//themeContext.js
import React from 'react';
const ThemeContext = React.createContext();

export default ThemeContext;
				`}/>
                    <Snippet language="jsx" code={`
//app.js
import React, {useState} from 'react';
import ThemeContext from './providers/themeContext';

const App = props => {

	const [themeActif, setThemeActif] = useState('devil');

	const themeSwitchHandler = () => { };

	return (
		<div>
			<ThemeContext.Provider value={{
				themeActif: themeActif,
				changeThemeFn: themeSwitchHandler
			}}>
				{/* ... */}}
			</ThemeContext.Provider>
		</div>
	);
};
				`}/>
                    <p>Le contexte créé est un objet contenant une composante sous la propriété <strong>Provider</strong> et une autre sous la propriété <strong>Consumer</strong>. <strong>On utilise une fois le <em>Provider</em></strong> dans l'application en le positionnant de façon à ce que les composantes nécessitant ses informations en soit enveloppées.
 On pourra ensuite récupérer les données transmises par le Provider en utilisant le hook <A internal={false} url="https://fr.reactjs.org/docs/hooks-reference.html#usecontext">useContext</A>.</p>
                    <Snippet language="jsx" code={`
import ThemeContext from '../src/providers/themeContext';
import React, {useContext} from 'react';

const DeeplyNestedComponent = props => {
	const {themeActif} = useContext(ThemeContext);
	console.log(themeActif);
};
				`}/>
				<p>On pourra sinon utiliser autant de <em>Consumers</em> qu'il sera nécessaire directement à l'intérieur du JSX des composantes qui dépendent de ces données (beaucoup moins pratique et élégant que useContext). <strong>L'enfant direct d'un Consumer doit être une fonction recevant les données en paramètre et devant retourner du jsx</strong>.</p>

                    <Snippet language="jsx" code={`
const DeeplyNestedComponent = props => (
	<div>
		<ThemeContext.Consumer>
			{({themeActif}) => (
				<article className={themeActif}>{/* ... */}</article>
			)}
		</ThemeContext.Consumer>
	</div>
);
				`}/>
                    <p>On pourrait aussi utiliser cette forme: </p>
                    <Snippet language="jsx" code={`
const DeeplyNestedComponent = props => {

	const showArticle = ({themeActif}) => (
			<article className={themeActif}>{/* ... */}</article>
	);

	return (
		<div>
			<ThemeContext.Consumer>
				{showArticle}
			</ThemeContext.Consumer>
		</div>
	);
);
				`}/>
                    <p>Si on trouve désagréable la syntaxe d'utilisation du Consumer et du Provider (sous la forme Contexte.Provider) on ne pourrait qu'en exporter ses deux propriétés:</p>
                    <Snippet language="jsx" code={`
//themeContext.js
const ThemeContext = React.createContext();
const {Provider, Consumer} = ThemeContext;

export {Provider as ThemeProvider, Consumer as ThemeConsumer, ThemeContext};

//App.js
import {ThemeProvider} from './providers/themeContext';
...
const [themeActif, setThemeActif] = useState(defaultTheme);
<ThemeProvider value={{themeActif}}>{/* ... */}</ThemeProvider>
				`}/>
                </Groupe>
                <Groupe title="Un contexte comme un service autonome">
                    <p>Dans l'exemple précédent, on peut reprocher au contexte de dépendre de la composante App. Il serait préférable qu'il puisse avoir son propre state et ses propres méthodes.</p>
                    <Snippet language="jsx" code={`
//themeContext.js
import React, {useState, useContext} from 'react';
const ThemeContext = React.createContext();
const {Provider} = ThemeContext;

const ThemeProvider = props => {
	const [themeActif, setThemeActif = useState('devil');

	const themeSwitchHandler = () => {/* ... */};

	return (
		<Provider value={{themeActif, themeSwitchHandler}}>{props.children}}</Provider>
	);
};

const useTheme = () => {
    const themeContext = useContext(ThemeContext);
    if (themeContext === undefined) {
        throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
    }
    return themeContext;
};

export {ThemeProvider, useTheme};

	//App.js
import {ThemeProvider} from './providers/themeContext';
...
<ThemeProvider>{/* ... */}</ThemeProvider>

    //ComposanteQuelconque.js
import {useTheme} from '../providers/themeContext';
const UneComposante = () => {
    const {themeActif} = useTheme();
    console.log(themeActif);
};

				`}/>
                </Groupe>
            </Section>

	<Section title="Utilisation de Firebase">
                <Groupe title="Une suite d'outils côté serveur">
                    <p>Acquis par Google en 2014, Firebase offre désormais une multitude d'outils <em>backend</em> sans nécessiter nécessaire de rédiger du code serveur. Un compte Google gratuit permet d'avoir accès aux fonctionnalités suivantes:</p>
                    <ul className="cours-liste">
                        <li><strong>Firestore:</strong> Une base de donnée NoSQL à lecture en temps réel;</li>
                        <li><strong>Authentification:</strong> Authentification de l'utilisateur en utilisant les fournisseurs habituel (Google, Facebook, Github...) ainsi qu'une solution par texto ou courriel/mot de passe;</li>
                        <li><strong>Stockage:</strong> Hébergement de fichiers multiples;</li>
                        <li><strong>Hébergement:</strong> Possibilité d'héberger un site ou une application;</li>
                        <li><strong>Fonctions Cloud:</strong> Permet de lancer des fonctions du côté serveur en réaction aux événements déclenchés par l'utilisation des autres services Firebase. Le code est rédigé en Javascript/Typescript (NodeJs) et nécessite un compte Blaze.</li>
                        <li><strong>Autres: </strong>D'autres outils comme des fonctionnalités de <em>machine learning</em> et la distribution d'une application au sein d'une équipe de travail.</li>
                    </ul>
                    <p>Ces fonctionnalités peuvent être utilisées grâce au SDK de Firebase téléchargé par npm. Le SDK est disponible en plusieurs langages dont C#.</p>
                </Groupe>
                <Groupe title="Initialisation de Firestore">
                    <p>À l'aide d'un compte Google, il faut débuter la création d'un projet depuis le site de Firebase, initialiser Firestore et récupérer sa configuration depuis les <strong>paramètres du projet</strong> en sélectionnant la version Web. <A internal={false} url="https://firebase.google.com/docs/firestore/quickstart">L'introduction à Firestore</A> peut servir de tutoriel pour y arriver.</p>
                    <p>Dans le projet React, <strong>installer le module Firebase</strong> à l'aide de npm (<strong>npm i firebase</strong>).</p>
                    <p>L'application Firebase ainsi que chacun des services utilisés doivent être "activés" au démarrage de l'application React (ce code peut être exécuté depuis index.js).</p>
                    <Snippet language="javascript" code={`
    import {initializeApp} from "firebase/app";
    import {getFirestore} from "firebase/firestore";
    
    const firebaseApp = initializeApp(/*
        récupérer les paramètres et leur valeur depuis la config FB
    */);
    
    // les requêtes à Firestore utiliseront cet objet
    // il pourrait être utile de l'exporter
    const db = getFirestore(firebaseApp);
                    `}/>
                </Groupe>
                <Groupe title="Interrogation de Firestore">
                    <p>Firestore n'étant pas une bd relationnelle, la modélisation y est différente. On doit focaliser sur les questions que l'on voudra y poser en se rappelant aussi qu'un document ne peut être partiellement récupéré. Tous les champs du document sont envoyés lors d'une requête.</p>
                    <p>L'évitement de doublons dans la bd n'est plus une obsession étant donné le faible coût du stockage de données. On préféra la répétition des données plutôt que de devoir exécuter plusieurs requêtes pour compléter les informations requises.</p>
                    <h3>Récupération d'une collection - Lecture unique</h3>
                    <p>Pour effectuer une lecture unique d'une collection (qui ne se mettra pas à jour automatiquement), on utilisera les fonctions <strong>collection et getDocs</strong>:</p>
                    <Snippet code={`
    import {getDocs, collection} from 'firebase/firestore';
    
    const getCollection = async() => {
        const maCollection = await getDocs(collection(db, 'nomDeLaCollection'));
        // documents sera un tableau contenant les données de la collection
        const documents = maCollection.docs.map(doc => doc.data());
        
        // si le id de chacun des documents est nécessaire on procéderait ainsi
        const documents = maCollection.docs.map(doc => ({
            ...doc.data(),
            id: doc.id // le id se trouvera sous la propriété id
        }));
    };
                    `}/>

                    <h3>Récupération d'une collection - Temps réel</h3>
                    <p>Firestore permet aussi l'excitante lecture en temps réel où, par un écouteur d'événements, on recevra chaque mise à jour de la collection. Comme on utilise un écouteur, on utilise un système de <em>callbacks</em> ne devant pas être rédigé sous la forme asynchrone.</p>
                    <Snippet code={`
    import {onSnapshot, collection} from 'firebase/firestore';
  
    // la fonction passée en 2e paramètre sera appelée à chaque modification de la collection
    const unsub = onSnapshot(collection(db, 'nomDeLaCollection'), (snapshot) => {
        const documents = snapshot.docs.map(doc => doc.data());
    });
                    `}/>
                    <p>La variable <strong>unsub</strong> créée ci-dessous est une fonction qui <strong>doit être appelée pour se désabonner de l'écouter d'événements</strong>.</p>
                    <h3>Récupération d'un document par son id - Lecture unique</h3>
                    <p>Pour récupérer les données d'un seul document on utilisera les fonctions <strong>doc et getDoc</strong>:</p>
                    <Snippet code={`
    import {doc, getDoc} from 'firebase/firestore';
    
    const getDocument = async(id) => {
        const monDocument = await getDoc(doc(db, 'nomDeLaCollection', id));
        return monDocument.data();
    };
                `}/>
                </Groupe>
            </Section>
            
        </section>
    );
};

export default Week8;
