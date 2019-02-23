import React from 'react';

const randomStrings = [
    '8ASCVbR45s',
    'vaOKbVrHhE',
    'FHzTc8IAAN',
    '6zuwtYLY32',
    'jxOzjbXpZo',
    'a6gTIY8tCa'
];

const coursTitles = [
    'Retour sur Javascript',
    'Les composantes React',
    'React-Router',
    'Tâches asynchrones',
    'Context API',
    'Expérimentations',
    'Introduction à React',
];

const withLastCours = (WrappedComponent) => {

    const noLastCours = randomStrings.indexOf(process.env.REACT_APP_LAST_COURSE) + 1;

    return (props) => (<WrappedComponent {...props} noLastCours={noLastCours} coursTitles={coursTitles}/>);
};

export default withLastCours;