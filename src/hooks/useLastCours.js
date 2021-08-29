import {useFBCoursProvider} from "../contexts";

const randomStrings = [
    '8ASCVbR45s',
    'vaOKbVrHhE',
    'FHzTc8IAAN',
    '6zuwtYLY32',
    'jxOzjbXpZo',
    'a6gTIY8tCa'
];

const coursTitles = [
    'Retour sur JS',
    'React',
    'Les composantes React',
    'React-Router',
    'Tâches asynchrones',
    'Context API',
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
