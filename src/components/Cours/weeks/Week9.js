import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week9 = () => {

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
{/*                <Groupe title="Un contexte comme un service autonome">*/}
{/*                    <p>Dans l'exemple précédent, on peut reprocher au contexte de dépendre de la composante App. Il serait préférable qu'il puisse avoir son propre state et ses propres méthodes.</p>*/}
{/*                    <Snippet language="jsx" code={`*/}
{/*//themeContext.js*/}
{/*import React, {useState} from 'react';*/}
{/*const {Provider, Consumer} = React.createContext();*/}

{/*const ThemeProvider = props => {*/}
{/*	const [themeActif, setThemeActif = useState('devil');*/}

{/*	const themeSwitchHandler = () => /!* ... *!/;*/}

{/*	return (*/}
{/*		<Provider value={{themeActif: themeActif}}>{props.children}}</Provider>*/}
{/*	);*/}
{/*};*/}
{/*export {ThemeProvider, Consumer as ThemeConsumer};*/}

{/*	//App.js*/}
{/*import {ThemeProvider} from './providers/themeContext';*/}
{/*...*/}
{/*<ThemeProvider>/!* ... *!/</ThemeProvider>*/}
{/*				`}/>*/}
{/*                </Groupe>*/}
            </Section>

            <Section title="Écrire dans Firestore">
                <Groupe title="Sauvegarde d'un nouveau document - Sans ID">
                    <p>Comme l'indique cette <A internal={false} url="https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document">rubrique de la documentation de Firestore</A>, si l'on désire ajouter un document à une collection <strong>sans spécifier d'ID et laisser Firestore en générer un unique</strong>, on utilisera le code suivant: </p>
                    <Snippet code={`
    import { collection, addDoc } from "firebase/firestore"
    import {db} from '../qq/part';
    
    const addDoc = async() => {
        const docRef = await addDoc(collection(db, 'nomDeLaCollection'), {
            propriete: 'valeur',
            propriete2: 'valeur2'
        });
        // Le nouveau id est récupérable dans docRef.id
    };
                  `}/>
                </Groupe>

                <Groupe title="Sauvegarde ou remplacement d'un document - ID spécifié">
                    <p>Afin de spécifier un id lors de la sauvegarde, on utilisera plutôt la commande <strong>setDoc</strong>:</p>
                    <Snippet code={`
    import {doc, setDoc} from 'firebase/firestore';
    import {db} from '../qq/part';
    
    const saveDoc = async () => {
        const docRef = doc(db, 'nomDeLaCollection', 'leID');
        await setDoc(docRef, {
            propriete: 'valeur',
            propriete2: 'valeur2'
        });
    };
                    `}/>
                    <p>Si un document existait déjà sous le ID spécifié, celui-ci sera écrasé par les nouvelles données. <strong>Une option supplémentaire permet cependant de fusionner les nouvelles et anciennes données</strong> afin d'éviter de perdre le document tel qu'il était sauvegardé. En cas de doute, il est préférable d'utiliser cette option d'emblée.</p>
                    <Snippet code={`
    const saveDoc = async () => {
        const docRef = doc(db, 'nomDeLaCollection', 'leID');
        await setDoc(docRef, {
            propriete: 'valeur',
            propriete2: 'valeur2'
        }, {
            merge: true  // cette propriété (dans un 2e objet) permet de fusionner les données
        });
    };
                    `}/>
                </Groupe>
            </Section>

            <Section title="Firebase Auth - Service d'authentification">
                <Groupe title="Principe">
                    <p>Parmi les différents services de Firebase, on retrouve celui permettant à un utilisateur de s'authentifier. Le développeur peut y utiliser des systèmes plus traditionnels comme la combinaison courriel/mot de passe ou utiliser des fournisseurs d'authentification connus tels que Google, Facebook, Microsoft, GitHub, Twitter.</p>
                    <p>On retrouve et configure ce service sous le lien <strong>Authentification</strong> dans la console de Firebase.</p>
                    <p>La <A internal={false} url="https://firebase.google.com/docs/auth/web/firebaseui#before_you_begin">documentation de l'Authentification de Firebase</A> est claire et facilement utilisable.</p>
                </Groupe>
                <Groupe title="Authentification par mot de passe - Activation">
                    <A internal={false} url="https://firebase.google.com/docs/auth/web/password-auth">Documentation pour l'authentification par mot de passe Firebase</A>
                    <p>On ajoutera ce service aux autres services configurés dans l'application afin d'y avoir ensuite accès:</p>
                    <Snippet code={`
    import {initializeApp} from "firebase/app";
    import {getFirestore} from "firebase/firestore";
    
    import {getAuth} from 'firebase/auth';
    ...
    const auth = getAuth(firebaseApp); // on exportera auth ensuite
    
                    `}/>
                </Groupe>
                <Groupe title="Authentification par mot de passe - Inscription">
                    <Snippet code={`
    import {createUserWithEmailAndPassword } from "firebase/app";
    import {auth} from '../qq/part';
    
    const register = async (email, password) => {
        const creds = await createUserWithEmailAndPassword(auth, email, password);
        console.log(creds.user); 
    };
    
                    `}/>
                    <p>Si les infos soumises sont invalides ou si l'utilisateur existe déjà, une erreur sera lancée et l'application sera interrompue. Il est donc nécessaire d'utiliser les instructions <A internal={false} url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch">try et catch</A> afin de pouvoir protéger l'utilisateur et l'informer des ses erreurs.</p>
                    <p>On retrouve les <A internal={false} url="https://firebase.google.com/docs/reference/js/auth#autherrorcodes">codes d'erreur possibles</A> dans la documentation.</p>
                    <Snippet code={`
    const register = async (email, password) => {
        try {
            const creds = await createUserWithEmailAndPassword(auth, email, password);
            console.log(creds.user);
        } catch(e) {
            console.log(e.code);
            switch(e.code) {
                case 'auth/wrong-password':
                    console.log('Mot de passe invalide');
                    break;
                // ... gestion des messages d'erreur
            }
        } 
    };
                    `}/>
                </Groupe>
                <Groupe title="Authentification par mot de passe - Authentification">
                    <Snippet code={`
    import {signInWithEmailAndPassword  } from "firebase/app";
    import {auth} from '../qq/part';
    
    const login = async (email, password) => {
        const creds = await signInWithEmailAndPassword(auth, email, password);
        console.log(creds.user); 
    };
                    `}/>
                    <p>On ajouterait aussi des instructions try...catch afin de réagir aux courriels/mot de passe erronés.</p>
                </Groupe>
                <Groupe title="Authentification par mot de passe - Détection de l'authentification">
                    <p>À l'image de la lecture de Firestore en temps réel, l'Authentification permet aussi d'écouter le statut d'un utilisateur et réagir à ses changements.</p>
                    <Snippet code={`
    import {auth} from '../qq/part';
    
    const unsub = auth.onAuthStateChanged(user => {
        console.log(user);
    });
                    `}/>
                    <p>Si l'utilisateur n'est pas connecté l'écouteur enverra la valeur null au départ. <span className="underline">La méthode onAuthStateChanged retourne aussi une fonction permet de se désabonner (comme Firestore) que l'on pourrait utiliser à l'intérieur d'un useEffect</span>.</p> <p>Un utilisateur authentifié une première fois sera automatiquement authentifié à son retour sur l'application.</p>
                </Groupe>
            </Section>
        </section>
    );

};

export default Week9;
