import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

//todo: defaultProps, propTypes, css module, prop.children, qq lifecycle hooks

const Week2 = (props) => {
    return (
        <section>
            <Section title="Les composantes React">
                <p style={{marginBottom: '1em'}} className="underline">Ces notes sont basées sur la version 16.7 de React. L'intégration des <A url="https://putaindecode.io/fr/articles/js/react/react-hooks/">Hooks (v16.7.0-alpha.1)</A> contredit certains passages de ces notes.
                    L'état alpha de cette mise à jour et les recommandations de l'équipe React ont été dissuasifs dans l'intégration des nouvelles façons d'utiliser les composantes fonctionnelles dans le cours.</p>
                <Groupe title="Les composantes fonctionnelles">
                    <p className="p-first">Une composante fonctionnelle se qualifie à partir du moment qu'elle répond aux critères suivants:</p>
                    <ul className="cours-liste">
                        <li>Elle importe le module React;</li>
                        <li>Elle est une fonction retournant du JSX</li>
                        <li>Le JSX retourné n'est composé que d'un seul élément racine</li>
                    </ul>
                </Groupe>
                <Groupe title="Les composantes à état">
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