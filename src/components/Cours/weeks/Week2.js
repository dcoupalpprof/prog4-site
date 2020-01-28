import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

//todo: defaultProps, propTypes, css module, prop.children, qq lifecycle hooks

const Week2 = (props) => {
    return (
        <section>
            <Section title="Les composantes React">
                <Groupe title="Les composantes fonctionnelles">
                    <p className="p-first">Une composante fonctionnelle se qualifie à partir du moment qu'elle répond aux critères suivants:</p>
                    <ul className="cours-liste">
                        <li>Elle importe le module React;</li>
                        <li>Elle est une fonction retournant du JSX</li>
                        <li>Le JSX retourné n'est composé que d'un seul élément racine</li>
                    </ul>
                </Groupe>
                <Groupe title="Mettre à jour le contenu d'un composante">
                    <p>Le JSX retourné par une composante ne pourra pas être modifié tant qu'un nouveau rendu de la composante ne sera déclenché. Un changement des variables affichées dynamiquement ne résultera donc pas automatiquement à un changement des valeurs affichées.</p>
                    <p>Pour qu'on nouveau rendu soit effectué (que la composante fonctionnelle soit exécutée à nouveau), on doit remplir l'une ou l'autre des ces conditions:</p>
                    <ul className="cours-liste">
                        <li>Les <strong>props</strong> qui lui sont passées doivent être modifiées</li>
                        <li>Son <strong>état</strong> (<em>state</em>) doit être modifié</li>
                    </ul>
                    <p>On se souviendra que les props sont les nouveaux attributs ajoutés sur la balise lors de son utilisation, mais qu'est-ce que l'état de la composante?</p>
                </Groupe>
                <Groupe title="État d'une composante">
                    <p><span className="underline">Introduit à la version 16.8</span> de React, l'ajout d'un état aux composantes fonctionnelles est rendu possible grâce aux <strong><A url="https://fr.reactjs.org/docs/hooks-intro.html" internal={false}>Hooks</A></strong>.</p>
                    <p>Le Hook <strong>useState</strong> doit être importé depuis le package React et <span className="underline">permet de
                        déclarer un getter et un setter d'une variable que l'on voudra afficher et modifier à l'intérieur
                        de la composante</span>. L'utilisation du setter lancera un nouveau rendu de la composante.</p>
                    <Snippet language="jsx" code={`
    import React, {useState} from 'react';
    
    const UneComposante = (props) => {
        
        // useState nous retourne le getter puis le setter dans un tableau
        const tableauNomState = useState('Jimmy');  //on passe la valeur initiale en paramètre
        const currentNom = tableauNomState[0]; // le getter est passé en premier dans le tableau
        const setNom = tableauNomState[1]; // le setter est passé en deuxième dans le tableau
        
        // On utilisera la décomposition d'un tableau pour réduire la taille du code utilisé
        const [currentNom, setNom] = useState('Jimmy'); // remplace les 3 lignes de code ci-haut
        
        const onClickHandler = () => {
            setNom('Bob');
        };
        
        return (
            <div>
                <h3>{currentNom}</h3>
                <button onClick={onClickHandler}>Clic!</button>
            </div>
        );
    };
                        
                    `}/>
                    <p>Selon le code ci-haut, un clic sur le bouton de la composante <em>UneComposante</em> modifierait le prénom affiché pour <em>Bob</em> comme le state a été modifié. Cet exemple est disponible sur <A url="https://codesandbox.io/s/lucid-grothendieck-kqvci">codesandbox.io</A></p>
                    <p>La modification du state implique le respect de règles concernant l'immuabilité de celui-ci. Voir les Références pour la <A internal={false} url="http://localhost:3001/references">manipulation d'un state à tableaux ou à objets</A>.</p>
                </Groupe>
                <Groupe title="Les composantes à état - PLUS UTILISÉES DANS CE COURS" toggleable={true} hidden={true}>
                    <p>Les composantes à état sont aussi utilisées comme des balises, mais sont déclarées à l'aide d'une classe plutôt que d'une fonction. <br/>
                        La composante à état doit contenir une <strong>méthode render</strong> retournant du jsx pour se qualifier. <br/>
                    C'est dans ces composantes que se situera l'essentiel de la logique de l'application tandis que les composantes fonctionnelles serviront à afficher le contenu et détecter des interactions par l'utilisateur.</p>
                    <Snippet language="jsx" code={`
    //ex:
    import React from 'react';

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

export default Week2;
