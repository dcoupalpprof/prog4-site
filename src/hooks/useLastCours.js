import {useFBCoursProvider} from "../contexts";

const randomStrings = [
    '8ASCVbR45s',
    'vaOKbVrHhE',
    'FHzTc8IAAN',
    '6zuwtYLY32',
    'jxOzjbXpZo',
    'a6gTIY8tCa',
    'YQ2je5oJAg',
    'ahlwv8xWkz',
    '9qEKLmCNdW',
    'Lx57UYuVAV',
    'bqJ933MauL',
    'qNSkAH8RcI',
    'tXtrEfkirW',
];

const coursTitles = [
    'Retour sur JS',
    'React',
    'Les composantes React',
    'Les composantes React (suite)',
    'React-Router',
    'Thierry',
    'Thierry - The Sequel',
    'Tâches asynchrones',
    'Context API & Firebase',
    'Expérimentations',
    'Je ne sais trop',
];


const useLastCours = () => {
    const {lastUnlocked, loading} = useFBCoursProvider();
    const noLastCours = !loading ? randomStrings.indexOf(lastUnlocked) + 1 : null;

    return {
        noLastCours,
        coursTitles
    };
};

export default useLastCours;
