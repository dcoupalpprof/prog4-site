import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week8 = () => {

    return (
        <section>
            <Section title="Récupération de données externes">
                <Groupe title="Les effets secondaires (de bord)">
                    <p>On utilisera le <strong>hook <A internal={false} url="https://fr.reactjs.org/docs/hooks-effect.html">useEffect</A></strong> pour contrôler le moment auquel certaines opérations sont effectuées dans une composante. Plutôt que d'être exécuté à chaque rendu, le code à l'intérieur d'un
                    useEffect est exécuté selon des conditions précises. On utilse souvent ce hook pour exécuter des <strong>effets secondaires</strong>.</p>
                    <p>Les effets secondaires sont des opérations qui sortent des opérations normales d'une composantes (fonction pures). Une synchronisation avec un serveur, mise en cache de données ou la génération d'un log pourraient être de bons exemples d'effets secondaires.</p>
                    <p>Comme les autres hooks, useEffect ne peut qu'être utilisé à la <em>racine</em> de la composante (pas dans une fonction, un if, une boucle...). Le premier paramètre de useEffect est une fonction à appeler après chaque rendu.</p>
                    <Snippet language="jsx" code={`
    import {useEffect} from 'react';
    const uneComposante = props => {
    
        useEffect(() => {
            // Cette opération est exécutée après le premier rendu et les suivants
        });    
    };
                    `}></Snippet>
                    <p>Si useEffect modifie le state, un nouveau rendu sera exécuté et une boucle infinie s'en suivra. On utilisera alors le <span className="underline">deuxième
                        paramètre</span> de useEffect.</p>
                    <Snippet language="jsx" code={`
    useEffect(() => {
        // Cette opération ne sera exécutée qu'au premier rendu
    }, []);
                    `}/>
                    <p>Le 2e paramètre est un tableau de dépendances. Les variables qu'on y insérera seront évaluées à chaque rendu et si une valeur venait qu'à être modifiée, la fonction de useEffect serait éxécutée à nouveau.</p>
                    <Snippet language="jsx" code={`
    const [nbEssaie, setNbEssais] = useState(0);
                    
    useEffect(() => {
        // Cette opération ne sera exécutée qu'au premier rendu et à chaque fois que
        // props.match.params.userId OU nbEssais changeront de valeur
    }, [props.match.params.userId, nbEssais]);
                    `}/>
                    <p>Il est aussi possible de retourner une fonction depuis la fonction passée en paramètre. Celle-ci sera exécutée à la suppression de la composante. On pourrait ainsi utiliser un addEventListener dans le useEffect et retourner une fonction faisant un removeEventListener.</p>
                    <Snippet language="jsx" code={`
    useEffect(() => {
        // Cette opération ne sera exécutée qu'au premier rendu
        
        return () => {
            // Cette opération sera exécutée à la destruction (démontage) de la composante
        }
    }, []);
                    `}/>
                </Groupe>
                <Groupe title="Requêtes ajax">
                    <p>Bien que des librairies comme Axios font un travail efficace, nous utiliserons la méthode <strong>fetch</strong> pour interroger un serveur. Fetch n'utilise pas l'objet typique xmlHttpRequest (comme le fait axios). Son utilisation retourne une promesse afin de mieux enchaîner les différentes requêtes asynchrones et il est de plus compatible avec les <strong>Service Workers</strong> si l'envie de développer une <strong>Progressive web app (PWA)</strong> vous prenait. Il faut écrire davantage de code que si nous utilisions axios, mais c'est le prix à payer.</p>
                    <Snippet code={`
    //Requête en GET
    fetch('url')
    .then(resp => resp.json) //la réponse "incomplète" à convertir (depuis un json ici)
    .then(data => console.log(data)); //les données retournées par le serveur

    //Requête en POST
    fetch('url', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'}, //dans la plupart des cas
        body: JSON.stringify({  //informations envoyées au serveur
            prop1: val1,
            prop2: val2
        })
    }).then(resp => resp.json())
     .then(data => console.log(data));
                    `}/>
                    <p>On utilise la promesse retournée par fetch pour enchaîne par la suite l'exécution d'autres fonctions en utilisant sa méthode <strong>then</strong>. On peut donc y récupérer l'information, mais aussi retourner une nouvelle promesse pour continuer une séquence asynchrone. Les promesses permettent donc de garder le code ordonné et lisible sans se perdre dans une série de callbacks entrecroisés. D'autres solutions telles ques Rxjs ont aussi vu le jour, mais celle-ci ne sera pas abordée durant la session.</p>
                    <p>Avec l'avènement de ES2018, il est maintenant possible d'utiliser <strong>async/await</strong> en combinaison avec les promesses:</p>
                    <Snippet code={`
    async () => {
        const resp = await fetch('url');
        const data = await resp.json();
        console.log(data);
    };
                    `}/>
                    <p><strong>Await</strong> fait une pause (en quelque sorte) dans le code en attendant que la promesse soit résolue. Il est impossible d'utiliser <strong>await</strong> si la fonction qui englobe cette commande n'est pas marquée par un <strong>async</strong>. Les deux méthodes <strong>then</strong> et <strong>async/await</strong> peuvent aussi être mélangées selon le style de programmeur.</p>
                    <Snippet code={`
    async () => {
        const data = await fetch('url')
         .then(resp => resp.json());
         console.log(data);
    };
                    `}/>
                    <p>Si on désire exécuter un fetch après le premier rendu de la composante, on combinera l'utilisation de fetch et useEffect:</p>
                    <Snippet language="jsx" code={`
    useEffect(() => {
        // On ne peut pas déclarer la fonction de useEffect comme async parce que celle-ci retournerait une promesse (plutôt qu'une fonction à exécuter au démontage)
        const fetchData = async(() => {
            const resp = await fetch('url');
            const data = await data.json();
            // on modifierait probablement le state de la composante ici
        );
        fetchData();
    }, []);
                    `}/>
                </Groupe>
                <Groupe title="Cross origin resource sharing (CORS)">
                    <p>Par défaut, il est impossible <strong>depuis un navigateur</strong> d'accéder à des ressources situées sur un serveur appartenant à un nom de domaine. Celui-ci doit explicitement permettre au domaine de l'application d'accéder à ses ressources ou permettre à tous les domaines d'y accéder. Une tentative non autorisée, affichera une erreur à cet effet dans la console.</p>
                    <p>Si le développeur n'a pas accès au serveur distant et qu'il n'est pas possible de demander l'accès à ses ressources, il existe au moins deux moyens de procéder pour y arriver. Il est possible d'utiliser un proxy qui permet les requêtes de l'application et qui les redirigera ensuite vers le serveur qui possède les ressources souhaitées. <A url="https://cors-anywhere.herokuapp.com/" internal={false}>CorsAnywhere</A> sert exactement à cette fin. Le <A url="https://github.com/Rob--W/cors-anywhere" internal={false}>code de ce proxy</A> est aussi disponible sur Github pour permettre de déployer son propre <em>CorsAnywhere</em>.</p>
                    <Snippet code={`
    //utilisation de corsAnywhere
    fetch('https://cors-anywhere.herokuapp.com/http://sitedelaressourcetantsouhaitee.com')...
                    `}/>
                    <p>On pourrait aussi utiliser la méthode <strong>jsonp (json with padding)</strong> si l'api à interroger le permet. Comme il est possible de télécharger un fichier javascript distant à l'aide d'une balise script, on peut donc utiliser l'url de l'api comme source d'une balise script. Pour récupérer le contenu retourné, il faut que les données soient passées par une fonction. On doit donc fournir à l'api le nom de la fonction à laquelle sera passée le contenu. On utilise un paramètre de requête souvent nommé <strong>callback</strong> pour identifier cette fonction (ouf). Le contenu de la balise script contiendra donc un appel de cette fonction avec les données passées en paramètre. Afin de simplifier la chose, on peut utiliser <A url="https://github.com/camsong/fetch-jsonp" internal={false}>fetch-jsonp</A>.</p>
                    <Snippet code={`
    //utilisé de la même façon que fetch
    const resp = await fetchJsonp('urlDeLapi');
    const data = resp.json();
    //dans l'outil de développeurs Chrome, on verra que les données retournées sont "paddées" par une fonction
                    `}/>
                </Groupe>
                <Groupe title="Création d'une promesse">
                    <p>Il arrive à certains moments où l'on veut exécuter une commande après une tâche asynchrone qui ne retourne pas nécessairement de promesse. On peut tout de même en créer une soi-même.</p>
                    <Snippet code={`
    const promesse = new Promise((resolve, reject) => {
        //fait qq qui nécessite du temps
        //on résout ensuite la promesse avec la fonction resolve passée en paramètre:
        resolve();
    });
                    `}/>
                    <p><strong>Resolve</strong> (le premier paramètre) permet de résoudre la promesse et de retourner du contenu à la commande suivante (par <strong>then</strong>) et reject permet de lancer une erreur (capturée par un <strong>catch</strong>).</p>
                    <Snippet code={`
    const promesse = new Promise((resolve, reject) => {
        //fait qqc qui nécessite du temps
        resolve(500);
    });
    promesse
      .then(nombre => console.log(nombre)) //affiche 500
      .catch(err => console.log(err));  //si une erreur était lancée

                    `}/>
                    <Snippet code={`
    //un exemple
    async () => {
        const waitForXSeconds = (sec) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, sec * 1000);
            });
        };
        const delai = 5;
        const unBooleen = await waitForXSeconds(delai);
        console.log(delai+ ' secondes écoulées');
    }
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
