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
            
        </section>
    );
};

export default Week8;
