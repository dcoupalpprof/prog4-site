import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week9 = () => {

    return (
        <section>
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
