import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week5 = (props) => {
    return (
        <section>
            <Section title="Le Context API pour centraliser l'état d'une application">
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
    import React from 'react';
    import ThemeContext from './providers/themeContext';

    class App extends React.Component {

        state = {
            themeActif: 'devil'
        };

        themeSwitchHandler = () => { };

        render() {
            return (
                <div>
                    <ThemeContext.Provider value={{
                        themeActif: this.state.themeActif,
                        changeThemeFn: this.themeSwitchHandler
                    }}>
                        {/* ... */}}
                    </ThemeContext.Provider>
                </div>
            );
        }
    }
                    `}/>
                    <p>Le contexte créé est un objet contenant une composante sous la propriété <strong>Provider</strong> et une autre sous la propriété <strong>Consumer</strong>. On utilise une fois le <em>Provider</em> dans l'application en le positionnant de façon à ce que les composantes nécessitant ses informations en soit enveloppées. On utilisera ensuite autant de <em>Consumers</em> qu'il sera nécessaire directement à l'intérieur des composantes qui dépendent de ces données. <strong>L'enfant direct d'un Consumer doit être une fonction recevant les données en paramètre et devant retourner du jsx</strong>.</p>
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
                    <p>Les fonctions du contexte peuvent être passées à la composante qui le consomme sous la forme de callback ou le contexte en entier peut être récupéré dans la <strong>propriété statique contextType</strong> d'une composante. Cependant, un seul contexte ne pourra être consommé de cette façon.</p>
                    <Snippet language="jsx" code={`
    import ThemeContext from '../src/providers/themeContext';

    class DeeplyNestedComponent extends React.Component {
        componentDidMount {
            console.log(this.context.themeActif);
        }
    }

    DeeplyNestedComponent.contextType = ThemeContext;
                    `}/>
                    <p>Si on trouve désagréable la syntaxe d'utilisation du Consumer et du Provider (sous la forme Contexte.Provider) on ne pourrait qu'en exporter ses deux propriétés:</p>
                    <Snippet language="jsx" code={`
    //themeContext.js
    const {Provider, Consumer} = React.createContext();

    export {Provider as ThemeProvider, Consumer as ThemeConsumer};

    //App.js
    import {ThemeProvider} from './providers/themeContext';
    ...
    <ThemeProvider value={{themeActif: this.state.themeActif}}>{/* ... */}</ThemeProvider>
                    `}/>
                </Groupe>
                <Groupe title="Un contexte comme un service autonome">
                    <p>Dans l'exemple précédent, on peut reprocher au contexte de dépendre de la composante App. Il serait préférable qu'il puisse avoir son propre state et ses propres méthodes.</p>
                    <Snippet language="jsx" code={`
    //themeContext.js
    const {Provider, Consumer} = React.createContext();

    class ThemeProvider extends React.Component {
        state = {
            themeActif: 'devil',
        };

        themeSwitchHandler = () => {/* ... */};

        render() {
            <Provider value={{themeActif: this.state.themeActif}}>{props.childre}}</Provider>
        }
    }
    export {ThemeProvider, Consumer as ThemeConsumer};

     //App.js
    import {ThemeProvider} from './providers/themeContext';
    ...
    <ThemeProvider>{/* ... */}</ThemeProvider>
                    `}/>
                </Groupe>
            </Section>
        </section>
    );
};

export default Week5;