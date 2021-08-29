import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const Week6 = (props) => {
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
                    <p>On pourrait aussi utiliser son équivalent: </p>
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
                    <p>Le contexte peut aussi être récupéré dans une composante à l'aide du hook <A internal={false} url="https://fr.reactjs.org/docs/hooks-reference.html#usecontext"><strong>useContext</strong></A>. Cependant, un changement à celui-ci ne semble pas toujours provoquer un nouveau rendu.</p>
                    <Snippet language="jsx" code={`
    import ThemeContext from '../src/providers/themeContext';
    import React, {useContext} from 'react';

    const DeeplyNestedComponent = props => {
        const currentContext = useContext(ThemeContext);
        console.log(currentContext.themeActif);
    };
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
    import React, {useState} from 'react';
    const {Provider, Consumer} = React.createContext();

    const ThemeProvider = props => {
        const [themeActif, setThemeActif = useState('devil');

        const themeSwitchHandler = () => {/* ... */};

        return (
            <Provider value={{themeActif: themeActif}}>{props.children}}</Provider>
        );
    };
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

export default Week6;
