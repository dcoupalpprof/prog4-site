import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

//todo: defaultProps, propTypes, css module, prop.children, qq lifecycle hooks

const Week3 = (props) => {
    return (
        <section>
    {/*        <Section title="Introduction à React">*/}
    {/*            <Groupe title="Installation">*/}
    {/*                <p>Une fois Node.js installé, il vous faut ouvrir une nouvelle ligne de commande pour utiliser le module <strong>create-react-app</strong>. <br/>*/}
    {/*                    On utilisera npx pour éviter d'avoir à installer une version localement. (voir la section <A url='/references' internal={true}>références</A> pour plus d'informations)</p>*/}
    {/*                <Snippet code={`*/}
    {/*//L'utiliser directement avec npx*/}
    {/*npx create-react-app unNouveauProjet*/}
    {/*            `}/>*/}
    {/*                <p>Depuis le dossier du projet, on démarre le projet ainsi que sa compilation automatique avec la commande <strong>npm start</strong>.</p>*/}
    {/*            </Groupe>*/}
    {/*            <Groupe title="Composante fonctionnelle">*/}
    {/*                <p>Une composante fonctionnelle est une fonction devant retourner du <strong>JSX</strong> (<A url="https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-different-in-the-new-transform">syntaxe ressemblant à du html</A>, mais <A url="https://www.icantbelieveitsnotbutter.com/">c'est*/}
    {/*                    du JS</A>!). La paire de parenthèses après le return permet d'afficher le JSX sur plusieurs lignes.</p>*/}
    {/*                <p>Le module React doit absolument être importé pour créer une composante (même s'il n'est pas utilisé de façon explicite).</p>*/}
    {/*                <p><strong>A</strong> - Dans les versions qui précédaient V17, on devait importer le module React. Ceci n'est plus nécessaire ni utilisé, mais vous pourriez tout de même y être confrontés en entreprise ou sur le web comme la version 17 est toute récente.</p>*/}
    {/*                <Snippet language="jsx" code={`*/}
    {/*// import React from 'react';  // - A*/}
    {/*const UneComposante = (props) => {*/}
    {/*    //Un peu de logique servant à l'affichage possible (très peu)*/}
    {/*    return (*/}
    {/*        <div>*/}
    {/*            <h1>Du contenu</h1>*/}
    {/*        </div>*/}
    {/*    );*/}
    {/*};*/}
    {/*            `}/>*/}
    {/*                <p>On peut ensuite utiliser <em>UneComposante</em> à l'intérieur d'une composante parent depuis le même fichier js.</p>*/}
    {/*                <Snippet language="jsx" code={`*/}
    {/*const App = (props) => (*/}
    {/*    <main>*/}
    {/*        <UneComposante/>*/}
    {/*    </main>*/}
    {/*);*/}

    {/*//App est exporté pour être utilisé depuis un autre fichier*/}
    {/*export default App;*/}
    {/*            `}/>*/}
    {/*                <p>Il serait aussi possible de passer des données dynamiquement à <em>UneComposante</em> en ajoutant des attributs*/}
    {/*                    au nom arbitraire qui pourront être récupérées à l'intérieur des <strong>props</strong> de <em>UneComposante</em>.</p>*/}
    {/*                <p>On peut afficher dynamiquement des données ou exécuter des commandes js simples à l'aide des moustaches.</p>*/}
    {/*                <Snippet language="jsx" code={`*/}
    {/*const UneComposante = (props) => (*/}
    {/*        <div>*/}
    {/*            <h1>{props.untitre}</h1>*/}
    {/*        </div>*/}
    {/*    );*/}
    {/*};*/}

    {/*const App = (props) => (*/}
    {/*    <main>*/}
    {/*        <UneComposante untitre="Le titre de cette composante"/>*/}
    {/*    </main>*/}
    {/*);*/}

    {/*export default App;*/}
    {/*            `}/>*/}
    {/*                <p>On peut passer du texte statique à une composantes à travers ses props, mais on peut également passer tout type de contenu ainsi que des variables en utilisant les moustaches:</p>*/}
    {/*                <Snippet language="jsx" code={`*/}
    {/*const App = (props) => {*/}
    {/*    const texte = "du texte";*/}
    {/*    const nombre = 5;*/}
    {/*    return (*/}
    {/*        <main>*/}
    {/*            <UneComposante titre={texte} age={10} nombre={nombre} objet={{prop1: 2, prop2: "texte"}} />*/}
    {/*        </main>*/}
    {/*    );*/}
    {/*};*/}

    {/*export default App;*/}
    {/*            `}/>*/}

    {/*                <p>Pour faire un suivi plus facile et améliorer la complétion de code par l'IDE pour les props passées à une composante, on utilisera la décomposition d'objet:</p>*/}
    {/*                <Snippet language="jsx" code={`*/}
    {/*const UneComposante = ({titre, age, nombre, objet}) => (*/}
    {/*        <div>*/}
    {/*            <h1>{titre}: {objet.prop1}</h1>*/}
    {/*        </div>*/}
    {/*    );*/}
    {/*};*/}
    {/*            `}/>*/}
    {/*                <p>Pour faire une boucle à l'intérieur du "html", on convertira habituellement un tableau de données en un tableau de jsx. On utilisera donc la fonction <strong>map</strong> de Javascript:</p>*/}
    {/*                <p>React demande une clé unique pour chaque balise générée par map.</p>*/}
    {/*                <Snippet language="jsx" code={`*/}
    {/*const App = (props) => {*/}
    {/*    const eleves = [{prenom: 'Jimbo', nom: 'Scott'}, {prenom: 'Ludvig-Vanbe', nom: 'Toven'}, {prenom: 'Jimmy', nom: 'Chastenais'}];*/}
    {/*    return (*/}
    {/*        <main>*/}
    {/*            <ul>*/}
    {/*                { eleves.map((eleve, index) => <li key={prenom}>{eleve.prenom + ' ' + eleve.nom}</li>) }*/}
    {/*            </ul>*/}
    {/*        </main>*/}
    {/*    );*/}
    {/*};*/}

    {/*export default App;*/}
    {/*            `}/>*/}
    {/*            </Groupe>*/}
    {/*        </Section>*/}



            <Section title="Les composantes React">

                <Groupe title="Modification du state lorsqu'il s'agit d'un tableau - AJOUT">
                    <p>Les méthodes utilisées pour modifier le state lorsqu'il contient une <strong>référence</strong> (tableau ou objet) doivent se faire de façon immuable. C'est à dire qu'on ne doit pas modifier direct le tableau ou l'objet, mais le remplacer par un nouveau tableau ou un nouvel objet. </p>
                    <p>Pour ajouter un élément à un tableau, on utilisera donc la <strong><A url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition">décomposition</A></strong>.</p>
                    <Snippet language="jsx" code={`
    import {useState} from 'react';
    
    const App = props => {
        
        const [tableau, setTableau] = useState(['du texte', 'un autre texte']);
        
        const ajouterAuTableau = () => {
            const textePourAjout = 'un nouveau texte';
            setTableau(prevTableau => [...prevTableau, textePourAjout]);
        };
        
        {/* ... reste de la composante */}
    
    };  
                    `}/>
                    <p>Cette composante peut être testée sur <A url="https://codesandbox.io/s/green-leaf-evbg3?file=/src/App.js" internal={false}>Codesandbox.io</A>.</p>
                </Groupe>

                <Groupe title="Modification du state lorsqu'il s'agit d'un tableau - SUPPRESSION">
                    <p>Les méthodes utilisées pour modifier le state lorsqu'il contient une <strong>référence</strong> (tableau ou objet) doivent se faire de façon immuable. C'est à dire qu'on ne doit pas modifier direct le tableau ou l'objet, mais le remplacer par un nouveau tableau ou un nouvel objet. </p>
                    <p>Pour supprimer un élément d'un tableau, on pourra utiliser la méthode <strong><A url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter">filter</A></strong> qui permet de conserver uniquement les éléments respectant une condition donnée.</p>
                    <Snippet language="jsx" code={`
    import {useState} from 'react';
    
    const App = props => {
        
        const [tableau, setTableau] = useState(['Adam','Julie','Nicolas','Rocktavie','Lucienne','Louiselle']);
        
        const supprimerDuTableau = () => {
            //supprime l'élément à la position 0 du tableau
            setTableau(prevTableau => prevTableau.filter((texte, i) => {
                // conserve tous les éléments qui ne sont pas situés à la première position du tableau
                return i !== 0;
            }));
        };
        
        {/* ... reste de la composante */}
    
    };  
                    `}/>
                    <p>Cette composante peut être testée sur <A url="https://codesandbox.io/s/angry-keldysh-mil83?file=/src/App.js" internal={false}>Codesandbox.io</A>.</p>
                </Groupe>

                <Groupe title="Modification du state lorsqu'il s'agit d'un tableau - MODIFICATION">
                    <p>Les méthodes utilisées pour modifier le state lorsqu'il contient une <strong>référence</strong> (tableau ou objet) doivent se faire de façon immuable. C'est à dire qu'on ne doit pas modifier direct le tableau ou l'objet, mais le remplacer par un nouveau tableau ou un nouvel objet.</p>
                    <p>Pour modifier un élément d'un tableau, on pourra utiliser la méthode <strong><A url="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map">map</A></strong> qui permet de conserver le même nombre d'élément, mais de pouvoir les transformer/modifier.</p>
                    <Snippet language="jsx" code={`
    import {useState} from 'react';
    
    const App = props => {
        
        const [tableau, setTableau] = useState(['Adam','Julie','Nicolas','Rocktavie','Lucienne','Louiselle']);
        
        const modificationDuTableau = () => {
            //met l'élément 0 du tableau en lettre majuscule
            setTableau(prevTableau => prevTableau.map((texte, i) => {
                // conserve tous les éléments intacts sauf le premier
                return i === 0 ?  texte.toUpperCase() : texte;
            }));
        };
        
        {/* ... reste de la composante */}
    
    };  
                    `}/>
                    <p>Cette composante peut être testée sur <A url="https://codesandbox.io/s/ecstatic-sun-e2m3s?file=/src/App.js" internal={false}>Codesandbox.io</A>.</p>
                </Groupe>

                <Groupe title="Affichage conditionnel d'une portion du JSX" toggleable={true} hidden={false}>
                    <p>Il arrivera souvent que l'on voudra afficher ou non une portion de JSX en fonction d'une condition. On pourra évidemment passer par une fonction pour ce faire, mais le tout alourdit la tâche.</p>
                    <p>Comme on ne peut pas déclarer de bloc à l'intérieur du JSX, l'une des stratégies est d'utiliser un opérateur ternaire.</p>
                    <Snippet language="jsx" code={`
    const MaComposante = () => {
        const [isEditable, setIsEditable] = useState(false);
        
        return (
            <div>{/* L'opérateur ternaire permet d'afficher une ou l'autre des balises en fonction de la condition */}
                { isEditable ? (<p>Du texte</p>) : (<input type="text" value="du texte"/>)}
            </div>
        );
    };
    
    /* Avec une classe */
    const MonAutreComposante = () => {
        const [isSelected, setIsSelected] = useState(false);
        
        return (
            <div className={isSelected ? 'selected': 'not-selected'}> {/* Une classe pourrait aussi être ajoutée conditionnellement */}
                <p>Du texte</p>
            </div>
        );
    };
                    `}/>
                    <p>Dans les cas où on veut afficher ou non une portion de code sans vouloir fournir d'alternative, une des façons de procéder serait la suivante:</p>
                    <Snippet language="jsx" code={`
    /* Avec une classe */
    const SayMyName = () => {
        const [isVisible, setIsVisible] = useState(false);
        
        return (
            <div> {/* Cette approche est valide, mais on procède souvent autrement. */}
                { isVisible ? ( <p>Du texte</p> ) : null }
            </div>
        );
    };
                    `}/>
                    <p>Quand on exécute la commande suivante <em>console.log(5 > 1 && 'allo');</em>, le résultat affiché est <strong>allo</strong>. Cela veut donc dire que ce qui est au bout de la condition est affiché si le début de la condition est true. Selon cette logique, si on veut afficher conditionnellement un bout de JSX sans vouloir fournir d'alternative, on peut aussi procéder ainsi:</p>
                    <Snippet language="jsx" code={`
    /* Avec une classe */
    const SayMyName = () => {
        const [isVisible, setIsVisible] = useState(false);
        
        return (
            <div> {/* Le paragraphe sera affiché si isVisible est true. Sinon rien ne sera affiché dans le div. */}
                { isVisible && ( <p>Du texte</p> ) }
            </div>
        );
    };
                    `}/>
                </Groupe>

                <Groupe title="Les composantes à état - PLUS UTILISÉES DANS CE COURS" toggleable={true} hidden={true}>
                    <p>Les composantes à état sont aussi utilisées comme des balises, mais sont déclarées à l'aide d'une classe plutôt que d'une fonction. <br/>
                        La composante à état doit contenir une <strong>méthode render</strong> retournant du jsx pour se qualifier. <br/>
                        C'est dans ces composantes que se situera l'essentiel de la logique de l'application tandis que les composantes fonctionnelles serviront à afficher le contenu et détecter des interactions par l'utilisateur.</p>
                    <Snippet language="jsx" code={`
    class UneComposante extends React.Component {

        render() {
            return (
            <div></div>
        );
    }

    //utilisation
    <div><UneComposante/></div>
                    `}>
                    </Snippet>
                    <p>Une composante à état a aussi accès aux props par sa propriété <strong>props</strong>:</p>
                    <Snippet language="jsx" code={`
    class UneComposante extends React.Component {
        render() {
            return (
                <div>{this.props.texte}</div>
            );
        }
    }
    //utilisation
    <div><UneComposante texte="Du texte"/></div>
                    `}/>
                    <p>Parmi les différences entre les deux types de composantes, on note la propriété <strong>state</strong> dans la composante à état (d'où elle tire son nom). <br/>
                        C'est dans le state que l'on enregistre les informations/données propagées à travers les composantes fonctionnelles par les props.</p>
                    <Snippet language="jsx" code={`
    class UneComposante extends React.Component {
        state = {
            texte: 'Du texte',
            pensee: 'Une pensée'
        };

        render() {
            return (
                <UneAutreComposante texte={this.state.texte}/>
            );
        }
    }
                    `}/>
                    <p>La référence à des méthodes de la composante peuvent également être passée par les props afin de permettre les interactions par l'utilisateur.</p>
                    <Snippet language="jsx" code={`
    class UneComposante extends React.Component {
        state = {
            texte: "Du texte"
        };

        onClickHandler = e => {
            console.log('test');
        };

        render() {
            return (
                <div>
                    <h2>Une Composante</h2>
                    <UneAutreComposante
                      clickFn={this.onClickHandler}
                      texte={this.state.texte}
                    />
                </div>
            );
        }
    }

    const UneAutreComposante = props => (
        <div>
            <h3>Une autre composante</h3>
            <p>{props.texte}</p>
            {/* Un clic sur le bouton ci-bas afficherait "test" dans la console */}
            <button onClick={props.clickFn}>Un bouton</button>
        </div>
    );
                    `}/>
                    <p>Une modification du state est la seule méthode permettant un nouveau rendu des composantes qui y sont rattachées.
                        On ne modifiera jamais le state manuellement. On utilisera plutôt la <strong>setState</strong> à cette fin.</p>
                    <Snippet language="jsx" code={`
        //extrait de la classe "UneComposante"
        state = {
            texte: 'Du texte'
        };

        onClickHandler = e => {
            this.setState({texte: 'Un nouveau texte'});
        };
                    `}/>
                    <p>Selon le code ci-haut, un clic sur le bouton de la composante <em>UneAutreComposante</em> modifierait le texte affiché pour <em>Un nouveau texte</em> comme le state a été modifié. Cet exemple est disponible sur <A url="https://codesandbox.io/embed/6v64k150pk">codesandbox.io</A></p>
                    <p className="underline">La modification du state implique le respect de règles concernant l'immuabilité de celui-ci. Voir les Références pour la <A url={"/references"} internal={true}>manipulation d'un state à tableaux ou à objets</A>.</p>
                </Groupe>
            </Section>
        </section>
    );
};

export default Week3;
