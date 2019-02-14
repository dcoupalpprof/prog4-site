import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week4 = (props) => {
    return (
        <section>
            <Section title="Les phases du cycle de vie d'une composante à état (lifecycle hooks)">
                <Groupe title="Les phases">
                    <p>Les composantes à état passent à travers plusieurs phases afin d'afficher et de modifier leur contenu. Certaines méthodes correspondant à ces différentes phases peuvent donc être utilisées afin d'exécuter du code à ces moments précis. Le <A url="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" internal={false}>diagramme <em>React lifecycle methods</em></A> suivant nous en donne un bon aperçu.</p>
                    <p>En plus du <strong>render</strong> déjà connu, les plus courantes sont <strong>componentDidMount, componentDidUpdate et componentWillUnmount</strong>. On pourra d'ailleurs, dans ces trois dernières méthodes exécuter ce qu'on appelle des <strong>effets secondaires (side effects)</strong>. Les effects secondaires ne sont pas directement en lien avec les opérations de la composantes (fonctions pures). Une synchronisation avec un serveur, mise en cache de données ou la génération d'un log pourraient en être de bons exemples.</p>
                    <p>Parlant d'effets secondaires, qu'en est-il des requêtes exécutées vers un serveur distant?</p>
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
        </section>
    );
};

export default Week4;