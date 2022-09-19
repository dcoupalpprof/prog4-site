import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

//todo: defaultProps, propTypes, css module, prop.children, qq lifecycle hooks

const Week3 = (props) => {
    return (
        <section>
            <Section title="State sous forme d'objets et de tableaux d'objets">

                <Groupe title="Modification du state lorsqu'il s'agit d'un objet">
                    <p>À l'image du tableau, pour modifier un state défini comme un objet, il est nécessaire de fournir un nouvel objet avec les mêmes propriétés/valeurs en y appliquant également les modifications.</p>
                    <Snippet language="jsx" code={`
    import {useState} from 'react';
    
    const App = props => {
        
        const [infos, setInfos] = useState({
            prenom: 'Robert-Denis',
            nom: 'Rheault,
            age: 66
        });
        
        const modifierAge = (nouvelAge) => {
            setInfos(current => {
                return {
                    ...current, // on copie l'objet d'origine par décomposition
                    age: nouvelAge // on écrase ensuite la propriété voulue
                };
            });
        };
        
        {/* ... reste de la composante */}
    
    };  
                    `}/>
                </Groupe>

                <Groupe title="Modification d'un élément à l'intérieur d'un tableau d'objets">
                    <p>La tâche se complexifie quelque peu puisqu'il est nécessaire de modifier à la fois un tableau et un objet selon les méthodes prescrites.<br/>
                    On utilisera donc un <strong>.map</strong> pour permettre de modifier un élément du tableau (en utilisant un identifiant quelconque pour reconnaître le bon objet à modifier) et on modifiera l'objet selon la méthode recommandée ci-dessus.</p>
                    <Snippet language="jsx" code={`
    import {useState} from 'react';
    
    const App = props => {
        
        const [tableau, setTableau] = useState([
            {
                id: 'a'
                prenom: 'Robert-Denis',
                nom: 'Rheault',
                age: 66
            }, {
                id: 'b'
                prenom: 'Bill',
                nom: 'Paxton',
                age: 52
            }
        ]);
        
        const modifierAge = (actorId, nouvelAge) => {
            setTableau(current => current.map((acteur) => {
                // si l'acteur ne correspond pas à celui à modifier, on le garde tel quel
                // si c'est le même on modifie l'objet par décomposition et on le retourne au map
                return acteur.id !== actorId ? acteur : {
                    ...acteur,
                    age: nouvelAge
                }; 
            }));
        };
        
        {/* ... reste de la composante */}
    
    };  
                    `}/>
                </Groupe>
            </Section>

            <Section title="Test unitaire - Partie 1">
                <Groupe title="Création d'un premier test">
                    <p>Les tests unitaires permettent de s'assurer de la fiabilité du code durant le développement et dans le temps. Il incombe au développeurs de rédiger ses tests unitaires au fur et à mesure du développement de ses composantes.
                    L'ajout d'une nouvelle fonctionnalité, la mise à jour d'une dépendance ou l'utilisation de données externes imprévues peuvent compromettre le bon fonctionnement de l'application.</p>
                    <p>On désirera principalement (pour l'instant) tester les fonctionnalités impliquant des interactions par l'utilisateur et l'affichage conditionnel du JSX.</p>
                    <p>Certains utilisent les tests unitaires pour faire la liste des fonctionnalités nécessaires au fonctionnement d'un composante. Ces tests échouent donc tant que la composante n'est pas développée telle que prévue initialement.</p>
                    <p>La stratégie de tests doit être développée sous l'angle des besoins de l'utilisateur.</p>
                    <p>On rédigera normalement la série de tests à l'intérieur d'un fichier du même nom que la composante à tester en plus du suffixe .test (ex: Dashboard.test.js). On utilisera <strong>l'approche des 3A: Arrange (Préparer), Act (Exécution), Assert (Validation)</strong>. On utilisera Jest (développé pour React) comme cadriciel de tests.</p>
                    <Snippet language="javascript" code={`
    import {screen, render} from '@testing-library/react';
    import '@testing-library/jest-dom';
    import userEvent from '@testing-library/user-event';
    import MaComposante from './MaComposante';
                    
    // Les méthodes test/it sont ajoutées à l'environnement global par jest, inutile de l'importer                    
    test('Description du test', () => {
        // Arrange: On prépare la composante, les données nécessaires aux tests...
        render(<MaComposante/>);
        
        // Act: On modifie le contenu, simule des actions de l'utilisateur...
        const monButton = screen.getByRole('button');
        userEvent.click(monButton);
        
        // Assert: On valide que notre exécution rencontre les attentes
        const compteurElement = screen.getByText('1 clic');
        expect(compteurElement).toBeInTheDocument();
    });
                    `}/>
                    <p>On peut rédiger autant de tests que nécessaires dans le fichier et on peut également utiliser plusieurs <em>expect</em> dans un même test. Pour réussir, chacun d'eux devra être un succès.</p>
                    <p>Il est également possible de regrouper des tests à l'intérieur d'une suite pour ajouter une description supplémentaire:</p>
                    <Snippet language="javascript" code={`
//...

describe('Nom de la suite de tests', () => {
    test('...qqc', () => {});
    
    test('...qqc', () => {});
    
    test('...qqc', () => {});
});    
                    `}/>
                </Groupe>
                <Groupe title="Requêtes">
                    <p><A url="https://testing-library.com/docs/queries/about" internal={false}>La liste de requêtes</A> pouvant être utilisées afin de cibler un élément du html peut sembler limitée. On pourra cibler des balises html par leur <A url="https://www.w3.org/TR/html-aria/#docconformance" internal={false}>rôle implicite d'accessibilité</A> ou
                    en les marquant à l'aide d'un <A url="https://testing-library.com/docs/queries/bytestid" internal={false}>attribut data-testid</A></p>.
                    <p>Il existe <strong>3 catégories</strong> de requêtes. Elles varient en fonction du verbe utiliser comme préfixe:</p>
                    <ul className="cours-liste">
                        <li><strong>get...</strong>: Retourne les éléments trouvés, mais retourne une erreur si aucun n'est trouvé.</li>
                        <li><strong>query...</strong> : Retourne les éléments trouvés et retourne null aucun élément ne correspond à la requête.</li>
                        <li><strong>find...</strong> : Retourne une promesse résolue avec l'élément trouvé ou rejeté si aucun élément ne correspond.</li>
                    </ul>
                    <p>Chaque méthode a aussi une version au pluriel retournant un tableau d'éléments trouvés. (ex: getByText & getAllByText)</p>
                    <p>Toutes les méthodes acceptent un élément "conteneur" pour contraindre et préciser la sélection. Ex:</p>
                    <Snippet language="javascript" code={`
import {screen, getByText} from '@testing-libray/dom';        

//...
const liElement = screen.getByRole('listitem');
// récupère le bouton enregistrer dans le li
const buttonElement = getByText(liElement, 'Enregistrer');
                    `}/>
                    <p>Les requêtes utilisées sur l'objet screen utilisent body comme contrainte.</p>
                </Groupe>
                <Groupe title="Matchers / validateurs">
                    <p>Pour obtenir des validateurs plus adaptés au html (DOM), on utilisera (et importera) ceux provenant de la <A url="https://github.com/testing-library/jest-dom" internal={false}>librairie
                        d'extension jest-dom</A>.</p>
                </Groupe>
            </Section>
        </section>
    );
};

export default Week3;
